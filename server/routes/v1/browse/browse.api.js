'use strict';

import express from 'express';
import path from 'path';
import fs from 'fs';
import dir from 'node-dir';

let router = express.Router();

let PROJPATH = '/home/hegdeashwin/projects/elastic-hub'; //temp static

function directoryTree (projPath, onlyOneLevel, extensions) {
	const name = path.basename(projPath);
	const item = { projPath, name };
	let stats;

	try {
    stats = fs.statSync(projPath);
  } catch (e) {
    return null;
  }

	if (stats.isFile()) {
		const ext = path.extname(projPath).toLowerCase();
		if (extensions && extensions.length && extensions.indexOf(ext) === -1) {
      return null;
    }
		item.isFile = true;
		item.size = stats.size;  // File size in bytes
		item.extension = ext;
	} else if (stats.isDirectory()) {
		try {
      if(onlyOneLevel) {
        item.children = fs.readdirSync(projPath)
          .map(child => directoryTree(path.join(projPath, child), false, extensions))
          .filter(e => !!e);

        if (!item.children.length) {
          return null;
        }
        item.size = item.children.reduce((prev, cur) => prev + cur.size, 0);
      }
		} catch(ex) {
      /**
       * User does not have permissions, ignore directory
       */
			if (ex.code === "EACCES") {
        return null;
      }
		}
	} else {
    /**
     * Set item.size = 0 for devices, FIFO and sockets ?
     */
		return null;
	}
	return item;
}

router.post('/project/files', (req, res, next) => {

  dir.readFiles(PROJPATH, {
    exclude: ['node_modules', 'bower_components']
  }, (error, content, next) => {
    if(error) {
      throw error;
    }
    next();
  }, (error, files) => {
    if(error) {
      throw error;
    }

    files = directoryTree(PROJPATH, true);

    let projRootDir = PROJPATH.split('/');
    projRootDir = projRootDir[projRootDir.length - 1];

    res.status(200).json({
  		"project": {
        "name": projRootDir,
        "files": files
      }
  	});
  });

});

module.exports = router;

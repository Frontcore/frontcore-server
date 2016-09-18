'use strict';

import path from 'path';
import fs from 'fs';

/**
 * Utility function to construct object for directory & files structure
 * @param {String} projPath - project location
 * @param {Boolean} deepScan - deep scan into sub-directory
 * @param {String} extensions - file extensions
 */
exports.getDirectoryTree = function directoryTree (projPath, deepScan, extensions) {
	const name = path.basename(projPath);
	const item = { projPath, name };
	item.isFile = false;
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
			if(deepScan) {
				item.children = fs.readdirSync(projPath)
					.map(child => directoryTree(path.join(projPath, child), true, extensions))
					.filter(e => !!e);
			} else {
        item.children = fs.readdirSync(projPath)
        	.map(child => directoryTree(path.join(projPath, child), false, extensions))
          .filter(e => !!e);
			}
      if (!item.children.length) {
        return null;
      }
      item.size = item.children.reduce((prev, cur) => prev + cur.size, 0);
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

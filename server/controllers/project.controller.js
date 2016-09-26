import fs from 'fs';
import dir from 'node-dir';
import Project from '../models/project.model';
import ProjectDir from '../models/projectdir.model';
import dirUtils from '../utils/dirs.utils';

/**
 * Create project and store frontcore.json configuration information
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next() function
 */
exports.create = (req, res, next) => {
  let _reqFile = req.file;

  fs.readFile(_reqFile.path, 'utf-8', (error, fileContent) => {
    if (error) {
      return next(error);
    }

    let _fileNodes = JSON.parse(fileContent);

    _reqFile.name = _fileNodes.name;
    _reqFile.version = _fileNodes.version;
    _reqFile.description = _fileNodes.description,
    _reqFile.location = _fileNodes.location

    let _entry = new Project(_reqFile);

    _entry.save((error) => {
      if (error) {
        return next(error);
      } else {
        let _files = dirUtils.getDirectoryTree(_reqFile.location, true, true);
        _files = new ProjectDir(_files);
        _files.save((error) => {
          if (error) {
            return next(error);
          } else {
            res.status(200).json(_reqFile);
          }
        });
      }
    });
  });
};

exports.info = (req, res, next) => {
  let _reqPayload = req.body;

  Project.findById(_reqPayload.id, (error, result) => {
    if (error) {
      return next(error);
    }

    res.status(200).json(result);
  });
};

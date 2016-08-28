import fs from 'fs';
import ProjectInfo from '../models/projectInfo.model';

exports.create = function(req, res, next) {
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

    let _entry = new ProjectInfo(_reqFile);

    _entry.save();

    res.status(200).json(_reqFile);
  });
};

exports.info = function(req, res, next) {
  let reqPayload = req.body;

  let query = ProjectInfo.findOne({ name: reqPayload.name }, (error, result) => {
    if (error) {
      return next(error)
    }

    res.status(200).json(result);
  });
};

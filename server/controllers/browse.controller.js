import path from 'path';
import _ from 'underscore';
import dirUtils from '../utils/dirs.utils';

exports.browse = function(req, res, next) {
  let bodyPayload = req.body;
  let browsePath = path.normalize(bodyPayload.browsePath);

  let files = dirUtils.getDirectoryTree(browsePath, false);

  let projRootDir = browsePath.split('/');
  projRootDir = projRootDir[projRootDir.length - 1];

  res.status(200).json({
    "project": {
      "name": projRootDir,
      "path": files.projPath,
      "dirname": files.name,
      "files": _.sortBy(files.children, 'isFile')
    }
  });
};

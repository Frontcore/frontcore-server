class Format {

  size(bytes, decimals = 3) {
    if(!bytes) {
      return '0 Byte';
    }

    let k = 1000; // or 1024 for binary
    let dm = decimals;
    let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

}

module.exports = Format;

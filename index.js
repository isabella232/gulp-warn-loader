var errorMsg = "You must remove the GULP header comment before compiling by Webpack!"

module.exports = function (source) {
  var firstLine = source.split("\n")[0];
  if (firstLine.toLowerCase().indexOf("gulp") >= 0) {
    this.emitError(errorMsg);
  }
  return source;
}

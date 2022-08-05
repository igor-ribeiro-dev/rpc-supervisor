module.exports.getFullMethodName = function (baseName, method) {
    return [baseName, method].join('.');
}
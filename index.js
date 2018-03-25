module.exports = function(bundler) {
    bundler.addAssetType("json", require.resolve("./jsonObject"));
};

const { Asset } = require("parcel-bundler");

class jsonObjectAsset extends Asset {
    constructor(name, pkg, options) {
        super(name, pkg, options);
        this.type = "json";
    }
    parse(source) {
        this.code = JSON.parse(source);
    }
    generate() {
        // Send to JS bundler
        return {
            js: `module.exports = ${JSON.stringify(
                JSON.parse(JSON.stringify(this.code))
            )}`
        };
    }
}

module.exports = jsonObjectAsset;

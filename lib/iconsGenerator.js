const DEFAULT_SETTINGS = require("./DEFAULT_SETTINGS"),
    path = require("path"),
    sharp = require("sharp");

module.exports = (source, targetDir, settings = DEFAULT_SETTINGS) => {
    function createIcon (size, fileName) {
        return sharp(source)
            .resize(size)
            .toFile(path.join(targetDir, fileName));
    }

    // For Chrome for Android:
    createIcon(192, "touch-icon-192x192.png");

    // For non-Retina iPhone, iPod Touch, and Android 2.1+ devices
    createIcon(57, ["apple-touch-icon", settings.precomposed ? "-precomposed" : "", ".png"].join(""));

    // Generate icons for every apple device known to mankind
    settings.appleSizes.forEach(size => {
        const fileName = ["apple-touch-icon",
            `-${size}x${size}`,
            settings.precomposed ? "-precomposed" : "",
            ".png"].join("");

        return sharp(source)
            .resize(size)
            .toFile(path.join(targetDir, fileName));
    });
};

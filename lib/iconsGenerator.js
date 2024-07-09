const DEFAULT_SETTINGS = require("./DEFAULT_SETTINGS"),
    path = require("path"),
    Jimp = require("jimp");

module.exports = (source, targetDir, settings = DEFAULT_SETTINGS) => {
    function createIcon (size, fileName) {
        return Jimp.read(source)
            .then(image => {
                return image.resize(size, size)
                            .writeAsync(path.join(targetDir, fileName));
            })
            .catch(err => {
                console.error("Error processing image: ", err);
            });
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

        createIcon(size, fileName);
    });
};

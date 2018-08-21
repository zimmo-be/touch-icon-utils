const DEFAULT_SETTINGS = require("./DEFAULT_SETTINGS");

module.exports = (settings = DEFAULT_SETTINGS) => {
    const pre = settings.precomposed ? "-precomposed" : "",
        lines = [
            "<link rel=\"icon\" sizes=\"192x192\" href=\"touch-icon-192x192.png\">",
        ];
    settings.appleSizes
        .map(size => `${size}x${size}`)
        .forEach(size => {
            lines.push(`<link rel="apple-touch-icon${pre}" sizes="${size}" href="apple-touch-icon-${size}${pre}.png">`);
        });

    lines.push(`<link rel="apple-touch-icon${pre}" href="apple-touch-icon${pre}.png">`);
    return lines.join("\n");
};

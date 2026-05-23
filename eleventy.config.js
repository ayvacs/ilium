module.exports = function (eleventyConfig) {
    // copy everything from public -> dist first
    eleventyConfig.addPassthroughCopy({"public": "/"});

    return {
        "dir": {
            "includes": "../includes",
            "input": "pages",
            "output": "dist"
        }
    }
}
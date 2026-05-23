module.exports = function (eleventyConfig) {
    // copy everything from public -> dist first
    eleventyConfig.addPassthroughCopy({ "public": "/" });

    // make a collection of texts
    eleventyConfig.addCollection("text", function (collectionApi) {
        return collectionApi.getFilteredByTag("text")
            .sort((a, b) => b.date - a.date); // newest first
    });

    return {
        "pathPrefix": "ilium/",
        "dir": {
            "includes": "../includes",
            "input": "pages",
            "output": "dist"
        }
    }
}
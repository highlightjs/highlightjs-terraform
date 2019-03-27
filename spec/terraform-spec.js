const hljs = require("highlight.js/lib/highlight");
const { definer: terraform } = require("../terraform");
const fs = require("fs");
const path = require("path");
hljs.registerLanguage("terraform", terraform);

describe("respec-highlight bundle", () => {
  it("highlights terraform", () => {
    // Load the input file...
    const input = fs.readFileSync(
      path.resolve(__dirname, "./input.txt"),
      "utf-8"
    );

    // Do the highlight...
    const { value: result, language } = hljs.highlightAuto(input, [
      "terraform",
    ]);
    expect(language).toBe("terraform");

    // Check the output is what we expect...
    const expected = fs.readFileSync(
      path.resolve(__dirname, "./expected.txt"),
      "utf-8"
    );
    expect(result).toBe(expected);
  });
});

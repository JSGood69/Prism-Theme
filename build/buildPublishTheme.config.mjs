import fs from "fs";
import * as sass from 'sass';

const inputPath = "./src/scss/index-publish.scss";
const outputPath = "publish.css";

const result = sass.compile(inputPath, {
    charset: false,
    sourceMap: true
});

fs.writeFile(outputPath, result.css, () => true);

import { Minifier } from "./classes/SoareMinifier.js";

const editor = document.getElementById("editor");

document.getElementById("minify").addEventListener("click", function () {

    try {

        let min = new Minifier(editor.value);

        min.MaxCharPerLine = 150;
        min.Tokenizer();

        editor.value = min.Apply();

    } catch (except) {

        editor.value = `? Except: ${except}\n${editor.value}`

    }

});

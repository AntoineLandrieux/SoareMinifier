// This script connects a text editor to the Soare Minifier class.
// When the "minify" button is clicked, it minifies the editor's content.
// If an error occurs during minification, it prepends an error message to the editor.

// Import the Minifier class
import { Minifier } from "./classes/SoareMinifier.js";

// Get the editor textarea element
const editor = document.getElementById("editor");

// Add click event listener to the "minify" button
document.getElementById("minify").addEventListener("click", function () {

    try {
        // Create a new Minifier instance with the editor's content
        let min = new Minifier(editor.value);

        // Set the maximum characters per line for minification
        min.MaxCharPerLine = 150;

        // Tokenize the input code
        min.Tokenizer();

        // Replace editor content with minified code
        editor.value = min.Apply();

    } catch (except) {
        // If an error occurs, show the error message in the editor
        editor.value = `? Except: ${except}\n${editor.value}`

    }

});

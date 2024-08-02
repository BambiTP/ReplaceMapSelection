// ==UserScript==
// @name         Replace Map Select
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Replace the options of the map select element with a custom optgroup structure
// @match        https://tagpro.koalabeast.com/groups/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to replace the options of the select element
    function replaceSelectOptions() {
        const selectElement = document.querySelector('select.form-control.js-socket-setting[name="map"]');
        if (selectElement) {
            const newHTML = `
                <optgroup label="Rotation Maps">
                    <option value="A Flaccid Type Map">A Flaccid Type Map</option>
                    <option value="Almond">Almond</option>
                    <option value="Arti">Arti</option>
                    <option value="Audacity 2">Audacity 2</option>
                    <option value="BBL PIZZYspartan">BBL PIZZYspartan</option>
                    <option value="Bulldog">Bulldog</option>
                    <option value="Campari [MM24 Winner]">Campari [MM24 Winner]</option>
                    <option value="Centenaria">Centenaria</option>
                    <option value="Combine">Combine</option>
                    <option value="Crawfish Boil">Crawfish Boil</option>
                    <option value="FILO">FILO</option>
                    <option value="Galapagos">Galapagos</option>
                    <option value="Gumbo">Gumbo</option>
                    <option value="Lockhart [MM23 South Winner]">Lockhart [MM23 South Winner]</option>
                    <option value="Moon Base 2024">Moon Base 2024</option>
                    <option value="Nomad">Nomad</option>
                    <option value="Oak">Oak</option>
                    <option value="Plasma">Plasma</option>
                    <option value="Thicket">Thicket</option>
                    <option value="Wamble">Wamble</option>
                    <option value="Whiplash" selected="selected">Whiplash</option>
                </optgroup>
            `;

            // Update the inner HTML of the select element with the new options
            selectElement.innerHTML = newHTML;
        }
    }

    // Function to attempt replacement with a delay
    function delayedReplaceSelectOptions() {
        setTimeout(replaceSelectOptions, 3000); // 3 seconds delay
    }

    // Wait for the page to fully load before running the function
    window.addEventListener('load', delayedReplaceSelectOptions);

    // Optionally, observe changes in the DOM if needed
    const observer = new MutationObserver(delayedReplaceSelectOptions);
    observer.observe(document.body, { childList: true, subtree: true });
})();

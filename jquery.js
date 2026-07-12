// Define data lists
const data = {
    output: [
        "You have been bestowed the power of {element} under {sign} and the {auspex} moon."
    ],
    element: [
        "ignis",
        "aqua",
        "terra",
        "ventus",
        "floris"
    ],
    auspex: [
        "full",
        "gibbous",
        "quarter",
        "crescent",
        "new"
    ],
    sign: [
        "(0° - 24°)",
        "(24° - 48°)",
        "(48° - 72°)",
        "(72° - 96°)",
        "(96° - 120°)",
        "(120° - 144°)",
        "(144° - 168°)",
        "(168° - 192°)",
        "(192° - 216°)",
        "(216° - 240°)",
        "(240° - 264°)",
        "(264° - 288°)",
        "(288° - 312°)",
        "(312° - 336°)",
        "(336° - 360°):"
    ]
};

// Helper function to pick a random item from an array
function getRandomItem(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

// Recursive parser to evaluate brackets
function parseTemplate(template) {
    const bracketRegex = /\{([^}]+)\}/g;

    // If there are no more brackets, return the text
    if (!bracketRegex.test(template)) {
        return template;
    }

    // Reset regex index for safety
    bracketRegex.lastIndex = 0;

    // Replace each {listName} with a random item from that list
    return template.replace(bracketRegex, (match, listName) => {
        const list = data[listName.trim()];
        if (list && list.length > 0) {
            const selectedItem = getRandomItem(list);
            // Recursively parse in case the selected item also contains brackets
            return parseTemplate(selectedItem);
        }
        return match; // Return original brackets if list doesn't exist
    });
}

// Main function called by the button
function generate() {
    // Start the generation from the 'output' list template
    const baseTemplate = getRandomItem(data.output);
    const finalResult = parseTemplate(baseTemplate);

    // Display the result on the webpage
    document.getElementById("output").innerText = finalResult;
}
const fs = require('fs');

const inquirer = require('inquirer');

const { createLogo } = require('./lib/shapes.js');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please include 1-3 characters for your logo:',
        validate: function(input) {
            const isValid = input.length >= 1 && input.length <= 3;
            if (isValid) {
                return true;
            }
            return 'Please enter 1-3 characters for your logo.';
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter a color for the text. It can be a color keyword or a Hexidecimal number:',
        validate: validateColor,
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select one of the following shapes:',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter a color for the shape. It can be a color keyword or a Hexidecimal number:',
        validate: validateColor,
    }
]


function validateColor(input) {

    //Got from chatGPT
    const hexColorRegex = /^#([0-9A-Fa-f]{3}){1,2}\b$/;  
    const colorKeywords = [
        'black', 'white', 'red', 'green', 'blue', 'yellow', 'cyan', 'magenta', 'purple', 'orange', 'pink', 'brown', 'gray / grey', 'silver', 'gold', 'aqua', 'indigo', 'violet', 'turquoise', 'teal', 'maroon', 'olive', 'lavender', 'coral', 'peach', 'beige', 'ivory', 'mint', 'khaki', 'plum', 'navy', 'tan', 'fuchsia', 'crimson', 'ruby', 'emerald', 'sapphire', 'amethyst', 'topaz', 'garnet', 'amber', 'onyx', 'opal', 'pearl', 'jade', 'granite', 'charcoal', 'slate', 'brick', 'terracotta', 'azure', 'sepia', 'mauve', 'chartreuse', 'moss', 'lemon', 'tangerine', 'caramel', 'strawberry', 'lilac', 'cobalt', 'periwinkle', 'pewter', 'sand', 'hazel', 'sienna', 'copper', 'mahogany', 'denim', 'biscuit', 'ash', 'chestnut', 'cornflower', 'mustard', 'olive', 'pistachio', 'raspberry', 'strawberry', 'lavender', 'orchid', 'pumpkin', 'sky blue', 'eggplant', 'burgundy', 'taupe', 'vermilion', 'lemonade', 'raspberry', 'snow', 'firebrick', 'timberwolf', 'thistle', 'orchid', 'shamrock', 'raspberry', 'mauve', 'heliotrope', 'palatinate blue', 'cerulean', 'shocking pink', 'saffron', 'razzmatazz', 'tiffany blue', 'harlequin', 'bondi blue', 'electric crimson', 'vivid tangerine', 'rufous', 'fulvous', 'wenge', 'smaragdine', 'han purple', 'mountbatten pink', 'old lavender', 'old mauve', 'old rose', 'old gold', 'old silver'
    ]

    if (colorKeywords.includes(input.toLowerCase()) || hexColorRegex.test(input)) {
        return true;
        //Test to see if the color is accepted and what was accepted
        console.log(answers.textColor);
    }
    
    return 'Please enter a valid color keyword or a valid hex color.';
}


// Function to create the svg file

// UNCOMMENT ONCE YOU FINISH SHAPES.JS
function writeToFile(fileName, data) {
    fs.writeFile(fileName, createLogo(data), (err) => {
        if(err) {
            console.error('Error creating the file:', err);
            return;
        }
        console.log('Generated logo.svg');
    })
};

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        const filename = 'file.svg';
        writeToFile(filename, answers);
    })
}

init();
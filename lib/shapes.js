const createShape = (data) => {

    const shapeColor = data.shapeColor || 'black';
    switch(data.shape.toLowerCase()) {
        case 'circle':
            return `<circle cx="150" cy="130" r="20" fill="${shapeColor}"/>`;
        
        case 'triangle':
            return `<polygon points="50 15, 100 100, 0, 100" fill="${shapeColor}"/>`;
        
        case 'square':
            return `<rect x="125" y="105" width="50" height="50" fill="${shapeColor}"/>`;

        default:
            return '';
    }
};

//In this function, I will call upon the createShape() function to combine the shape, color, and text into one combined logo. This will be a template situation like the generateMarkdown function from Module 9.
//Save the svg file template in a variable and pass through the data through conditional statements based on the iquirer prompt. Then return the variable itself. Then the file will be written in the index.js functions

const createLogo = (data) => {
    //test to check the import/export
    console.log("The import worked! It's calling this function :)")
    console.log('Shapes.js:', data)

    //store what is made in createShape to a variable
    const shapeSvg = createShape(data);

    //test to see if we're getting the right svg code for the shape
    console.log(shapeSvg);

    const combinedSvg = 
    `<svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="300" height="200"> 
    
    ${shapeSvg} 
    <text x="150" y="130" text-anchor="middle" alignment-baseline="middle" font-size="20" 
    fill="${data.textColor}">
    ${data.text}
    </text>
    
    </svg>`

    return combinedSvg;
}

module.exports = { createShape, createLogo};
const { createShape } = require('../lib/shapes.js');

describe("Shape test", () => {
    test("test for circle", () => {
        const testData = { shape: 'circle', shapeColor: 'red' };
        expect(createShape(testData)).toEqual(
            `<circle cx="25" cy="75" r="20" fill="${testData.shapeColor}"/>`
        );
    });
    test("test for triangle", () => {
        const testData = { shape: 'triangle', shapeColor: '#0000FF' };
        expect(createShape(testData)).toEqual(
            `<polygon points="50 15, 100 100, 0, 100" fill="${testData.shapeColor}"/>`
        );
    });
    test("test for square", () => {
        const testData = { shape: 'square', shapeColor: 'yellow' };
        expect(createShape(testData)).toEqual(
            `<rect x="10" y="10" width="30" height="30" fill="${testData.shapeColor}"/>`
        );
    });
});


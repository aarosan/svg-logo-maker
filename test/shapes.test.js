const { createShape } = require('../lib/shapes.js');

describe("Shape test", () => {
    test("test for circle", () => {
        const testData = { shape: 'circle' };
        expect(createShape(testData)).toEqual(
            '<circle cx="25" cy="75" r="20"/>'
        );
    });
});
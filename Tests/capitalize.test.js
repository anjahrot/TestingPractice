import { capitalize } from "../Scripts/capitalize";

describe('Capitalize', () => {
    test('Return first letter of word capitalized', () => {
        expect(capitalize('test')).toMatch('Test');
    });
    test('Return first letter of sentence capitalized', () => {
        expect(capitalize('this boy')).toMatch('This boy');
    });
})


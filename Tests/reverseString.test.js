import { reverse } from "../Scripts/reverseString";

describe('Reverse string', () => {
    test('Reverse word', () => {
        expect(reverse('fitness')).toBe('ssentif');
    });
    test('Reverse sentence', () => {
        expect(reverse('have a great day')).toBe('yad taerg a evah');
    });
})
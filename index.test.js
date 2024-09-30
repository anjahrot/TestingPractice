const capitalize = require('./index.js')

test('capitalize', () => {
    expect(capitalize('test')).toMatch('Test');
})


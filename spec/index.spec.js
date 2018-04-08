const semver = require('semver');
const Mothership = require('../').default;
const Starship = require('typescript-starship-demo').default;
const {any} = jasmine;

describe('Mothership', function () {
    it('is a class/function', function () {
        expect(Mothership).toEqual(any(Function));
    });

    it('returns "Hello world!" when invoked', function () {
        expect(Mothership()).toBe('Hello world!');
    });

    describe('Starship', function () {
        it('is a class/function', function () {
            expect(Starship).toEqual(any(Function));
        });

        it('has a matching semantic version number', function () {
            expect(semver.satisfies(Starship.version, '^0.1.0')).toBe(true);
        });
    })
});

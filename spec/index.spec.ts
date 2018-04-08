import semver from 'semver';
import Starship from 'typescript-starship-demo';

describe('Mothership', function () {
    describe('Starship', function () {
        it('has a matching semantic version number', function () {
            expect(semver.satisfies(Starship.version, '^0.1.0')).toBe(true);
        });
    })
});

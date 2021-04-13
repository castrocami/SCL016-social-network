import { navBar } from '../src/components/nav-bar';

describe('nav-bar', () => {
    it('should render without crashing', () => {
        const navB = navBar();
        expect(navB instanceof HTMLElement).toBe(true);
    });
});
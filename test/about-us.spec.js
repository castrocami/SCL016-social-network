import { aboutUs } from '../src/components/about-us.js';

describe('aboutUs', () => {
  it('should render without crashing', () => {
    const abotUsEl = aboutUs();
    expect(abotUsEl instanceof HTMLElement).toBe(true);
  });
});

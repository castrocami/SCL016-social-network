import { aboutUsContainer } from '../src/views.js/view-about-us.js';

describe('aboutUsContainer', () => {
  it('should render without crashing', () => {
    const aboutUsContainerEl = aboutUsContainer();
    expect(aboutUsContainerEl instanceof HTMLElement).toBe(true);
  });
});

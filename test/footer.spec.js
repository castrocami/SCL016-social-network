import { footer } from '../src/components/footer.js';

describe('footer', () => {
  it('should render without crashing', () => {
    const footerEl = footer();
    expect(footerEl instanceof HTMLElement).toBe(true);
  });
});
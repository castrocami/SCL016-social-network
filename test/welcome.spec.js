import { welcome } from '../components/welcome.js';

describe('Welcome', () => {
  it('should render without crashing', () => {
    const el = welcome();
    expect(el instanceof HTMLElement).toBe(true);
  });
});

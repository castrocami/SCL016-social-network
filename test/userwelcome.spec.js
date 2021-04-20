import { currentUserWelcome } from '../src/components/userwelcome.js';

describe('userwelcome', () => {
  it('should render without crashing', () => {
    const el = currentUserWelcome();
    expect(el instanceof HTMLElement).toBe(true);
  });
});

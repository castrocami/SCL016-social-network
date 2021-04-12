import { userData } from '../src/components/user-data';

describe('User-data', () => {
  it('should render without crashing', () => {
    const el = userData();
    expect(el instanceof HTMLElement).toBe(true);
  });
});

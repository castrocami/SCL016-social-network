import { userData } from '../src/components/user-data';
import { setCurrentUser } from '../src/data/currentUser';

describe('User-data', () => {
  setCurrentUser({ displayName: 'prueba1' });
  it('should render without crashing', () => {
    const el = userData();
    expect(el instanceof HTMLElement).toBe(true);
  });
});

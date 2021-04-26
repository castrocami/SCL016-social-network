import { loginForm } from '../src/views/login';

describe('Login', () => {
  it('should render without crashing', () => {
    const el = loginForm();
    expect(el instanceof HTMLElement).toBe(true);
  });
});

import { loginForm } from '../src/views.js/login';

describe('Login', () => {
  it('should render without crashing', () => {
    const el = loginForm();
    expect(el instanceof HTMLElement).toBe(true);
  });
});

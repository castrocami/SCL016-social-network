import { allPosts } from '../src/components/allPosts.js';

describe('allPosts', () => {
  it('should render without crashing', () => {
    const el = allPosts();
    expect(el instanceof HTMLElement).toBe(true);
  });
});

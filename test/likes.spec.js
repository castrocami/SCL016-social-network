import { isLiked, likesFun } from '../src/components/likes.js';
import { setCurrentUser } from '../src/data/currentUser.js';

describe('Likes ', () => {
  setCurrentUser({ displayName: 'prueba1' });
  const mockedpostToUpdate = { update: () => {} };
  it('should be a function', () => {
    expect(typeof likesFun(mockedpostToUpdate, true)).toBe('function');
  });
  it('should like without fail', () => {
    expect(likesFun(mockedpostToUpdate, true)).not.toThrow(Error);
    expect(likesFun(mockedpostToUpdate, false)).not.toThrow(Error);
  });
});

describe('isLiked', () => {
  const postForm = {
    tittle: 'Hola',
    content: 'Prueba de texto',
    user: 'probando@gmail.com',
    likes: ['probando1@gmail.com', 'probando2@gmail.com'],
  };
  it('should be liked', () => {
    setCurrentUser({ email: 'probando1@gmail.com' });
    expect(isLiked(postForm)).toBe(true);
  });

  it('should be unliked', () => {
    setCurrentUser({ email: 'probando221@gmail.com' });
    expect(isLiked(postForm)).toBe(false);
  });
});

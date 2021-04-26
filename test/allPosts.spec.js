/* import { allPosts } from '../src/components/allPosts.js';
import { setCurrentUser } from '../src/data/currentUser.js';

describe('allPosts', () => {
  setCurrentUser({ displayName: 'prueba1' });
  it('should render without crashing', () => {
    const el = allPosts();
    expect(el instanceof HTMLElement).toBe(true);
  });
});
*/
// Initialize firebase firestore
// const firebase = { firestore: () => {} };
/* const db = firebase.firestore();
jest.mock(db);
test('should fetch users', () => {
  const postForm = {
    tittle: 'Hola',
    content: 'Prueba de texto',
    user: 'probando@gmail.com',
    likes: ['probando1@gmail.com', 'probando2@gmail.com'],
  };
  db.get.mockResolvedValue(postForm);
  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))
  return allPosts.all().then((data) => expect(data).toEqual(postForm));
}); */

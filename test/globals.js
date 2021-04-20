// https://medium.com/@justintulk/how-to-mock-an-external-library-in-jest-140ac7b210c2
global.firebase = {
  firestore: () => ({
    collection: () => ({
      get: () => new Promise((resolve) => {
        resolve(
          [{
            data: () => ({
              tittle: 'Hola',
              content: 'Prueba de texto',
              user: 'probando@gmail.com',
              likes: ['probando1@gmail.com', 'probando2@gmail.com'],
            }),
          },
          {
            data: () => ({
              tittle: 'Hola2',
              content: 'Prueba2 de texto',
              user: 'probando2@gmail.com',
              likes: ['probando2@gmail.com', 'probando5@gmail.com'],
            }),
          },
          ],
        );
      }),
      doc: () => new Promise((resolve) => {
        resolve(
          {
            data: () => ({
              tittle: 'Hola',
              content: 'Prueba de texto',
              user: 'probando@gmail.com',
              likes: ['probando1@gmail.com', 'probando2@gmail.com'],
            }),
          },
        );
      }),

    }),

  }),
};

global.firebase.firestore.FieldValue = {
  arrayUnion: () => {},
  arrayRemove: () => {},
};

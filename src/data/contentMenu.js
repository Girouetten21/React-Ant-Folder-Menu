const contentMenu = [
  {
    id: 0,
    type: 'home', // Tipo de contenido para HOME
    name: 'Página Principal',
  },
  {
    id: 1,
    type: 'folder',
    name: 'Carpeta 1',
    subfolders: [
      {
        id: 11,
        type: 'folder',
        name: 'Subcarpeta 1.1',
        subfolders: [
          {
            id: 111,
            type: 'folder',
            name: 'Subcarpeta 1.1.1',
            subfolders: [
              {
                id: 1111,
                type: 'card',
                name: 'Tarjeta 1.1.1.1',
                content: 'Contenido Tarjeta 1.1.1.1',
                content2: 'Subcontenido de la Tarjeta 1.1.1.1',
                backgroundColor: 'rgba(255, 99, 71, 0.7)',
                click: 'https://example.com/card1', // URL de ejemplo
              },
            ],
          },
          {
            id: 112,
            type: 'card',
            name: 'Tarjeta ',
            content: 'Contenido ',
            content2: 'Subcontenido',
            backgroundColor: 'rgba(60, 179, 113, 0.7)',
            click: 'https://example.com/card2', // URL de ejemplo
          },
        ],
      },
      {
        id: 12,
        type: 'folder',
        name: 'Subcarpeta 1.2',
        subfolders: [
          {
            id: 121,
            type: 'card',
            name: 'Tarjeta 1.2.1',
            content: 'Contenido Tarjeta 1.2.1',
            content2: 'Subcontenido de la Tarjeta 1.2.1',
            backgroundColor: 'rgba(13, 124, 214, 0.7)',
            click: 'https://example.com/card3', // URL de ejemplo
          },
        ],
      },
    ],
  },
  {
    id: 2,
    type: 'folder',
    name: 'Carpeta 2',
    subfolders: [
      {
        id: 21,
        type: 'folder',
        name: 'Subcarpeta 2.1',
        subfolders: [
          {
            id: 211,
            type: 'folder',
            name: 'Subcarpeta 2.1.1',
            subfolders: [
              {
                id: 2111,
                type: 'card',
                name: 'Tarjeta 2.1.1.1',
                content: 'Contenido Tarjeta 2.1.1.1',
                content2: 'Subcontenido de la Tarjeta 2.1.1.1',
                backgroundColor: 'rgba(255, 215, 0, 0.7)',
                click: 'https://example.com/card4', // URL de ejemplo
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    type: 'folder',
    name: 'Carpeta 3',
    subfolders: [
      {
        id: 31,
        type: 'card',
        name: 'Tarjeta 3.1',
        content: 'Contenido Tarjeta 3.1',
        content2: 'Subcontenido de la Tarjeta 3.1',
        backgroundColor: 'rgba(75, 0, 130, 0.7)',
        click: 'https://example.com/card5', // URL de ejemplo
      },
      {
        id: 32,
        type: 'folder',
        name: 'Subcarpeta 3.1',
        subfolders: [
          {
            id: 321,
            type: 'card',
            name: 'Tarjeta 3.1.1',
            content: 'Contenido Tarjeta 3.1.1',
            content2: 'Subcontenido de la Tarjeta 3.1.1',
            backgroundColor: 'rgba(13, 124, 214, 0.7)',
            click: 'https://example.com/card6', // URL de ejemplo
          },
        ],
      },
    ],
  },
  {
    id: 4,
    type: 'card',
    name: 'Tarjeta 4',
    content: 'Contenido Tarjeta 4',
    content2: 'Subcontenido de la Tarjeta 4',
    backgroundColor: 'rgba(255, 99, 71, 0.7)',
    click: 'https://angular.io/', // URL de Angular
  },
  {
    id: 5,
    type: 'card',
    name: 'Tarjeta 5',
    content: 'Contenido Tarjeta 5',
    content2: 'Subcontenido de la Tarjeta 5',
    backgroundColor: 'rgba(255, 215, 0, 0.7)',
    click: 'https://vuejs.org/', // URL de Vue.js
  },
  {
    id: 6,
    type: 'card',
    name: 'Tarjeta 6',
    content: 'Contenido Tarjeta 6',
    content2: 'Subcontenido de la Tarjeta 6',
    backgroundColor: 'rgba(60, 179, 113, 0.7)',
    click: 'https://svelte.dev/', // URL de Svelte
  },
  {
    id: 7,
    type: 'card',
    name: 'Tarjeta 7',
    content: 'Contenido Tarjeta 7',
    content2: 'Subcontenido de la Tarjeta 7',
    backgroundColor: 'rgba(255, 215, 0, 0.7)',
    click: 'https://www.djangoproject.com/', // URL de Django
  },
  {
    id: 8,
    type: 'card',
    name: 'Tarjeta 8',
    content: 'Contenido Tarjeta 8',
    content2: 'Subcontenido de la Tarjeta 8',
    backgroundColor: 'rgba(75, 0, 130, 0.7)',
    click: 'https://flask.palletsprojects.com/', // URL de Flask
  },
];

export default contentMenu;
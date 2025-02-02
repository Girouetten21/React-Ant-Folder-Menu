import { FolderOutlined, FolderOpenOutlined, VideoCameraOutlined, DatabaseOutlined, ApiOutlined, ToolOutlined, CloudUploadOutlined } from '@ant-design/icons';

export const categories = [
  { id: 0, name: '#Framework', icon: <FolderOpenOutlined /> },
  { id: 1, name: '#Backend', icon: <FolderOutlined /> },
  { id: 2, name: '#Frontend', icon: <FolderOutlined /> },
  { id: 3, name: '#DevOps', icon: <ToolOutlined /> },
  { id: 4, name: '#Database', icon: <DatabaseOutlined /> },
  { id: 5, name: '#UI Framework', icon: <FolderOpenOutlined /> },
  { id: 6, name: '#API Testing', icon: <ApiOutlined /> },
  { id: 7, name: '#Hosting', icon: <CloudUploadOutlined /> },
  { id: 8, name: '#Development', icon: <ToolOutlined /> },
  { id: 9, name: '#Search Engine', icon: <FolderOutlined /> },
  { id: 10, name: '#Video', icon: <VideoCameraOutlined /> },
];

const DataMenu = [
  {
    id: 0,
    type: 'home', // Tipo de contenido para HOME
    name: 'Página Principal',
  },
  {
    id: 1,
    type: 'folder',
    name: 'Desarrollo',
    subfolders: [
      {
        id: 11,
        type: 'folder',
        name: 'Frontend',
        subfolders: [
          {
            id: 111,
            type: 'folder',
            name: 'Frameworks',
            subfolders: [
              {
                id: 1111,
                type: 'card',
                name: 'React',
                content: 'Biblioteca para construir interfaces de usuario.',
                category: categories[0].name, // #Framework
                backgroundColor: 'rgba(97, 218, 251, 0.7)',
                click: 'https://reactjs.org/',
              },
              {
                id: 1112,
                type: 'card',
                name: 'Vue',
                content: 'Framework progresivo para construir interfaces.',
                category: categories[0].name, // #Framework
                backgroundColor: 'rgba(65, 184, 131, 0.7)',
                click: 'https://vuejs.org/',
              },
            ],
          },
          {
            id: 112,
            type: 'card',
            name: 'Ant Design',
            content: 'Framework de diseño para React.',
            category: categories[6].name, // #UI Framework
            backgroundColor: 'rgba(24, 144, 255, 0.7)',
            click: 'https://ant.design/',
          },
        ],
      },
      {
        id: 12,
        type: 'folder',
        name: 'Backend',
        subfolders: [
          {
            id: 121,
            type: 'card',
            name: 'Node.js',
            content: 'JavaScript runtime para construir aplicaciones.',
            category: categories[1].name, // #Backend
            backgroundColor: 'rgba(0, 255, 0, 0.7)',
            click: 'https://nodejs.org/',
          },
          {
            id: 122,
            type: 'card',
            name: 'Laravel',
            content: 'Framework PHP para aplicaciones web.',
            category: categories[1].name, // #Backend
            backgroundColor: 'rgba(255, 0, 0, 0.7)',
            click: 'https://laravel.com/',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    type: 'folder',
    name: 'DevOps',
    subfolders: [
      {
        id: 21,
        type: 'folder',
        name: 'Contenedores',
        subfolders: [
          {
            id: 211,
            type: 'card',
            name: 'Docker',
            content: 'Plataforma para desarrollar, enviar y ejecutar aplicaciones.',
            category: categories[3].name, // #DevOps
            backgroundColor: 'rgba(0, 123, 255, 0.7)',
            click: 'https://www.docker.com/',
          },
        ],
      },
      {
        id: 22,
        type: 'folder',
        name: 'Despliegue',
        subfolders: [
          {
            id: 221,
            type: 'card',
            name: 'Vercel',
            content: 'Plataforma para desplegar aplicaciones frontend.',
            category: categories[8].name, // #Hosting
            backgroundColor: 'rgba(255, 0, 255, 0.7)',
            click: 'https://vercel.com/',
          },
          {
            id: 222,
            type: 'card',
            name: 'Netlify',
            content: 'Plataforma para desplegar sitios estáticos.',
            category: categories[8].name, // #Hosting
            backgroundColor: 'rgba(0, 255, 255, 0.7)',
            click: 'https://www.netlify.com/',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    type: 'folder',
    name: 'Bases de Datos',
    subfolders: [
      {
        id: 31,
        type: 'card',
        name: 'PostgreSQL',
        content: 'Sistema de gestión de bases de datos relacional.',
        category: categories[5].name, // #Database
        backgroundColor: 'rgba(255, 215, 0, 0.7)',
        click: 'https://www.postgresql.org/',
      },
      {
        id: 32,
        type: 'card',
        name: 'MongoDB',
        content: 'Base de datos NoSQL orientada a documentos.',
        category: categories[5].name, // #Database
        backgroundColor: 'rgba(0, 255, 0, 0.7)',
        click: 'https://www.mongodb.com/',
      },
    ],
  },
  {
    id: 4,
    type: 'folder',
    name: 'Herramientas',
    subfolders: [
      {
        id: 41,
        type: 'card',
        name: 'Vite',
        content: 'Herramienta de construcción para proyectos web.',
        category: categories[9].name, // #Build Tool
        backgroundColor: 'rgba(255, 0, 0, 0.7)',
        click: 'https://vitejs.dev/',
      },
      {
        id: 42,
        type: 'card',
        name: 'CodePen',
        content: 'Entorno de desarrollo social para front-end.',
        category: categories[9].name, // #Development
        backgroundColor: 'rgba(0, 0, 255, 0.7)',
        click: 'https://codepen.io/',
      },
    ],
  },
  {
    id: 5,
    type: 'folder',
    name: 'Recursos',
    subfolders: [
      {
        id: 51,
        type: 'card',
        name: 'GitHub',
        content: 'Plataforma de desarrollo colaborativo.',
        category: categories[7].name, // #Version Control
        backgroundColor: 'rgba(255, 215, 0, 0.7)',
        click: 'https://github.com/',
      },
      {
        id: 52,
        type: 'card',
        name: 'YouTube',
        content: 'Plataforma de videos educativos y tutoriales.',
        category: categories[10].name, // #Video
        backgroundColor: 'rgba(255, 0, 0, 0.7)',
        click: 'https://www.youtube.com/',
      },
      {
        id: 53,
        type: 'card',
        name: 'Google',
        content: 'Motor de búsqueda más utilizado.',
        category: categories[10].name, // #Search Engine
        backgroundColor: 'rgba(255, 215, 0, 0.7)',
        click: 'https://www.google.com/',
      },
      {
        id: 54,
        type: 'card',
        name: 'Next.js',
        content: 'Framework para aplicaciones React.',
        category: categories[0].name, // #Framework
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        click: 'https://nextjs.org/',
      },
      {
        id: 55,
        type: 'card',
        name: 'Docker',
        content: 'Plataforma para desarrollar, enviar y ejecutar aplicaciones.',
        category: categories[4].name, // #DevOps
        backgroundColor: 'rgba(0, 123, 255, 0.7)',
        click: 'https://www.docker.com/',
      },
      {
        id: 56,
        type: 'card',
        name: 'Flask',
        content: 'Microframework para Python.',
        category: categories[0].name, // #Framework
        backgroundColor: 'rgba(255, 215, 0, 0.7)',
        click: 'https://flask.palletsprojects.com/',
      },
      {
        id: 57,
        type: 'card',
        name: 'Django',
        content: 'Framework web para Python.',
        category: categories[0].name, // #Framework
        backgroundColor: 'rgba(0, 0, 255, 0.7)',
        click: 'https://www.djangoproject.com/',
      },
      {
        id: 58,
        type: 'card',
        name: 'Svelte',
        content: 'Framework para construir interfaces de usuario.',
        category: categories[0].name, // #Framework
        backgroundColor: 'rgba(255, 0, 255, 0.7)',
        click: 'https://svelte.dev/',
      },
      {
        id: 59,
        type: 'card',
        name: 'Postman',
        content: 'Herramienta para probar APIs.',
        category: categories[7].name, // #API Testing
        backgroundColor: 'rgba(0, 255, 0, 0.7)',
        click: 'https://www.postman.com/',
      },
    ],
  },
  {
    id: 1416,
        type: 'card',
        name: 'Marcos-PC',
        content: 'Frontend - UI',
        category: categories[5].name,
        backgroundColor: 'rgba(40, 224, 224, 0.63)',
        click: 'https://github.com/Girouetten21',
  }
];

export default DataMenu;
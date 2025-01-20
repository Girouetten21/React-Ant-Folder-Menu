// App.jsx
import React, { useState, useEffect } from 'react';
import Menu from './components/Menu';
import CustomCard from './components/Card';
import CardFolder from './components/CardFolder';
import './css/App.css';
import './css/custom.css';

const contentList = [
  {
    id: 0,
    type: 'home', // Tipo de contenido para HOME
    name: 'HOME',
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
      },
      {
        id: 12,
        type: 'folder',
        name: 'Subcarpeta 1.2',
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
        type: 'folder',
        name: 'Subcarpeta 3.1',
      },
      {
        id: 32,
        type: 'folder',
        name: 'Subcarpeta 3.2',
      },
    ],
  },
  {
    id: 4,
    type: 'card',
    name: 'Tarjeta 1',
    content: 'Contenido Tarjeta 1',
    content2: 'Subcontenido de la Tarjeta 1',
    backgroundColor: 'rgba(13, 124, 214, 0.7)',
  },
  {
    id: 5,
    type: 'card',
    name: 'Tarjeta 2',
    content: 'Contenido Tarjeta 2',
    content2: 'Subcontenido de la Tarjeta 2',
    backgroundColor: 'rgba(255, 99, 71, 0.7)',
  },
  {
    id: 6,
    type: 'card',
    name: 'Tarjeta 3',
    content: 'Contenido Tarjeta 3',
    content2: 'Subcontenido de la Tarjeta 3',
    backgroundColor: 'rgba(60, 179, 113, 0.7)',
  },
  {
    id: 7,
    type: 'card',
    name: 'Tarjeta 4',
    content: 'Contenido Tarjeta 4',
    content2: 'Subcontenido de la Tarjeta 4',
    backgroundColor: 'rgba(255, 215, 0, 0.7)',
  },
  {
    id: 8,
    type: 'card',
    name: 'Tarjeta 5',
    content: 'Contenido Tarjeta 5',
    content2: 'Subcontenido de la Tarjeta 5',
    backgroundColor: 'rgba(75, 0, 130, 0.7)',
  },
];

const App = () => {
  const [selectedContent, setSelectedContent] = useState('Bienvenido a la página principal.'); // Mensaje por defecto para HOME
  const [currentFolder, setCurrentFolder] = useState(contentList[0]); // Establecer HOME como el contenido seleccionado por defecto
  const [displayedItems, setDisplayedItems] = useState([]); // Para almacenar los elementos a mostrar en content-container

  useEffect(() => {
    if (currentFolder) {
      if (currentFolder.type === 'home') {
        setSelectedContent('Bienvenido a la página principal.');
        setDisplayedItems(contentList.filter(item => item.type === 'card')); // Mostrar todas las tarjetas
      } else if (currentFolder.type === 'folder') {
        if (currentFolder.subfolders && currentFolder.subfolders.length > 0) {
          setDisplayedItems(currentFolder.subfolders); // Mostrar subcarpetas
          setSelectedContent(''); // Limpiar el mensaje de contenido
        } else {
          setSelectedContent('Carpeta vacía');
          setDisplayedItems([]); // No hay elementos para mostrar
        }
      } else if (currentFolder.type === 'card') {
        setDisplayedItems([currentFolder]); // Mostrar solo la tarjeta seleccionada
        setSelectedContent(currentFolder.content || currentFolder.content2 || ''); // Mostrar contenido de la tarjeta
      }
    }
  }, [currentFolder]);

  const handleFolderSelect = (folder) => {
    setCurrentFolder(folder); // Establece la carpeta actual
  };

  const handleSubfolderSelect = (subfolder) => {
    setCurrentFolder(subfolder); // Establece la subcarpeta actual
  };

  return (
    <div className="app-container">
      <div className="menu-container">
        <Menu 
          folders={contentList} // Reemplazar folders con contentList
          onFolderSelect={handleFolderSelect} 
          onSubfolderSelect={handleSubfolderSelect} 
        />
      </div>
      <div className="content-container">
        <h1>Contenido</h1>
        <p>{selectedContent}</p>
        <div className="card-container">
          {displayedItems.map(item => {
            if (item.type === 'folder') {
              return (
                <CardFolder 
                  key={item.id} 
                  title={item.name} 
                  onClick={() => handleFolderSelect(item)} // Agregar el manejador de clics
                />
              );
            } else if (item.type === 'card') {
              return (
                <CustomCard
                  key={item.id}
                  title={item.name}
                  content={item.content}
                  content2={item.content2}
                  backgroundColor={item.backgroundColor}
                />
              );
            }
            return null; // En caso de que no sea ni folder ni card
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
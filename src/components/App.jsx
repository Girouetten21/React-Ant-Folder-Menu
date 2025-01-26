import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Card from './Card';
import FolderCard from './FolderCard';
import DataMenu from '../data/DataMenu';
import '../css/App.css';
import '../css/customAntd.css';

const App = () => {
  const [selectedContent, setSelectedContent] = useState('Bienvenido a la página principal.');
  const [displayedItems, setDisplayedItems] = useState([]);
  const [currentFolder, setCurrentFolder] = useState(DataMenu[0]); // Estado para la carpeta seleccionada

  useEffect(() => {
    if (currentFolder) {
      if (currentFolder.type === 'home') {
        setSelectedContent('Bienvenido a la página principal');
        setDisplayedItems(DataMenu.filter(item => item.type === 'folder' || item.type === 'card'));
      } else if (currentFolder.type === 'folder') {
        if (currentFolder.subfolders && currentFolder.subfolders.length > 0) {
          setDisplayedItems(currentFolder.subfolders);
          setSelectedContent(currentFolder.name);
        } else {
          setSelectedContent(currentFolder.name + ' se encuentra vacía');
          setDisplayedItems([]);
        }
      } else if (currentFolder.type === 'card') {
        setDisplayedItems([currentFolder]);
        setSelectedContent(currentFolder.content || currentFolder.content2 || '');
      }
    }
  }, [currentFolder]);

  const handleSelect = (item) => {
    // Aplicar el nuevo elemento seleccionado
    setCurrentFolder(item);
  };

  // Función recursiva para calcular el nivel de anidación
  const getNestedLevel = (folder) => {
    let level = 0;
    let current = folder;
    while (current && current.parent) {
      level++;
      current = current.parent;
    }
    return level;
  };

  return (
    <div className="app-container">
      <div className="menu-container">
        <Menu 
          folders={DataMenu} // Usar el contenido importado
          onFolderSelect={handleSelect} // Usar el manejador unificado
          currentFolder={currentFolder} // Pasar el objeto de la carpeta actual
        />
      </div>
      <div className="content-container">
        <h1>Contenido</h1>
        <p>{selectedContent}</p>
        <div className="card-container">
          {displayedItems.map(item => {
            const level = getNestedLevel(item); // Obtener el nivel de anidación
            const paddingLeft = `${(level + 1) * 16}px`; // Calcular el padding

            if (item.type === 'folder') {
              return (
                <FolderCard 
                  key={item.id} 
                  title={item.name} 
                  onClick={() => handleSelect(item)} // Usar el manejador unificado
                  style={{ paddingLeft }} // Aplicar padding
                />
              );
            } else if (item.type === 'card') {
              return (
                <Card
                  key={item.id}
                  title={item.name}
                  content={item.content}
                  content2={item.content2}
                  backgroundColor={item.backgroundColor}
                  click={item.click}
                  style={{ paddingLeft }} // Aplicar padding
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
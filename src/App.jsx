// App.jsx
import React, { useState, useEffect } from 'react';
import Menu from './components/Menu';
import CustomCard from './components/Card';
import CardFolder from './components/CardFolder';
import './css/App.css';
import './css/custom.css';

const folders = [
  {
    id: 1,
    name: 'Carpeta 1',
    content: 'Contenido de la Carpeta 1',
    subfolders: [
      {
        id: 11,
        name: 'Subcarpeta 1.1',
        content: 'Contenido de la Subcarpeta 1.1',
      },
      {
        id: 12,
        name: 'Subcarpeta 1.2',
        content: 'Contenido de la Subcarpeta 1.2',
      },
    ],
  },
  {
    id: 2,
    name: 'Carpeta 2',
    content: 'Contenido de la Carpeta 2',
    subfolders: [
      {
        id: 21,
        name: 'Subcarpeta 2.1',
        content: 'Contenido de la Subcarpeta 2.1',
      },
      {
        id: 22,
        name: 'Subcarpeta 2.2',
        content: 'Contenido de la Subcarpeta 2.2',
      },
    ],
  },
  {
    id: 3,
    name: 'Carpeta 3',
    content: 'Contenido de la Carpeta 3',
    subfolders: [
      {
        id: 31,
        name: 'Subcarpeta 3.1',
        content: 'Contenido de la Subcarpeta 3.1',
      },
      {
        id: 32,
        name: 'Subcarpeta 3.2',
        content: 'Contenido de la Subcarpeta 3.2',
      },
    ],
  },
];

const App = () => {
  const [selectedContent, setSelectedContent] = useState('Selecciona una carpeta o subcarpeta para ver el contenido.');
  const [currentFolder, setCurrentFolder] = useState(null);

  useEffect(() => {
    if (currentFolder) {
      // Simulamos un efecto de limpieza
      setSelectedContent('Cargando...');
      const timer = setTimeout(() => {
        setSelectedContent(currentFolder.content);
      }, 500); // Tiempo de espera para simular el efecto

      return () => clearTimeout(timer); // Limpiar el timeout si el componente se desmonta
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
                folders={folders} 
                onFolderSelect={handleFolderSelect} 
                onSubfolderSelect={handleSubfolderSelect} 
            />
        </div>
        <div className="content-container">
            <h1>Contenido</h1>
            <p>{selectedContent}</p>
            <div className="card-container">
                {/* Aquí puedes agregar hasta 10 tarjetas como ejemplo */}
                <CustomCard
                    title="Título de la Tarjeta 1"
                    backgroundImage="https://via.placeholder.com/600x200"
                />
                <CardFolder title="Mi Carpeta 1" />
                <CardFolder title="Mi Carpeta 1" />
                <CardFolder title="Mi Carpeta 1" />
                <CardFolder title="Mi Carpeta 1" />
                <CardFolder title="Mi Carpeta 1" />
                <CardFolder title="Mi Carpeta 1" />
                <CardFolder title="Mi Carpeta 1" />
                <CardFolder title="Mi Carpeta 1" />
                <CardFolder title="Mi Carpeta 1" />
                <CardFolder title="Mi Carpeta 1" />
                <CardFolder title="Mi Carpeta 1" />
                <CardFolder title="Mi Carpeta 1" />
                <CardFolder title="Mi Carpeta 1" />
                <CardFolder title="Mi Carpeta 1" />
                {/* Agrega más tarjetas según sea necesario */}
            </div>
        </div>
    </div>
  );
};

export default App;
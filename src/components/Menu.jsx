import React, { useState } from 'react';
import { Menu as AntMenu } from 'antd';
import '../css/App.css'; // Asegúrate de que la ruta sea correcta
import '../css/custom.css'; // Asegúrate de que la ruta sea correcta

const Menu = ({ folders, onFolderSelect, currentFolder }) => {
  // Crear un array de keys seleccionados
  const selectedKeys = [currentFolder.id];
  
  // Estado para controlar qué submenú está expandido
  const [openKeys, setOpenKeys] = useState([]);

  // Manejar la apertura y cierre de submenús
  const onOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  // Función recursiva para renderizar carpetas y subcarpetas
  const renderFolders = (folderList, level = 0) => {
    return folderList.map(folder => {
      if (folder.type === 'folder') {
        const hasSubfolders = folder.subfolders && folder.subfolders.some(sub => sub.type === 'folder');
  
        if (hasSubfolders) {
          return (
            <AntMenu.SubMenu 
              key={folder.id} 
              className={currentFolder.id === folder.id ? 'selected-folder' : ''} 
              title={
                <span onClick={(e) => { e.stopPropagation(); onFolderSelect(folder); }}>
                  {folder.name}
                </span>
              }
            >
              {renderFolders(folder.subfolders, level + 1)} 
            </AntMenu.SubMenu>
          );
        } else {
          // Renderizar como un item normal pero con la clase de nivel
          return (
            <AntMenu.Item 
              key={folder.id} 
              onClick={() => onFolderSelect(folder)} 
              className={`${currentFolder.id === folder.id ? 'selected-folder' : ''} level-${level}`} // Aplicar clase de nivel
              style={{ paddingLeft: `${(level + 1) * 16}px` }} // Aplicar padding en función del nivel
            >
              {folder.name}
            </AntMenu.Item>
          );
        }
      }
      return null; 
    });
  };

  return (
    <div className='menu-container'>
      <h2 className="menu-title">MENU</h2>
      <AntMenu
        mode="inline"
        style={{ width: 256 }}
        selectedKeys={selectedKeys} // Usar selectedKeys para controlar la selección
        openKeys={openKeys} // Controlar qué submenús están abiertos
        onOpenChange={onOpenChange} // Manejar el cambio de apertura
      >
        <AntMenu.Item 
          key={0} 
          onClick={() => onFolderSelect(folders[0])}
          className={currentFolder.id === 0 ? 'selected-folder' : ''} // Aplicar clase si es HOME
        >
          <span>Página Principal</span>
        </AntMenu.Item>
        {renderFolders(folders)} {/* Llamada a la función recursiva */}
      </AntMenu>
    </div>
  );
};

export default Menu;
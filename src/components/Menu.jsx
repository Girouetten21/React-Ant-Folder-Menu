import React from 'react';
import { Menu as AntMenu } from 'antd';
import '../css/App.css'; // Asegúrate de que la ruta sea correcta
import '../css/custom.css'; // Asegúrate de que la ruta sea correcta

const Menu = ({ folders, onFolderSelect, currentFolder }) => {
  // Crear un array de keys seleccionados
  const selectedKeys = [currentFolder.id];

  return (
    <div className='menu-container'>
      <h2 className="menu-title">MENU</h2>
      <AntMenu
        mode="inline"
        style={{ width: 256 }}
        selectedKeys={selectedKeys} // Usar selectedKeys para controlar la selección
      >
        <AntMenu.Item 
          key={0} 
          onClick={() => onFolderSelect(folders[0])}
          className={currentFolder.id === 0 ? 'selected-folder' : ''} // Aplicar clase si es HOME
        >
          <span>Página Principal</span>
        </AntMenu.Item>
        {folders.map(folder => {
          if (folder.type === 'folder') {
            return (
              <AntMenu.SubMenu 
                key={folder.id} 
                className={currentFolder.id === folder.id ? 'selected-folder' : ''} // Aplicar clase si es la carpeta principal seleccionada
                title={
                  <span onClick={(e) => { e.stopPropagation(); onFolderSelect(folder); }}>
                    {folder.name}
                  </span>
                }
              >
                {folder.subfolders && folder.subfolders.map(subfolder => (
                  <AntMenu.Item 
                    key={subfolder.id} 
                    onClick={() => onFolderSelect(subfolder)} // Usar el manejador unificado
                    className={currentFolder.id === subfolder.id ? 'selected-folder' : ''} // Aplicar clase si es la subcarpeta seleccionada
                  >
                    {subfolder.name}
                  </AntMenu.Item>
                ))}
              </AntMenu.SubMenu>
            );
          }
          return null; // En caso de que no sea un folder
        })}
      </AntMenu>
    </div>
  );
};

export default Menu;
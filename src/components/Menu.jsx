import React, { useState } from 'react';
import { Menu as AntMenu } from 'antd';
import '../css/App.css'; // Asegúrate de que la ruta sea correcta
import '../css/customAntd.css'; // Asegúrate de que la ruta sea correcta

const Menu = ({ folders, onFolderSelect, currentFolder }) => {
  const selectedKeys = [currentFolder.id];
  const [openKeys, setOpenKeys] = useState([]);

  const onOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  const renderFolders = (folderList, level = 1) => {
    return folderList.map(folder => {
      if (folder.type === 'folder') {
        const subfolders = folder.subfolders || [];
        const hasSubfolders = subfolders.some(sub => sub.type === 'folder');

        if (hasSubfolders) {
          // Renderizar como un SubMenu si tiene subcarpetas
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
              {renderFolders(subfolders, level + 1)} 
            </AntMenu.SubMenu>
          );
        } else {
          // Renderizar como un item normal si no tiene subcarpetas
          return (
            <AntMenu.Item 
              key={folder.id} 
              onClick={() => onFolderSelect(folder)} 
              className={`${currentFolder.id === folder.id ? 'selected-folder' : ''} level-${level}`} 
              style={{ paddingLeft: `${level * 16}px` }} // Ajustar el padding para el nivel
            >
              {folder.name}
            </AntMenu.Item>
          );
        }
      }
      // Ignorar elementos de tipo 'card'
      return null; 
    });
  };

  return (
    <div className='menu-container'>
      <h2 className="menu-title">MENU</h2>
      <AntMenu
        mode="inline"
        style={{ width: 256 }}
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      >
        <AntMenu.Item 
          key={0} 
          onClick={() => onFolderSelect(folders[0])}
          className={currentFolder.id === 0 ? 'selected-folder' : ''}
        >
          <span>Página Principal</span>
        </AntMenu.Item>
        {renderFolders(folders)}
      </AntMenu>
    </div>
  );
};

export default Menu;
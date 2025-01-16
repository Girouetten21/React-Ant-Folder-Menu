// Menu.jsx
import React from 'react';
import { Menu as AntMenu } from 'antd';
import '../css/App.css'; // Asegúrate de que la ruta sea correcta
import '../css/custom.css'; // Asegúrate de que la ruta sea correcta

const Menu = ({ folders, onFolderSelect, onSubfolderSelect }) => {
  return (
    <div className='menu-container'>
      <h2 className="menu-title">MENU</h2>
      <AntMenu
        mode="inline"
        style={{ width: 256 }}
      >
        {folders.map(folder => (
          <AntMenu.SubMenu 
            key={folder.id} 
            title={
              <span onClick={(e) => { e.stopPropagation(); onFolderSelect(folder); }}>
                {folder.name}
              </span>
            }
          >
            {folder.subfolders.map(subfolder => (
              <AntMenu.Item key={subfolder.id} onClick={() => onSubfolderSelect(subfolder)}>
                {subfolder.name}
              </AntMenu.Item>
            ))}
          </AntMenu.SubMenu>
        ))}
      </AntMenu>
    </div>
  );
};

export default Menu;
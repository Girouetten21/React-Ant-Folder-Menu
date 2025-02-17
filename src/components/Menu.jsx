import React, { useState } from 'react';
import { Menu as AntMenu } from 'antd'; // Eliminar Skeleton de Ant Design
import DataMenu, { categories } from '../data/DataMenu.jsx'; // Importar DataMenu y categories
import { FolderOutlined, FolderOpenOutlined } from '@ant-design/icons'; // Importar íconos necesarios
import '../css/Menu.css'; // Asegúrate de que la ruta sea correcta
import '../css/customAntd.css'; // Asegúrate de que la ruta sea correcta

const Menu = ({ folders, onFolderSelect, currentFolder, onCategorySelect }) => {
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

        const isSelected = currentFolder.id === folder.id; // Verificar si la carpeta está seleccionada

        if (hasSubfolders) {
          // Renderizar como un SubMenu si tiene subcarpetas
          return (
            <AntMenu.SubMenu 
              key={folder.id} 
              className={isSelected ? 'selected-folder' : ''} 
              title={
                <span onClick={(e) => { e.stopPropagation(); onFolderSelect(folder); }}>
                  {isSelected ? <FolderOpenOutlined style={{ marginRight: '8px' }} /> : <FolderOutlined style={{ marginRight: '8px' }} />}
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
              className={`${isSelected ? 'selected-folder' : ''} level-${level}`} 
              style={{ paddingLeft: `${level * 16}px` }} // Ajustar el padding para el nivel
            >
              {isSelected ? <FolderOpenOutlined style={{ marginRight: '8px' }} /> : <FolderOutlined style={{ marginRight: '8px' }} />}
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
    <div>
      <h3 className="menu-title">Menu</h3>
      <AntMenu
        mode="inline"
        style={{ width: 256 }}
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      >
        <>
          <AntMenu.Item 
            key={0} 
            onClick={() => onFolderSelect(folders[0])}
            className={currentFolder.id === 0 ? 'selected-folder' : ''}
          >
            <span>Página Principal</span>
          </AntMenu.Item>
          {renderFolders(folders)}
        </>
      </AntMenu>
      <div className="categories-container">
        <h3 className="categorie-title">Categorías</h3>
        <div>
          {categories.map(category => (
            <div 
              key={category.id} 
              className="category-item" 
              onClick={() => onCategorySelect(category)} // Llamar al manejador al hacer clic
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-text">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
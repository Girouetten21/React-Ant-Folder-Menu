import React, { useState, useEffect } from 'react';
import { Menu as AntMenu, Skeleton } from 'antd'; // Importar Skeleton de Ant Design
import DataMenu, { categories } from '../data/DataMenu.jsx'; // Importar DataMenu y categories
import UserProfile from './UserProfile.jsx';
import { FolderOutlined, FolderOpenOutlined } from '@ant-design/icons'; // Importar íconos necesarios
import '../css/Menu.css'; // Asegúrate de que la ruta sea correcta
import '../css/customAntd.css'; // Asegúrate de que la ruta sea correcta

const Menu = ({ folders, onFolderSelect, currentFolder, onCategorySelect }) => {
  const selectedKeys = [currentFolder.id];
  const [openKeys, setOpenKeys] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para controlar la carga

  useEffect(() => {
    // Simular carga de datos
    const timer = setTimeout(() => {
      setLoading(false); // Cambiar a no cargando después de 5 segundos
    }, 1000);

    return () => clearTimeout(timer); // Limpiar el timer al desmontar
  }, []);

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
    <div className='menu-container'>
        <UserProfile name="John Doe" username="johndoe" imageUrl="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3w2MTg1MTN8MHwxfHNlYXJjaHwxfHx1c2VyLWF2YXRhcnxlbnwwfDJ8fHwxNzM4MDI5OTk5fDA&ixlib=rb-4.0.3&q=80&w=150&h=150"/>
      <AntMenu
        mode="inline"
        style={{ width: 256 }}
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      >
        {loading ? (
          // Mostrar Skeleton mientras se carga
          <>
            <Skeleton active paragraph={{ rows: 5 }} style={{ margin: '0 16px', width: '200px' }} />
            <Skeleton active paragraph={{ rows: 5 }} style={{ margin: '0 16px', width: '200px' }} />
            <Skeleton active paragraph={{ rows: 5 }} style={{ margin: '0 16px', width: '200px' }} />
          </>
        ) : (
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
        )}
      </AntMenu>
      <div className="categories-container">
        <h3 className="categories-title">Categorías</h3>
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
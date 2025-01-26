// CardFolder.jsx
import React from 'react';
import { Card } from 'antd';
import { FolderOutlined } from '@ant-design/icons'; // Importar el ícono de carpeta
import '../css/CardFolder.css';

const CardFolder = ({ title, onClick }) => {
    return (
        <Card className="card-folder" onClick={onClick}> {/* Agregar el manejador de clics aquí */}
            <div className="card-folder-background">
                <FolderOutlined className="folder-icon" />
                <h2 className="card-folder-title">{title}</h2>
            </div>
        </Card>
    );
};

export default CardFolder;
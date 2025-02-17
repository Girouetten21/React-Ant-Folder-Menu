import React from 'react';
import { Card } from 'antd';
import { FolderOutlined } from '@ant-design/icons'; // Importar el ícono de carpeta
import '../css/Card.css';

const FolderCard = ({ title, onClick }) => {
    
    return (
        <Card className="card-folder" onClick={onClick}>
            <div className="card-folder-background">
                <FolderOutlined className="folder-icon" />
                <h2 className="card-folder-title">{title}</h2>
            </div>
        </Card>
    );
};

export default FolderCard;
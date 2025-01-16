// Card.jsx
import React from 'react';
import { Card } from 'antd';
import '../css/Card.css';

const CustomCard = ({ title, backgroundImage }) => {
    return (
        <Card className="card" bodyStyle={{ padding: 0 }}>
            <div className="card-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <h2 className="card-title">{title}</h2>
                <p className="content-card">Contenido</p> {/* Primer texto */}
                <p className="content-card-2">Contenido adicional</p> {/* Segundo texto */}
            </div>
        </Card>
    );
};

export default CustomCard;
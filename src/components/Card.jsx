// Card.jsx
import React from 'react';
import { Card } from 'antd';
import '../css/Card.css';

const CustomCard = ({ backgroundColor, title, content, content2, click, style }) => {
   
    // Función para manejar el clic en la tarjeta
    const handleCardClick = () => {
        window.open(click, '_blank');
    };

    return (
        <Card className="card" bodyStyle={{ padding: 0 }} onClick={handleCardClick} >
            <div className="card-background" style={{ backgroundColor: backgroundColor }}>
                <h2 className="card-title">{title}</h2>
                <p className="content-card">{content}</p> {/* Primer texto */}
                <p className="content-card-2">{content2}</p> {/* Segundo texto */}
            </div>
        </Card>
    );
};

export default CustomCard;
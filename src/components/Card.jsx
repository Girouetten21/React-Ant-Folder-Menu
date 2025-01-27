// Card.jsx
import React from 'react';
import { Card } from 'antd';
import '../css/Card.css';

const CustomCard = ({ backgroundColor, title, content, content2, click, style }) => {
   
    // Función para manejar el clic en la tarjeta
    const handleCardClick = () => {
        window.open(click, '_blank');
    };

    // Función para truncar el texto
    const truncateText = (text, limit) => {
        if (text.length > limit) {
            return text.slice(0, limit) + '...'; // Truncar y agregar "..."
        }
        return text;
    };

    return (
        <Card className="card" bodyStyle={{ padding: 0 }} onClick={handleCardClick} >
            <div className="card-background" style={{ backgroundColor: backgroundColor }}>
            <h2 className="card-title">{truncateText(title, 14)}</h2> {/* Título truncado a 10 caracteres */}
            <p className="content-card">{truncateText(content, 21)}</p> {/* Primer texto truncado a 20 caracteres */}
            <p className="content-card-2">{truncateText(content2, 28)}</p> {/* Segundo texto truncado a 25 caracteres */}
            </div>
        </Card>
    );
};

export default CustomCard;
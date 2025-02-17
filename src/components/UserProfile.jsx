// UserProfile.jsx
import React from 'react';
import { Avatar } from 'antd'; // Importar el componente Avatar de Ant Design
import '../css/App.css'; // Asegúrate de que la ruta sea correcta

const UserProfile = ({ name, username, imageUrl }) => {
  return (
    <div className="user-profile">
      <Avatar size={64} src={imageUrl} alt={name}>
        {name.charAt(0)} {/* Muestra la inicial del nombre si no hay imagen */}
      </Avatar>
      <div className="user-info">
        <h3 className="user-name">{name}</h3>
        <p className="user-username">@{username}</p>
      </div>
    </div>
  );
};

export default UserProfile;
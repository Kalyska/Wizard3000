import React from 'react';

const Button = ({ name, description, icon, bgColor, action }) => {
    return (
        <div className="btn" onClick={action} style={{
            backgroundColor: bgColor
        }}>
            <div className="btn-icon">
                {icon}
            </div>
            <div className="btn-text">
                <h2>{ name }</h2>
                <p>{ description }</p>
            </div>
        </div>
    );
}

export default Button;

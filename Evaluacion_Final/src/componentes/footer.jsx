import React, { useState, useEffect } from 'react';

const FechaHora = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000); 

        return () => clearInterval(intervalId); 
    }, []);

    const formatDate = (date) => {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        return date.toLocaleDateString('es-ES', options);
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('es-ES');
    };

    return (
        <div className='footer'>
        <h2>MueblesFAST</h2>
        <div className='reloj'>
            <p>Fecha: {formatDate(currentDateTime)}</p>
            <p>Hora: {formatTime(currentDateTime)}</p>
        </div>
        </div>
    );
};

export default FechaHora;
import React, { useState, useEffect } from 'react';

const FechaHora = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000); // Actualiza cada segundo

        return () => clearInterval(intervalId); // Limpiar intervalo al desmontar el componente
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
        <div style={{ padding: '10px', textAlign: 'center', fontSize: '18px' }}>
            <p>{formatDate(currentDateTime)}</p>
            <p>{formatTime(currentDateTime)}</p>
        </div>
    );
};

export default FechaHora;
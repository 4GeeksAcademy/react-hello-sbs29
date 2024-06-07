import React, { useState, useEffect } from "react";

const SecondsCounter = () => {
    
    const [count, setCount] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [targetTime, setTargetTime] = useState(null);

    useEffect(() => {
        let interval;
        if (isActive) {
            interval = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isActive]);

    useEffect(() => {
        if (targetTime !== null && count >= targetTime) {
          alert(`Han pasado ${targetTime} segundos`);
          setTargetTime(null); // Reset target time after alert
        }
    }, [count, targetTime]);
    
    const handleStartStop = () => {
        setIsActive(!isActive);
    };
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    
    const handleSetTargetTime = () => {
        const target = parseInt(inputValue, 10);
        if (!isNaN(target)) {
          setTargetTime(target);
          setInputValue('');
        }
    };

    const formattedCount = String(count).padStart(6, '0');

    return (
        <div className="container">
            <div className="digit-container">
                <div className="digit"><i class="fa-regular fa-clock"></i></div>
                {formattedCount.split('').map((digit, index) => (
                    <div key={index} className="digit">{digit}</div>
                ))}
            </div>
            <div>
                <input 
                    type="number" 
                    value={inputValue} 
                    onChange={handleInputChange} 
                    placeholder="Ingresa segundos" 
                />
            </div>
            <button class="bn30" onClick={handleSetTargetTime}>Set Timer</button>
            <button class="bn30" onClick={() => setCount(0)}>Reiniciar</button>
            <button class="bn30" onClick={handleStartStop}>{isActive ? 'Parar' : 'Continuar'}</button>
        </div>
    );
}

export default SecondsCounter;
import React, { useEffect, useState } from 'react';
 import './style/Counter.css'
const Counter = ({ target, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = parseInt(target);
        if (start === end) return;

        const incrementTime = Math.abs(Math.floor(2000 / (end - start)));

        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, incrementTime);

        return () => clearInterval(timer);
    }, [target]);

    return (
        <div className="stat-item">
            <h2 id='count'><span className="counter">{count}</span> {label}</h2>
        </div>
    );
};

export default Counter;

import {useCallback, useEffect, useState} from "react";


const calculatePercent = useCallback(() => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return Math.round((scrollTop / scrollHeight) * 100);
},[]);

export const ScrollProgressBar = (props) => {
    const [percent, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = useCallback(() => {
            setProgress(calculatePercent());
        }, [calculatePercent]);

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, []);


    return (
        <div className="progress-bar" style={{
            'position': 'fixed',
            'top': '0',
            'left': '0',
            'width': '100%'
        }}>
            <div className="progress-item">{percent}</div>
        </div>
    )
}

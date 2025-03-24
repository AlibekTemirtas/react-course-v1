import {useEffect, useState} from "react";

const calculatePercent = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return Math.round((scrollTop / scrollHeight) * 100) + '%';
};

export const useProgress = () => {
    const [percent, setProgress] = useState('0%');

    useEffect(() => {
        const handleScroll = () => {
            setProgress(calculatePercent());
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return percent;
}

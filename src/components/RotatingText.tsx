import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RotatingTextProps {
    texts: string[];
    className?: string;
    rotationInterval?: number;
}

const RotatingText: React.FC<RotatingTextProps> = ({
    texts,
    className = '',
    rotationInterval = 3000
}) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, rotationInterval);

        return () => clearInterval(timer);
    }, [texts.length, rotationInterval]);

    return (
        <span className={`inline-flex ${className}`}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{
                        type: "spring",
                        damping: 30,
                        stiffness: 400,
                        duration: 0.3
                    }}
                    className="inline-block"
                >
                    {texts[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

export default RotatingText;

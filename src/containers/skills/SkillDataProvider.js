"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {Img} from 'react-image';

const SkillDataProvider = ({ src, width, height, index }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const animationDelay = 0.3;

    console.log(src)
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: index * animationDelay }}
        >
            <Img
                src={src}
                style={{ width: width, height: height }}
                alt="skill image"
                loader={<div>Loading...</div>}
                unloader={<div>Image not found</div>}
            />
        </motion.div>
    );
};

export default SkillDataProvider;

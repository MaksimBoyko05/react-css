import React from "react";
import { motion } from "framer-motion";

const Animatedcircle = () => {
  return (
    <motion.div
      style={{
        width: 50,
        height: 50,
        borderRadius: "50%",
        backgroundColor: "blue",
        position: "absolute",
      }}
      animate={{
        x: [0, 100, 200, 150, 0], 
        y: [0, 50, 100, 150, 200],
        backgroundColor: ["#0000ff", "#00ff00", "#ff0000", "#ffff00", "#0000ff"], 
        opacity: [1, 0.5, 0.8, 0.3, 1], 
        scale: [1, 1.5, 0.8, 1.2, 1], 
      }}
      transition={{
        duration: 5,
        ease: "easeInOut",
        loop: Infinity,
      }}
    />
  );
};

export default Animatedcircle;

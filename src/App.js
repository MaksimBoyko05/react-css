import React from "react";
import { motion } from "framer-motion";

const SynchronizedAnimation = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "100px" }}>
      {/* Елемент 1 */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{
          duration: 1,
          delay: 0,
        }}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "red",
        }}
      />
      
      {/* Елемент 2 із затримкою */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "green",
        }}
      />
      
      {/* Елемент 3 із більшою затримкою */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{
          duration: 1,
          delay: 1,
        }}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "blue",
        }}
      />
    </div>
  );
};

export default SynchronizedAnimation;

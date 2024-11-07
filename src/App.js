import React, { useState } from "react";
import { motion } from "framer-motion";

const GestureRecognition = () => {
  const [direction, setDirection] = useState("");

  const handleDragEnd = (event, info) => {
    const { offset } = info;

    if (offset.x > 100) {
      setDirection("right");
    } else if (offset.x < -100) {
      setDirection("left");
    } else if (offset.y > 100) {
      setDirection("down");
    } else if (offset.y < -100) {
      setDirection("up");
    } else {
      setDirection("");
    }
  };


  const variants = {
    swipeRight: { x: 150, backgroundColor: "#FF0000", transition: { duration: 0.5 } },
    swipeLeft: { x: -150, backgroundColor: "#00FF00", transition: { duration: 0.5 } },
    swipeUp: { y: -150, backgroundColor: "#0000FF", transition: { duration: 0.5 } },
    swipeDown: { y: 150, backgroundColor: "#FFFF00", transition: { duration: 0.5 } },
    initial: { x: 0, y: 0, backgroundColor: "#FFFFFF", transition: { duration: 0.5 } },
  };

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      {/* Елемент для свайпу */}
      <motion.div
        drag
        onDragEnd={handleDragEnd}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        variants={variants}
        animate={
          direction === "right"
            ? "swipeRight"
            : direction === "left"
            ? "swipeLeft"
            : direction === "up"
            ? "swipeUp"
            : direction === "down"
            ? "swipeDown"
            : "initial"
        }
        initial="initial"
        style={{
          width: 150,
          height: 150,
          borderRadius: 20,
          backgroundColor: "#red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "grab",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
        }}
      >
        {direction && <p>Swiped {direction}</p>}
      </motion.div>
    </div>
  );
};

export default GestureRecognition;

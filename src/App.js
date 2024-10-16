import React, { useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./App.css";

function App() {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const [ref, inView] = useInView({
    threshold: 0.5, 
    triggerOnce: false,
  });

  const [isActive, setIsActive] = useState(false);

  const variants = {
    visible: { opacity: 1, scale: 1.2, y: 0 },
    hidden: { opacity: 0.5, scale: 0.75, y: 100 },
  };

  const toggleAnimation = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      {/* Елемент 1 із прив'язкою до прокрутки */}
      <motion.div
        className="box"
        style={{ y: y1, x: -50 }}
      />

      {/* Елемент 2 із прив'язкою до прокрутки */}
      <motion.div
        className="box"
        style={{ y: y2, x: 50, background: "salmon" }}
      />

      <div style={{ height: 500 }} /> {/* Простір для прокрутки */}

      {/* Відображення стану видимості елемента */}
      <div style={{ position: "fixed", top: 0, left: 0 }}>
        {"is in view? " + inView}
      </div>

      {/* Керована анімація зі зміною стану в залежності від видимості */}
      <motion.div
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 2, ease: "easeOut" }}
        ref={ref}
        className="magic"
        onClick={toggleAnimation} // Клік для зміни стану
      />

      {/* Елемент з управлінням станами */}
      <motion.div
        className="interactive-box"
        style={{ marginTop: 100 }}
        onClick={toggleAnimation}
        animate={isActive ? "active" : "inactive"}
        variants={{
          active: { scale: 1.5, rotate: 360, x: 100 },
          inactive: { scale: 1, rotate: 0, x: 0 },
        }}
        transition={{ duration: 1 }}
      >
        Натисни для анімації
      </motion.div>
    </>
  );
}

export default App;

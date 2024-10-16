import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./App.css";

function App() {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  console.log(entry);

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50,
    },
  };

  return (
    <>
      <motion.div className="box" style={{ y: y1, x: -50 }} />
      <motion.div
        className="box"
        style={{ y: y2, x: 50, background: "salmon" }}
      />
      <div style={{ height: 500 }} />
      <div style={{ position: "fixed", top: 0, left: 0 }}>
        {" "}
        {"is in view? " + inView}
      </div>
      <motion.div
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 2, ease: "easeOut" }}
        ref={ref}
        className="magic"
      />
    </>
  );
}

export default App;

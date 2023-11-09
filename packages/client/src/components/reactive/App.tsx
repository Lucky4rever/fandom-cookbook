import { motion } from 'framer-motion';
import React from 'react';

export default function App() {
  return (
    <div style={{background: 'white', width:'50vw', height: '50vh'}}>
      <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // обмеження перетягування
      whileHover={{ scale: 1.1 }} // збільшення при наведенні курсору
      whileTap={{ scale: 0.9 }} // зменшення при натисканні
      style={{ width: 100, height: 100, background: "red" }} // стилі для елемента
    >
      Перетягуваний елемент
    </motion.div>
    </div>
  );
}
import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Sidebar.module.css";
import { Squash as Hamburger } from "hamburger-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Background overlay */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
        ></motion.div>
      )}

      <div
        className={`fixed inset-y-0 left-0 w-64 bg-primary transform transition-transform ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar content goes here */}
      </div>

      <button
        className="fixed top-5 left-5 p-2 bg-primary text-white rounded-md focus:outline-none"
        onClick={toggleSidebar}
      >
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </button>
    </>
  );
};

export default Sidebar;

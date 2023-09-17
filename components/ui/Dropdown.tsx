import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useClickOutside from "@/hooks/useClickOutside";

type Items = {
  label: string | React.ReactNode;
  icon: React.ReactNode;
  onClick: () => void;
  items?: Items[];
};

type DropdownItem = {
  children: React.ReactNode;
  items: Items[];
};

function Dropdown({ children, items }: DropdownItem) {
  const [isOpen, setIsOpen] = useState(false);
  const layoutRef = React.useRef<HTMLDivElement>(null);

  useClickOutside(layoutRef, () => {
    setIsOpen(false);
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div onClick={toggleDropdown}>{children}</div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="origin-top-right absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg"
            ref={layoutRef}
          >
            {/* Dropdown content */}
            <div className="py-2">
              {items.map((item, index) => (
                <div
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                  key={index}
                  onClick={item.onClick}
                >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Dropdown;

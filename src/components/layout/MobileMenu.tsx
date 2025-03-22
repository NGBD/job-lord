"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems } from "@/config/menu";
import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="lg:hidden text-gray-700"
        onClick={() => setIsOpen(true)}
        aria-label="Mở menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-50"
            role="dialog"
            aria-modal="true"
            aria-label="Menu chính"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="h-full"
            >
              <div className="flex justify-end p-4">
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-800"
                  aria-label="Đóng menu"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>
              <nav className="px-4" role="navigation">
                <motion.ul
                  className="space-y-6"
                  initial="closed"
                  animate="open"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.1 },
                    },
                    closed: {
                      transition: {
                        staggerChildren: 0.05,
                        staggerDirection: -1,
                      },
                    },
                  }}
                >
                  {menuItems.map((item) => (
                    <motion.li
                      key={item.href}
                      variants={{
                        open: {
                          x: 0,
                          opacity: 1,
                          transition: {
                            type: "spring",
                            damping: 20,
                            stiffness: 300,
                          },
                        },
                        closed: {
                          x: 50,
                          opacity: 0,
                        },
                      }}
                    >
                      <Link
                        href={item.href}
                        className="block text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExpandableNav } from "./ExpandableNav";
import {
  Landmark,
  ArrowLeftRight,
  Sprout,
  Briefcase,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navTabs = [
    { title: "Lending", icon: Landmark, type: "tab" as const },
    { title: "Borrowing", icon: ArrowLeftRight, type: "tab" as const },
    { title: "Yield Farming", icon: Sprout, type: "tab" as const },
    { title: "Portfolio", icon: Briefcase, type: "tab" as const },
  ];

  const mobileMenuVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -20,
      height: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="relative rounded-2xl border bg-white/70 p-2 shadow-sm backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/lovable-uploads/740fe202-f907-4e64-aaad-79c67441b4ae.png"
              alt="Metrik Logo"
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold font-space bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              METRIK
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-2">
            <ExpandableNav tabs={navTabs} />
            <div className="h-[24px] w-[1.2px] bg-gray-200" />
            <Button
              variant="outline"
              className="font-inter font-medium rounded-xl"
            >
              Connect Wallet
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-inter font-medium rounded-xl">
              Start Earning
            </Button>
          </div>

          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="lg:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-4 p-4">
                {navTabs.map((tab) => (
                  <a
                    key={tab.title}
                    href="#"
                    className="flex items-center space-x-3 text-gray-700 hover:text-purple-600"
                  >
                    <tab.icon size={20} />
                    <span>{tab.title}</span>
                  </a>
                ))}
                <div className="border-t pt-4 flex flex-col space-y-3">
                  <Button
                    variant="outline"
                    className="font-inter font-medium rounded-xl w-full"
                  >
                    Connect Wallet
                  </Button>
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-inter font-medium rounded-xl w-full">
                    Start Earning
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

// Vendor imports
"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { motion as m, useCycle } from "framer-motion";

// Project imports
import { routes } from "../constants";

// Menu Variants
const sidebarVariants = {
  visible: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  hidden: {
    clipPath: "circle(24px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const listVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const listItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

// Hamburger Icon
const Path = props => (
  <m.path
    fill="transparent"
    strokeWidth="2.5"
    stroke="#1A2E3A"
    strokeLinecap="round"
    {...props}
  />
);

const IconToggle = ({ toggle }) => (
  <button onClick={toggle} className="absolute top-[1.5rem] right-[1.92rem] z-[1]">
    <svg width="32" height="32" viewBox="0 0 24 24">
      <Path
        variants={{
          hidden: { d: "M 2 2.5 L 20 2.5" },
          visible: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          hidden: { opacity: 1 },
          visible: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          hidden: { d: "M 2 16.346 L 20 16.346" },
          visible: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
);


// Mobile Menu
export const MobileMenu = () => {
  const [isIconActive, setIsIconActive] = useCycle(false, true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);

  const showMenu = () => {
    setIsIconActive();
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <m.nav
      initial={false}
      animate={isIconActive ? "visible" : "hidden"}
      ref={containerRef}
      className="absolute top-0 right-0 bottom-0 w-1/2"
    >
        <m.div variants={sidebarVariants} className={`${isMenuOpen ? "top-0 right-0 w-full h-screen" : "top-4 right-6 rounded-full"} absolute bottom-0 w-12 h-12 bg-white`}/>
        {isMenuOpen && <m.ul variants={listVariants} className="absolute top-32 right-8">
            {routes.map((__) => (
                    <m.li variants={listItemVariants} whileTap={{ scale: 0.95 }} key={__.id} className="text-right mb-8">
                        <Link href={`/${__.id}`} className="text-lime-950 text-h3" onClick={() => showMenu()}>{__.title}</Link>
                    </m.li>
                )
            )}
        </m.ul>}
        <IconToggle toggle={() => showMenu()} />
    </m.nav>
  );
};
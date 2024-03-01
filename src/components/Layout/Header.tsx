"use client";
import { AnimatePresence, motion } from "framer-motion";
import { CgMenuLeftAlt } from "react-icons/cg";
import React, { useState } from "react";
import { FlyoutLink, PricingContent } from "../HoverComponents/FlyOutLink";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [isBottomItemVisible, setIsBottomItemVisible] = useState(false);
  const router = useRouter();
  const toggleBottomItem = () => {
    setIsBottomItemVisible(!isBottomItemVisible);
  };
  return (
    <header className="relative flex flex-rol h-20 items-center justify-between w-full bg-neutral-900 px-12 py-12 max-md:p-2 ">
      <div className="text-2xl font-bold uppercase text-slate-300 cursor-pointer hover:text-slate-500 ">
        St. David University
      </div>
      <div className="flex flex-row justify-evenly gap-7 px-7 sm:hidden md:hidden max-sm:hidden xl:flex lg:flex z-[900]">
        <FlyoutLink href="#" FlyoutContent={HomeContent}>
          Home
        </FlyoutLink>
        <FlyoutLink href="#" FlyoutContent={Administration}>
          Administration
        </FlyoutLink>
        <FlyoutLink href="#" FlyoutContent={PricingContent}>
          Schools
        </FlyoutLink>
        <FlyoutLink href="#" FlyoutContent={PricingContent}>
          Gallery
        </FlyoutLink>
        <FlyoutLink href="#" FlyoutContent={PricingContent}>
          Services
        </FlyoutLink>
      </div>
      <CgMenuLeftAlt
        size={30}
        color="white"
        className="cursor-pointer md:flex xl:hidden lg:hidden"
        onClick={toggleBottomItem}
      />
      <AnimatePresence>
        {isBottomItemVisible && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute flex flex-col bottom-[-350%] right-0 left-0 bg-neutral-500  p-5 gap-3 items-center justify-center w-full z-[100%]"
          >
            <div className="w-full flex felx-row items-center justify-end ">
              <MdClose
                size={25}
                color="white"
                onClick={toggleBottomItem}
                className="cursor-pointer"
              />
            </div>
            <div className="flex flex-col justify-center items-center w-full gap-7 px-7">
              <FlyoutLink href="#" FlyoutContent={HomeContent}>
                Home
              </FlyoutLink>
              <FlyoutLink href="#" FlyoutContent={Administration}>
                Administration
              </FlyoutLink>
              <FlyoutLink href="#" FlyoutContent={PricingContent}>
                Schools
              </FlyoutLink>
              <FlyoutLink href="#" FlyoutContent={PricingContent}>
                Gallery
              </FlyoutLink>
              <FlyoutLink href="#" FlyoutContent={PricingContent}>
                Services
              </FlyoutLink>
            </div>
            <div className="flex flex-row items-center w-full justify-center gap-5">
              <Button>Student Login</Button>
              <Button onClick={() => router.push("/login")}>Staff Login</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const HomeContent = () => {
  return (
    <div>
      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-white shadow-xl">
        <li className="row-span-3">
          <a
            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
            href="/"
          >
            <div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
            <p className="text-sm leading-tight text-muted-foreground">
              Beautifully designed components that you can copy and paste into
              your apps. Accessible. Customizable. Open Source.
            </p>
          </a>
        </li>
        <a href="/docs" title="Introduction">
          Re-usable components built using Radix UI and Tailwind CSS.
        </a>
        <a href="/docs/installation" title="Installation">
          How to install dependencies and structure your app.
        </a>
        <a href="/docs/primitives/typography" title="Typography">
          Styles for headings, paragraphs, asts...etc
        </a>
      </ul>
    </div>
  );
};

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const Administration = () => {
  return (
    <div>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white shadow-xl">
        {components.map(component => (
          <a
            key={component.title}
            title={component.title}
            href={component.href}
          >
            {component.description}
          </a>
        ))}
      </ul>
    </div>
  );
};
export default Header;

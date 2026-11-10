"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Minus, X } from "lucide-react";
import Logo from "./logo";
import { NAV_LINKS } from "../lib/site";

/**
 * Site navigation. On the front page the bar is transparent over the hero
 * video and turns solid once the hero has scrolled out of view.
 */
export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Transparent/solid state on the front page (passive, state only changes at the threshold)
  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => {
      const hero = document.getElementById("Hero");
      const threshold = (hero?.offsetHeight ?? window.innerHeight) - 64;
      setPastHero(window.scrollY >= threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Close menus on navigation
  useEffect(() => {
    setMenuOpen(false);
    setDesktopServicesOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close desktop dropdown on outside click / Escape
  useEffect(() => {
    if (!desktopServicesOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setDesktopServicesOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDesktopServicesOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [desktopServicesOpen]);

  const transparent = isHome && !pastHero;
  const barColor = transparent ? "bg-transparent" : "bg-slate-50 dark:bg-slate-950";
  const logoColor = transparent ? "fill-white" : "fill-black dark:fill-white bg-gradient-mentor";
  const textColor = transparent ? "text-white" : "text-black dark:text-white";

  return (
    <nav
      id="navbar"
      aria-label="Hovedmenu"
      className={`fixed top-0 left-0 w-full h-16 z-50 ${barColor} transition-colors duration-500`}
    >
      <div className="container-page h-full flex flex-row justify-between items-center flex-nowrap">
      <Link href="/" aria-label="Mentorplan - forside">
        <Logo className={`${logoColor} transition-colors duration-500`} />
      </Link>

      {/* Mobile: burger */}
      <button
        type="button"
        className="lg:hidden"
        aria-label="Åbn menu"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen(true)}
      >
        <Menu className={`size-8 ${textColor}`} />
      </button>

      {/* Mobile: slide-in panel */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 min-h-svh w-full backdrop-blur-xl backdrop-brightness-50
        transition-[transform,visibility] duration-700 ease-in-out lg:hidden
        ${menuOpen ? "translate-x-0 visible" : "translate-x-full invisible"}`}
      >
        <div className="flex flex-row justify-end px-8 py-4">
          <button type="button" aria-label="Luk menu" onClick={() => setMenuOpen(false)} className="p-5">
            <X className="size-8 text-slate-50" />
          </button>
        </div>
        <ul className="flex flex-col items-start px-5 text-xl text-slate-50 font-conduitbold uppercase">
          {NAV_LINKS.map((link) =>
            "children" in link ? (
              <li key={link.label} className="w-64 text-xl">
                <button
                  type="button"
                  className="flex flex-row items-center h-9 uppercase"
                  aria-expanded={mobileServicesOpen}
                  onClick={() => setMobileServicesOpen((o) => !o)}
                >
                  <Minus className={mobileServicesOpen ? "opacity-0" : ""} />
                  {link.label}
                  <ChevronDown
                    className={`ml-1 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <ul className={`${mobileServicesOpen ? "block" : "hidden"} pl-8 py-2 space-y-3 normal-case`}>
                  {link.children.map((child) => (
                    <li key={child.href} className="text-xl">
                      <Link href={child.href}>{child.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={link.href} className="text-xl">
                <Link href={link.href} className="flex flex-row items-center w-64 h-9">
                  <Minus />
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Desktop */}
      <ul
        className={`hidden lg:flex flex-row gap-5 items-center uppercase text-lg font-conduitbold
        ${textColor} transition-colors duration-500`}
      >
        {NAV_LINKS.map((link) =>
          "children" in link ? (
            <li key={link.label} ref={dropdownRef} className="relative text-lg">
              <button
                type="button"
                className="uppercase"
                aria-haspopup="true"
                aria-expanded={desktopServicesOpen}
                onClick={() => setDesktopServicesOpen((o) => !o)}
              >
                {link.label}
              </button>
              {desktopServicesOpen && (
                <ul className="absolute left-0 top-full mt-2 min-w-max py-2 bg-white text-slate-900 rounded shadow-lg normal-case font-conduit text-base">
                  {link.children.map((child) => (
                    <li key={child.href} className="text-base">
                      <Link href={child.href} className="block px-4 py-2 hover:bg-slate-100">
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li key={link.href} className="text-lg">
              <Link href={link.href}>{link.label}</Link>
            </li>
          )
        )}
      </ul>
      </div>
    </nav>
  );
}

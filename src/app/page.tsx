'use client';

import { useTheme } from 'next-themes';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import NavButtons from "@/components/NavButtons";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.themeToggle}>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={styles.toggleButton}
            aria-label="Toggle theme"
          />
          </div>
        <Image
          className={styles.logo}
          src={theme === "dark" ? "/xi1.svg" : "/xi1black.svg"}
          alt="XI.1 logo"
          width={200}
          height={50}
          priority
        />
        <h1 className={styles.title}>XI.1 CLASS</h1>
        <div className={styles.navButtons}>
          <NavButtons href="/about" emoji="ℹ️" label="About" />
          <NavButtons href="/contact" emoji="✉️" label="Contact" />
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Made with ❤️ by Arialize</p>
        <a
          href="https://github.com/LurckeA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="GitHub icon"
            width={16}
            height={16}
          />
          LurckeA/Arialize
        </a>
      </footer>
    </div>
  );
}

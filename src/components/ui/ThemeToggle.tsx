"use client";
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

/**
 * ThemeToggle – a simple dark‑mode switch.
 * It stores the user's preference in localStorage and toggles a
 * `data-theme` attribute on the <html> element ("light" | "dark").
 */
export default function ThemeToggle() {
    const [isDark, setIsDark] = useState<boolean>(false);

    // Initialise from localStorage / system preference
    useEffect(() => {
        const stored = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initial = stored ? stored === 'dark' : prefersDark;
        setIsDark(initial);
        document.documentElement.setAttribute('data-theme', initial ? 'dark' : 'light');
    }, []);

    const toggle = () => {
        const newVal = !isDark;
        setIsDark(newVal);
        document.documentElement.setAttribute('data-theme', newVal ? 'dark' : 'light');
        localStorage.setItem('theme', newVal ? 'dark' : 'light');
    };

    return (
        <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
            {isDark ? <Sun className="w-5 h-5 text-yellow-300" /> : <Moon className="w-5 h-5 text-gray-300" />}
        </button>
    );
}

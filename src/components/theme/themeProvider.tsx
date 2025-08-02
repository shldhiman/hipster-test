import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export type ThemeType = "light" | "dark" | "colorful"

interface ThemeContextType {
    theme: ThemeType
    setTheme: (theme: ThemeType) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const savedTheme = localStorage.getItem("theme") as ThemeType
    const [theme, setTheme] = useState<ThemeType>(savedTheme ? savedTheme : "light")


    useEffect(() => {
        localStorage.setItem("theme", theme)
        document.documentElement.setAttribute("data-theme", theme)
        document.documentElement.setAttribute("class", theme)
        // document.documentElement.classList.toggle("dark", theme === "dark")
        // Apply theme-specific classes to body



        // document.documentElement.className = ""
        // if (theme === "light") {
        //     document.body.className = "light_theme"
        // } else if (theme === "dark") {
        //     document.body.className = "dark_theme"
        // } else if (theme === "colorful") {
        //     document.body.className = "colorful_theme"
        // }
    }, [theme])

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context
}

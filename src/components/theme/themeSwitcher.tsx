// components/theme-toggle.tsx
import { useEffect, useState } from "react"
import { Button } from "../ui/button"

export const ThemeSwitcher = () => {
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark")
    }, [theme])

    return (
        <Button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="red-500"
        >
            Toggle {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </Button>
    )
}

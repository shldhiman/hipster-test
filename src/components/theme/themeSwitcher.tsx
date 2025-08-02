
// import { useTheme, type ThemeType } from "./theme-provider"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useTheme, type ThemeType } from "./themeProvider";



const themes: { value: ThemeType; label: string }[] = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark Sidebar" },
    { value: "colorful", label: "Colorful" },
]

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()

    return (
        <div className="flex items-center gap-3">
            <Select value={theme} onValueChange={(value: ThemeType) => setTheme(value)}>
                <SelectTrigger className="w-[140px]" id="theme-select">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    {themes.map((t) => (
                        <SelectItem key={t.value} value={t.value}>
                            {t.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}

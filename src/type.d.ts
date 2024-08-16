interface ThemeButtonProps {
  className?: string;
  iconClassName?: string;
  children: React.ReactNode;
}

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

type Theme = "light" | "dark";

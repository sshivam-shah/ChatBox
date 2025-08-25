import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chatbox-theme") || "dark",
  setTheme: (theme) => {
    localStorage.setItem("chatbox-theme", theme);
    set({ theme });
  },
}));

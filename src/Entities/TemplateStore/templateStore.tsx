import { create } from "zustand";

interface TemplateState {
  template: string;
  setTemplate: (template: string) => void;
}

export const useTemplateStore = create<TemplateState>((set) => ({
  template: "",
  setTemplate: (template: string) => set({ template }),
}));

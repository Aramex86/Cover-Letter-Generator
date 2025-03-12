import { create } from "zustand";
import { devtools } from "zustand/middleware";
interface TemplateState {
  template: string;
  userData: Record<string, string>[];
  setTemplate: (template: string) => void;
  predefined: () => void;
}

export const useTemplateStore = create<TemplateState>()(
  devtools((set, get) => ({
    template: "",
    userData: [{ name: "Slava" }],
    setTemplate: (template: string) => set({ template }),
    predefined: () =>
      set(
        (state) => ({
          template: state.userData
            .map((user) => get().template.replace("{{name}}", user.name))
            .join(", "),
        }),
        undefined,
        "predefined/useTemplate"
      ),
  }))
);

export default useTemplateStore;

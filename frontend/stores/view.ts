import { AvailableViews } from "@/interface/view";
import { create } from "zustand";

export const DEFAULT_VIEW = "grid";
export const DEFAULT_TAB = "all";

interface ViewState {
  view: AvailableViews;
  setView: (view: AvailableViews) => void;
}

export const useViewStore = create<ViewState>((set) => ({
  view: DEFAULT_VIEW,
  setView: (view: AvailableViews) => set(() => ({ view })),
}));

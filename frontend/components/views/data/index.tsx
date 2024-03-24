import { ViewProps } from "@/interface/view";
import { useViewStore } from "@/stores/view";

export const DataView = ({ children }: ViewProps) => {
  const { view } = useViewStore();

  return <div className={`container container--${view}`}>{children}</div>;
};

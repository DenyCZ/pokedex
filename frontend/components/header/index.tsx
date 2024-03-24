import { HeaderInputs } from "./inputs";
import { HeaderTabs } from "./tabs";

export const Header = () => {
  return (
    <div className="header">
      <HeaderTabs />
      <HeaderInputs />
    </div>
  );
};

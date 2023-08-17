import RootProvider from "../stores/RootProvider";
import { WebRouter } from "./Web";

export const MainComponent = () => {
  return (
    <RootProvider>
      <WebRouter />
    </RootProvider>
  );
};

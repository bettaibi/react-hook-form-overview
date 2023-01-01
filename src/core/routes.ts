import HomePage from "../containers/HomePage";
import UseFormContextPage from "../containers/useFormContextPage";
import UseFormPage from "../containers/UseFormPage";
import UseWatchPage from "../containers/useWatchPage";

interface RoutesConfig {
  path: string;
  component: React.ComponentType<any>;
}

export const routes: RoutesConfig[] = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "useFormPage",
    component: UseFormPage,
  },
  {
    path: "UseFormContextPage",
    component: UseFormContextPage,
  },
  {
    path: "useWatchPage",
    component: UseWatchPage,
  },
];

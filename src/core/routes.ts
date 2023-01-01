import HomePage from "../containers/HomePage";
import UseFieldArrayPage from "../containers/UseFieldArrayPage";
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
  {
    path: "useFieldArrayPage",
    component: UseFieldArrayPage,
  },
];

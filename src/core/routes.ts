import HomePage from "../containers/HomePage";
import UseFormContextPage from "../containers/useFormContextPage";
import UseFormPage from "../containers/UseFormPage";

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
];

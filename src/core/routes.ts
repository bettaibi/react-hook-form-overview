import HomePage from "../containers/HomePage";
import UseFormPage from "../containers/UseFormPage";

interface RoutesConfig{
    path: string;
    component: React.ComponentType<any>;
}

export const routes: RoutesConfig[] = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: 'useFormPage',
        component: UseFormPage,
    }
];
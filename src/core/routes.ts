import HomePage from "../containers/HomePage";

interface RoutesConfig{
    path: string;
    component: React.ComponentType<any>;
}

export const routes: RoutesConfig[] = [
    {
        path: '/',
        component: HomePage,
    }
];
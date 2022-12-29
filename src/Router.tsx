import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './core/routes';

export default function Router() {

  return (
    <Routes>
        {
            routes.map(route => {
                const Component = route.component;
                return(
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<Component />}
                    />
                )
            })
        }
    </Routes>
  )
}

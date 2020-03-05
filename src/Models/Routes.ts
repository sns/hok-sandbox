import { Home, Menu, Contact } from "../Components"

export interface RouteDef {
    label: string,
    path: string,
    exact?: boolean,
    component: React.Component | React.FunctionComponent,
}

export const routes: RouteDef[] = [
    {
        label: "Home",
        path: "/",
        component: Home,
        exact: true
    },
    {
        label: "Menu",
        path: "/menu",
        component: Menu,
    },
    {
        label: "Contact",
        path: "/contact",
        component: Contact,
    },
]

export default routes;
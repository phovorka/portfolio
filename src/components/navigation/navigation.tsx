import { useMenuItems } from "../header/hooks/use-menu-items";
import { NavItem } from "./nav-item";
import { NavLink } from "./nav-link";

export function Navigation() {
    const menuItems = useMenuItems();

    return (
        <nav className="max-lg:hidden">
            <ul className="flex h-full" role="menubar">
                {menuItems.map((item) => (
                    <NavItem key={item.label}>
                        <NavLink href={item.href}>{item.label}</NavLink>
                    </NavItem>
                ))}
            </ul>
        </nav>
    );
}

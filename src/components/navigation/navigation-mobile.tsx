import { useMenuItems } from "../header/hooks/use-menu-items";
import { NavItem } from "./nav-item";
import { NavLinkMobile } from "./nav-link-mobile";

interface Props {
    isOpen: boolean;
}

export function NavigationMobile(props: Props) {
    const menuItems = useMenuItems();

    if (!props.isOpen) {
        return null;
    }

    return (
        <div className="absolute inset-x-0 bottom-[--footer-height] top-[--header-height] z-10 bg-primary">
            <nav>
                <ul role="menubar">
                    {menuItems.map((item) => (
                        <NavItem key={item.label}>
                            <NavLinkMobile href={item.href}>
                                {item.label}
                            </NavLinkMobile>
                        </NavItem>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { useMenuItems } from "../header/hooks/use-menu-items";
import { NavItem } from "./nav-item";
import { NavLinkMobile } from "./nav-link-mobile";

interface Props {
    isNavigationOpen: boolean;
    setIsNavigationOpen: Dispatch<SetStateAction<boolean>>;
}

export function NavigationMobile(props: Props) {
    const router = useRouter();

    const menuItems = useMenuItems();

    if (!props.isNavigationOpen) {
        return null;
    }

    return (
        <div className="absolute inset-x-0 bottom-[--footer-height] top-[--header-height] z-10 bg-primary-base">
            <nav>
                <ul role="menubar">
                    {menuItems.map((item) => (
                        <NavItem key={item.label}>
                            <NavLinkMobile
                                href={item.href}
                                onClick={() => {
                                    router.push(item.href);
                                    props.setIsNavigationOpen(false);
                                }}
                            >
                                {item.label}
                            </NavLinkMobile>
                        </NavItem>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

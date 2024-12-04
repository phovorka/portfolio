interface Props {
    isOpen: boolean;
}

export function NavigationMobile(props: Props) {
    if (!props.isOpen) {
        return null;
    }

    return (
        <div className="bg-primary absolute inset-x-0 bottom-[--footer-height] top-[--header-height] z-10"></div>
    );
}

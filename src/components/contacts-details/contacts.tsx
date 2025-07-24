import { RiMailFill, RiPhoneFill } from "@remixicon/react";

export function Contacts() {
    return (
        <div className="flex flex-col gap-1.5 px-6 py-4 md:px-3.5 md:py-[18px]">
            <a
                className="flex items-center gap-2 hover:text-white"
                href="mailto:hovorkapetr@gmail.com"
            >
                <RiMailFill size={16} />
                hovorkapetr@gmail.com
            </a>
            <a
                className="flex items-center gap-2 hover:text-white"
                href="tel:+420773598551"
            >
                <RiPhoneFill size={16} /> +420 773 598 551
            </a>
        </div>
    );
}

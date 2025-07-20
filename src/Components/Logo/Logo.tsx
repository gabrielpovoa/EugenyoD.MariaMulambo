import LogoNoCircle from '@/../public/goldLogo.png';
import Image from "next/image";

type ClassType = {
    class?: string;
};

export const Logo = ({ class: customClass }: ClassType) => {
    return (
        <div className="flex items-end">
            <Image
                src={LogoNoCircle}
                alt="Logo - Eugênyo de Maria Mulambo"
                title="Logo - Eugênyo de Maria Mulambo"
                className={`object-cover object-center w-24 h-24 ${customClass}`}
            />
            <p className="text-white hidden">Eugênyo de Maria Mulambo</p>
        </div>
    );
};


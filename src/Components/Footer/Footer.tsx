import WhatsApp from "@/Components/GetInTouch/WhatsApp";
import Insta from "@/Components/GetInTouch/Instagram";
import Link from "next/link";

const DeveloperReference = () => {
    return (
        <footer
            className="bg-gradient-to-br from-gray-900 via-slate-800 to-black text-white px-8 py-12 relative overflow-hidden">
            {/* Overlay escuro */}
            <div className="absolute inset-0 bg-black/70 z-0"/>

            {/* Gradiente de ornamento sutil */}
            <div
                className="absolute inset-0 opacity-10 bg-gradient-to-r from-purple-900/20 via-transparent to-purple-900/20 z-0"/>

            <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center gap-6">
                {/* Título ou Logo */}
                <h2 className="text-xl font-semibold text-purple-400">Com fé, firmeza e respeito</h2>

                {/* Descrição curta */}
                <p className="text-sm text-gray-300 max-w-md">
                    Espaço voltado à espiritualidade e orientação com guias e entidades. Acolhimento, escuta e trabalho
                    com responsabilidade.
                </p>

                {/* Links sociais */}
                <div className="flex gap-4 mt-4">
                    <WhatsApp url='https://wa.me/message/ABW7ZM3YHGQ7L1' title="WhatsApp"/>
                    <Insta url="https://www.instagram.com/eugenyodetrancaruas/" title="Instagram"/>
                </div>

                {/* Copyright */}
                <span className="text-xs text-gray-500 mt-6">
                    &copy; {new Date().getFullYear()} Trabalhos Espirituais. Todos os direitos reservados.
                </span>
                <span className="text-xs text-gray-500 mt-6">
                    <Link href="https://joao-povoa-filho.vercel.app/" target="_blank">Developed by João Gabriel Póvoa</Link>
                </span>
            </div>
        </footer>
    );
};

export default DeveloperReference;

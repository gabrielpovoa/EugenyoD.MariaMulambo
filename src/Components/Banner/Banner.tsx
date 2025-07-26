import {Logo} from "@/Components/Logo/Logo";
import {Particles} from "@/Components/ColorParticles/Particles";

export const Banner = () => {
    return (
        <section
            className="relative w-full h-screen bg-cover bg-center bg-gradient-to-br from-gray-900 via-slate-800 to-black overflow-hidden"
            style={{ backgroundImage: "url('/banner.jpeg')" }}
        >
            {/* Overlay escuro */}
            <div className="absolute inset-0 bg-black/70 z-10" />

            {/* Background pattern/texture */}
            <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-purple-900/20 via-transparent to-purple-900/20 z-15" />

            {/* Logo no canto superior esquerdo */}
            <div className="absolute top-6 left-6 sm:top-8 sm:left-8 lg:top-10 lg:left-10 z-50">
                <Logo class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" />
            </div>

            {/* Título no canto inferior direito */}
            <div className="absolute bottom-10 right-6 sm:right-8 lg:right-10 z-30 max-w-md lg:max-w-lg text-right">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white font-serif leading-tight tracking-wide">
                    <span className="block mb-2">Tranca Ruas</span>
                    <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                        e Maria Mulambo
                    </span>
                </h1>
            </div>

            {/* Gradiente decorativo inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-purple-900/20 to-transparent z-20" />

            {/* Partículas decorativas */}
           <Particles/>

            {/* Elementos decorativos inspirados no layout */}
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-25">
                <div className="w-6 h-6 border-2 border-purple-400/30 rotate-45 bg-purple-600/20"></div>
            </div>

            {/* Side decorative elements */}
            <div className="absolute top-1/2 left-8 transform -translate-y-1/2 z-25">
                <div className="w-4 h-8 border-2 border-purple-400/30 rounded-full bg-purple-600/20"></div>
            </div>
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2 z-25">
                <div className="w-4 h-8 border-2 border-purple-400/30 rounded-full bg-purple-600/20"></div>
            </div>

            {/* Borda decorativa inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent z-20" />
        </section>
    );
};

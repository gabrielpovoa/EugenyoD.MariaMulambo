import devil from '@/../public/myself.jpeg'
import {Title} from "@/Components/GridSections/Title";

export const AboutMe = () => {
    return(
        <section>
            {/* Container principal com fundo escuro e gradiente */}
            <div className="relative w-full min-h-[28rem] sm:min-h-[32rem] lg:min-h-[36rem] bg-gradient-to-br from-gray-900 via-slate-800 to-black overflow-hidden">

                {/* Overlay escuro */}
                <div className="absolute inset-0 bg-black/70 z-10" />

                {/* Background pattern/texture */}
                <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-purple-900/20 via-transparent to-purple-900/20" />

                {/* Content wrapper */}
                <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full px-6 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-16">

                    {/* Coluna esquerda - Conteúdo de texto */}
                    <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">

                        {/* Título com ícone */}
                        <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                            <Title heading="Sobre mim" section="Sobre Mim"/>
                        </div>

                        {/* Texto descritivo */}
                        <div className="max-w-lg lg:max-w-xl">
                            <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-100 font-serif">
                                Sobre conteúdos sobre o caminho sobre Umbanda, Quimbanda e Candomblé no cotidiano. Antigo pontengo, é o outro meio sobre ouvir das entidades.
                            </p>
                        </div>
                    </div>

                    {/* Coluna direita - Imagem do demônio */}
                    <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                        <div className="relative">

                            {/* Efeito de brilho roxo */}
                            <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-2xl scale-125 animate-pulse" />

                            {/* Container da imagem */}
                            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72">

                                {/* Círculo de fundo com gradiente roxo */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 via-purple-800/30 to-purple-900/50 rounded-full" />

                                {/* Imagem do demônio */}
                                <div
                                    className="absolute inset-2 bg-cover bg-center bg-no-repeat rounded-full"
                                    style={{ backgroundImage: `url(${devil.src})` }}
                                >
                                    {/* Overlay sutil */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent rounded-full" />
                                </div>

                                {/* Borda externa */}
                                <div className="absolute inset-0 border-2 border-purple-500/30 rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gradiente decorativo inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-purple-900/20 to-transparent" />

                {/* Partículas decorativas (opcional) */}
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-60 animate-pulse" />
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-300 rounded-full opacity-40 animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/6 w-0.5 h-0.5 bg-purple-500 rounded-full opacity-50 animate-pulse delay-500" />
            </div>
        </section>
    )
}
import devil from '@/../public/manSmoking.webp';
import {Grid} from "@/Components/Grid/Grid";

export const GridChildren = () => {
    return (
        <>
            <Grid>
                {/* Coluna da esquerda - Imagem */}
                <div className="relative w-full min-h-[24rem] bg-gradient-to-br from-gray-900 via-slate-800 to-black flex items-center justify-center p-8">
                    {/* Overlay escuro */}
                    <div className="absolute inset-0 bg-black/70 z-10" />

                    {/* Background pattern/texture */}
                    <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-purple-900/20 via-transparent to-purple-900/20" />

                    {/* Container da imagem */}
                    <div className="relative z-20">
                        <div className="relative">
                            {/* Efeito de brilho roxo */}
                            <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-2xl scale-125 animate-pulse" />

                            {/* Container da imagem */}
                            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72">

                                {/* Círculo decorativo com gradiente roxo */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 via-purple-800/30 to-purple-900/50 rounded-full" />

                                {/* Ornamentos decorativos ao redor */}
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div className="w-6 h-6 border-2 border-purple-400 rotate-45 bg-purple-600/30"></div>
                                </div>
                                <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
                                    <div className="w-4 h-8 border-2 border-purple-400 rounded-full bg-purple-600/30"></div>
                                </div>
                                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
                                    <div className="w-4 h-8 border-2 border-purple-400 rounded-full bg-purple-600/30"></div>
                                </div>

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

                    {/* Partículas decorativas */}
                    <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-60 animate-pulse z-20" />
                    <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-300 rounded-full opacity-40 animate-pulse delay-1000 z-20" />
                    <div className="absolute top-1/2 left-1/6 w-0.5 h-0.5 bg-purple-500 rounded-full opacity-50 animate-pulse delay-500 z-20" />
                </div>

                {/* Coluna da direita - Texto */}
                <div className="relative w-full min-h-[24rem] bg-gradient-to-br from-gray-900 via-slate-800 to-black flex items-center justify-center p-8">
                    {/* Overlay escuro */}
                    <div className="absolute inset-0 bg-black/70 z-10" />

                    {/* Background pattern/texture */}
                    <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-purple-900/20 via-transparent to-purple-900/20" />

                    {/* Conteúdo de texto */}
                    <div className="relative z-20 text-center lg:text-left max-w-lg">

                        {/* Título com ícone */}
                        <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-full fill-current text-purple-400"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H19V9Z" />
                                </svg>
                            </div>
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wider uppercase text-white font-serif">
                                Trabalhos Religiosos
                            </h1>
                        </div>

                        {/* Texto descritivo */}
                        <div>
                            <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-100 font-serif">
                                Sobre conteúdos sobre o caminho sobre Umbanda, Quimbanda e Candomblé no cotidiano. Antigo pontengo, é o outro meio sobre ouvir das entidades.
                            </p>
                        </div>
                    </div>

                    {/* Gradiente decorativo inferior */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-purple-900/20 to-transparent z-15" />
                </div>
            </Grid>
        </>
    );
};

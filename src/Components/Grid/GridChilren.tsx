import devil from '@/../public/tarot.jpeg';
import {Grid} from "@/Components/Grid/Grid";
import {Title} from "@/Components/GridSections/Title";
import {Subtext} from "@/Components/GridSections/Subtext";
import {Particles} from "@/Components/ColorParticles/Particles";
import WhatsApp from "@/Components/GetInTouch/WhatsApp";
import {FooterGradient} from "@/Gradient/FooterGradient";

export const GridChildren = () => {
    return (
        <>
            <Grid>
                {/* Coluna da esquerda - Imagem */}
                <div
                    className="relative w-full min-h-[24rem] bg-gradient-to-br from-gray-900 via-slate-800 to-black flex items-center justify-center p-8">
                    {/* Overlay escuro */}
                    <div className="absolute inset-0 bg-black/70 z-10"/>

                    {/* Background pattern/texture */}
                    <div
                        className="absolute inset-0 opacity-10 bg-gradient-to-r from-purple-900/20 via-transparent to-purple-900/20"/>

                    {/* Container da imagem */}
                    <div className="relative z-20">
                        <div className="relative">
                            {/* Efeito de brilho roxo */}
                            <div
                                className="absolute inset-0 bg-purple-600/20 rounded-full blur-2xl scale-125 animate-pulse"/>

                            {/* Container da imagem */}
                            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72">

                                {/* Círculo decorativo com gradiente roxo */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-purple-600/40 via-purple-800/30 to-purple-900/50 rounded-full"/>

                                {/* Ornamentos decorativos ao redor */}
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div
                                        className="w-6 h-6 border-2 border-purple-400 rotate-45 bg-purple-600/30"></div>
                                </div>
                                <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
                                    <div
                                        className="w-4 h-8 border-2 border-purple-400 rounded-full bg-purple-600/30"></div>
                                </div>
                                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
                                    <div
                                        className="w-4 h-8 border-2 border-purple-400 rounded-full bg-purple-600/30"></div>
                                </div>

                                {/* Imagem do demônio */}
                                <div
                                    className="absolute inset-2 bg-cover bg-center bg-no-repeat rounded-full"
                                    style={{backgroundImage: `url(${devil.src})`}}
                                >
                                    {/* Overlay sutil */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent rounded-full"/>
                                </div>

                                {/* Borda externa */}
                                <div className="absolute inset-0 border-2 border-purple-500/30 rounded-full"/>
                            </div>
                        </div>
                    </div>

                    {/* Partículas decorativas */}
                    <Particles/>

                </div>

                {/* Coluna da direita - Texto */}
                <div
                    className="relative w-full min-h-[24rem] bg-gradient-to-br from-gray-900 via-slate-800 to-black flex items-center justify-center p-8">
                    {/* Overlay escuro */}
                    <div className="absolute inset-0 bg-black/70 z-10"/>

                    {/* Background pattern/texture */}
                    <div
                        className="absolute inset-0 opacity-10 bg-gradient-to-r from-purple-900/20 via-transparent to-purple-900/20"/>

                    {/* Conteúdo de texto */}
                    <div className="relative z-20 text-center lg:text-left max-w-lg">

                        {/* Título com ícone */}
                        <Title section="Trabalhos" heading="Precisa de ajuda?"/>

                        {/* Texto descritivo */}
                        <Subtext
                            section="Trabalhos"
                            content="Atendo com seriedade e respeito às entidades, oferecendo abertura de caminhos, limpeza espiritual, amarração amorosa, domínio de cabeça, trabalhos para saúde, comércio e muito mais. Caminhe com fé, orientação e firmeza."
                        />

                        <WhatsApp url="wa.me/message/ABW7ZM3YHGQ7L1"/>
                    </div>

                    {/* Gradiente decorativo inferior */}
                    <FooterGradient/>
                </div>
            </Grid>
        </>
    );
};

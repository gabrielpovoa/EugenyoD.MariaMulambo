import {Posts} from "@/Components/Instagram/Posts";
import {mockPosts} from "@/Data/DataMock";
import Link from "next/link";
import Insta from "@/Components/GetInTouch/Instagram";

export const Instagram = () => {
    return (
        <section className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-black py-16 px-6 sm:px-8 lg:px-12">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black/70 z-10" />

            {/* Background pattern/texture */}
            <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-purple-900/20 via-transparent to-purple-900/20" />

            {/* Decorative elements inspired by the layout */}
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-15">
                <div className="w-8 h-8 border-2 border-purple-400 rotate-45 bg-purple-600/30"></div>
            </div>

            {/* Side decorative elements */}
            <div className="absolute top-1/2 left-8 transform -translate-y-1/2 z-15">
                <div className="w-6 h-12 border-2 border-purple-400 rounded-full bg-purple-600/30"></div>
            </div>
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2 z-15">
                <div className="w-6 h-12 border-2 border-purple-400 rounded-full bg-purple-600/30"></div>
            </div>

            {/* Partículas decorativas */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-pulse z-15" />
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-300 rounded-full opacity-40 animate-pulse delay-1000 z-15" />
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-500 rounded-full opacity-50 animate-pulse delay-500 z-15" />

            {/* Content container */}
            <div className="relative z-20 max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-serif mb-4 tracking-wider">
                        INSTAGRAM
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 font-serif">
                        Acompanhe nossos trabalhos espirituais
                    </p>
                </div>

                {/* Posts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {mockPosts.map((post) => (
                        <Posts
                            data={post}
                            key={post.id}
                        />
                    ))}
                </div>

                {/* Call to action */}
                <div className="text-center mt-12">
                    <Insta url="https://www.instagram.com/eugenyodetrancaruas/"/>
                </div>
            </div>

            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/20 to-transparent z-15" />
        </section>
    );
};

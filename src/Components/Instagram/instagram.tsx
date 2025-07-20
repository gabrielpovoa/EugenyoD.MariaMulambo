import {Posts} from "@/Components/Instagram/Posts";
import {mockPosts} from "@/Data/DataMock";

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
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        <span>Ver mais no Instagram</span>
                    </a>
                </div>
            </div>

            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/20 to-transparent z-15" />
        </section>
    );
};

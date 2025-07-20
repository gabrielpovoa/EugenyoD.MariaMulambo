"use client"
import Image from 'next/image';
import { useState } from 'react';
import {InstagramPost} from "@/Type/witchcraftPosts";

interface PostsProps {
    data: InstagramPost;
}

export const Posts = ({data}: PostsProps) => {
    const { id, imageUrl, caption,content } = data;
    const [imageError, setImageError] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div
            key={id}
            className="group relative bg-gradient-to-br from-purple-900/20 via-slate-800/30 to-black/50 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
            {/* Post Image */}
            <div className="relative aspect-square overflow-hidden">
                {/* Usando Next.js Image component para melhor performance */}
                {imageUrl && !imageError ? (
                    <div className="relative w-full h-full">
                        <Image
                            src={imageUrl}
                            alt={caption || 'Instagram post'}
                            fill
                            className="object-cover transition-opacity duration-300"
                            style={{
                                opacity: imageLoaded ? 1 : 0
                            }}
                            onLoad={() => setImageLoaded(true)}
                            onError={() => setImageError(true)}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />

                        {/* Overlay roxo */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 via-purple-800/30 to-purple-900/50 mix-blend-overlay" />

                        {/* Loading placeholder enquanto a imagem carrega */}
                        {!imageLoaded && (
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 via-purple-800/30 to-purple-900/50 flex items-center justify-center">
                                <div className="w-16 h-16 border-2 border-purple-400 rounded-full flex items-center justify-center animate-pulse">
                                    <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    /* Placeholder quando não há imagem ou erro no carregamento */
                    <div className="w-full h-full bg-gradient-to-br from-purple-600/40 via-purple-800/30 to-purple-900/50 flex items-center justify-center">
                        <div className="w-16 h-16 border-2 border-purple-400 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </div>
                    </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <div className="text-center text-white">
                        <div className="flex items-center justify-center space-x-6 mb-2">
                            <div className="flex items-center space-x-1">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                </svg>
                                <span className="text-sm">{content}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Post Info */}
            <div className="p-4">
                <p className="text-gray-200 text-sm line-clamp-2 mb-2 font-serif">
                    {content}
                </p>

            </div>
        </div>
    );
};

"use client";

import React, { useEffect, useRef } from 'react';

// Using dynamic import trick for photo-sphere-viewer since it relies heavily on window/document
// We will load it only on the client side

export const PhotoSphereViewer = ({ src, alt = "360 Tour" }: { src: string, alt?: string }) => {
    const viewerRef = useRef<HTMLDivElement>(null);
    const instanceRef = useRef<any>(null);

    useEffect(() => {
        let isMounted = true;

        const initViewer = async () => {
            if (!viewerRef.current || typeof window === 'undefined') return;

            try {
                // @ts-ignore
                const { Viewer } = await import('@photo-sphere-viewer/core');
                // @ts-ignore
                import('@photo-sphere-viewer/core/index.css'); // Import styles dynamically 

                if (isMounted && !instanceRef.current) {
                    instanceRef.current = new Viewer({
                        container: viewerRef.current,
                        panorama: src,
                        caption: alt,
                        loadingImg: '/icons/icon-192x192.png',
                        touchmoveTwoFingers: true,
                        mousewheelCtrlKey: true,
                        defaultYaw: '130deg',
                        navbar: [
                            'autorotate',
                            'zoom',
                            'caption',
                            'fullscreen',
                        ],
                    });
                }
            } catch (error) {
                console.error("Failed to load 360 viewer:", error);
            }
        };

        initViewer();

        return () => {
            isMounted = false;
            if (instanceRef.current) {
                instanceRef.current.destroy();
                instanceRef.current = null;
            }
        };
    }, [src, alt]);

    return (
        <div className="w-full h-full relative group min-h-[400px]">
            <div
                ref={viewerRef}
                style={{ width: '100%', height: '100%', minHeight: '400px' }}
                className="w-full h-full absolute inset-0"
            />
            {/* Overlay hint that disappears on interaction */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors duration-500">
                <div className="bg-brand-charcoal/80 text-brand-ivory px-6 py-3 rounded-full backdrop-blur-md opacity-100 group-hover:opacity-0 transition-opacity duration-500 shadow-2xl border border-white/10 uppercase tracking-widest text-xs font-bold flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                    </svg>
                    Drag to look around
                </div>
            </div>
        </div>
    );
};

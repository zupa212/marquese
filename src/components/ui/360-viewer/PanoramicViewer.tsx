"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Maximize, Eye, Compass, Volume2, VolumeX, EyeOff } from 'lucide-react';
import Script from 'next/script';

interface PanoramicViewerProps {
    src: string;
    mobileSrc?: string;
    alt?: string;
}

export const PanoramicViewer = ({ src, mobileSrc, alt = "360 Tour" }: PanoramicViewerProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const viewerRef = useRef<any>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [audioEnabled, setAudioEnabled] = useState(false);
    const [isGyroEnabled, setIsGyroEnabled] = useState(false);
    const [showHints, setShowHints] = useState(true);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Smart WebGL Texture Check & Mobile Fallback
    const getOptimalTexture = () => {
        if (typeof window === 'undefined') return src;
        const isMobile = window.innerWidth <= 768;
        // Fall back to lower res on mobile if provided to prevent WebGL crashing
        return (isMobile && mobileSrc) ? mobileSrc : src;
    };

    const initViewer = () => {
        if (typeof window === 'undefined' || !(window as any).pannellum || !containerRef.current) return;

        viewerRef.current = (window as any).pannellum.viewer(containerRef.current, {
            type: 'equirectangular',
            panorama: getOptimalTexture(),
            autoLoad: true,
            showControls: false, // We use custom Lucide React controls
            pitch: 0,
            yaw: 130,
            hfov: 100,
            minHfov: 50,
            maxHfov: 120,
            orientationOnByDefault: false,
            compass: false,
            title: alt,
        });

        // Event listeners for audio
        viewerRef.current.on('mousedown', playInteractionSound);
        viewerRef.current.on('touchstart', playInteractionSound);

        setIsLoaded(true);
    };

    useEffect(() => {
        // Init audio
        audioRef.current = new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_249ea94d80.mp3?filename=whoosh-6316.mp3'); // subtle interaction sound
        audioRef.current.volume = 0.2;

        return () => {
            if (viewerRef.current) {
                viewerRef.current.destroy();
            }
        };
    }, []);

    const playInteractionSound = () => {
        if (audioEnabled && audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(() => { });
        }
        setShowHints(false);
    };

    const toggleAudio = () => {
        setAudioEnabled(!audioEnabled);
        if (!audioEnabled && audioRef.current) {
            audioRef.current.play().catch(() => { }); // Play test sound
        }
    };

    const toggleGyro = async () => {
        if (!isGyroEnabled) {
            // Request Device Orientation Permission for iOS 13+
            if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
                try {
                    const permissionState = await (DeviceOrientationEvent as any).requestPermission();
                    if (permissionState === 'granted') {
                        viewerRef.current?.startOrientation();
                        setIsGyroEnabled(true);
                    }
                } catch (error) {
                    console.error("Gyroscope permission denied", error);
                }
            } else {
                // Non-iOS 13+ devices
                viewerRef.current?.startOrientation();
                setIsGyroEnabled(true);
            }
        } else {
            viewerRef.current?.stopOrientation();
            setIsGyroEnabled(false);
        }
    };

    const toggleFullscreen = () => {
        viewerRef.current?.toggleFullscreen();
    };

    return (
        <div className="w-full h-full relative group min-h-[400px] lg:min-h-[500px]">
            {/* Pannellum Dependency Injection */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css" />
            <Script
                src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js"
                onLoad={initViewer}
                strategy="lazyOnload"
            />

            <div
                ref={containerRef}
                className="w-full h-full absolute inset-0 rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing"
            />

            {/* Custom Control Bar overlay */}
            {isLoaded && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-brand-charcoal/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-2xl z-10">
                    <button onClick={toggleAudio} className="text-white/70 hover:text-brand-gold transition-colors p-2" title="Toggle Interaction Sound">
                        {audioEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
                    </button>
                    <div className="w-[1px] h-6 bg-white/20"></div>
                    <button onClick={toggleGyro} className={`transition-colors p-2 ${isGyroEnabled ? 'text-brand-gold' : 'text-white/70 hover:text-brand-gold'}`} title="Toggle Device Orientation">
                        <Compass size={20} />
                    </button>
                    <div className="w-[1px] h-6 bg-white/20"></div>
                    <button onClick={() => setShowHints(!showHints)} className="text-white/70 hover:text-brand-gold transition-colors p-2" title="Toggle Hints">
                        {showHints ? <Eye size={20} /> : <EyeOff size={20} />}
                    </button>
                    <div className="w-[1px] h-6 bg-white/20"></div>
                    <button onClick={toggleFullscreen} className="text-white/70 hover:text-brand-gold transition-colors p-2" title="Fullscreen">
                        <Maximize size={20} />
                    </button>
                </div>
            )}

            {/* Hint Overlay */}
            {showHints && (
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-black/10 group-hover:bg-transparent transition-colors duration-500">
                    <div className="bg-brand-charcoal/90 text-brand-ivory px-6 py-3 rounded-full backdrop-blur-md opacity-100 group-hover:opacity-0 transition-opacity duration-500 shadow-2xl border border-white/10 uppercase tracking-widest text-xs font-bold flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="animate-pulse text-brand-gold">
                            <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                        </svg>
                        Drag or use device orientation
                    </div>
                </div>
            )}
        </div>
    );
};

import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { StickyMobileBar } from './StickyMobileBar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col bg-brand-ivory">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <StickyMobileBar />
        </div>
    );
};

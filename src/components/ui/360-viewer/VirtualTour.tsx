import { PhotoSphereViewer } from './PhotoSphereViewer';
import { Section } from '../../Section';

interface VirtualTourProps {
    src: string;
    title?: string;
    subtitle?: string;
    description?: string;
}

export const VirtualTour = ({
    src,
    title = "Virtual Tour",
    subtitle = "Explore our space",
    description = "Step inside the Marquise Barber Shop and experience our premium environment."
}: VirtualTourProps) => {
    return (
        <Section id="virtual-tour" rounded className="bg-brand-charcoal text-brand-ivory overflow-hidden relative">
            <div className="absolute inset-0 brick-pattern opacity-[0.03] pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center relative z-10 w-full">
                <div className="lg:w-1/3 space-y-6 text-center lg:text-left">
                    <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-sm block">
                        {subtitle}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold italic text-brand-ivory">
                        {title}
                    </h2>
                    <p className="text-white/60 font-light leading-relaxed">
                        {description}
                    </p>
                    <div className="flex items-center justify-center lg:justify-start space-x-4 pt-4">
                        <div className="w-12 h-[1px] bg-brand-gold/40"></div>
                        <span className="text-brand-gold text-xs uppercase tracking-[0.3em] font-bold">360° View</span>
                    </div>
                </div>

                <div className="lg:w-2/3 w-full aspect-video md:aspect-[21/9] lg:aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative bg-black/50">
                    <PhotoSphereViewer src={src} alt={title} />
                </div>
            </div>
        </Section>
    );
};

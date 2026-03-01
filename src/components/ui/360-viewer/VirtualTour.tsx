import { PanoramicViewer } from './PanoramicViewer';
import { Section } from '../../Section';

interface VirtualTourProps {
    src: string;
    title?: string;
    subtitle?: string;
    description?: string;
}

export const VirtualTour = ({
    src,
    title = "Virtual Tour"
}: VirtualTourProps) => {
    return (
        <Section id="virtual-tour" className="relative group max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="w-full aspect-square md:aspect-square lg:aspect-[4/5] min-h-[60vh] lg:min-h-[85vh] rounded-3xl overflow-hidden border-2 border-brand-charcoal/10 shadow-2xl relative bg-brand-charcoal/5 cursor-crosshair">
                <PanoramicViewer src={src} alt={title} />
            </div>
        </Section>
    );
};

import { images } from "@/data/gallery";
import { cn } from "@/lib/utils";

export const BentoGrid = ({ className, children }) => {
    return (
        <div
            className={cn(
                "grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({ className, image }) => {
    return (
        <div className="hover:translate-x-2 transition duration-200">
            <img
                src={image}
                alt="image"
                className="w-full h-24 md:h-48 object-cover rounded-xl"
            />
        </div>
    );
};
export default function Gallery() {
    return (
        <section id="gallery" className="pt-16 md:pt-24">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-8">Gallery</h2>
                <BentoGrid>
                    {images.map((image, index) => (
                        <BentoGridItem key={index} image={image} />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
}

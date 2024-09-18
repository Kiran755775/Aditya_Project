import { useEffect, useState } from 'react';

const Rolling = () => {
    const images = [
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGLkLhOL2-Iu1Cw62pGhQa2Dc5E8IcEpLyeQ&s',
            srcSet: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGLkLhOL2-Iu1Cw62pGhQa2Dc5E8IcEpLyeQ&s 800w, https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGLkLhOL2-Iu1Cw62pGhQa2Dc5E8IcEpLyeQ&s 1600w'
        },
        {
            src: 'https://i.ytimg.com/vi/R4JIOeWU4MU/hq720.jpg?sqp=-…H8gMSg0MA8=&rs=AOn4CLDel3p2Np9BxMP8E59dlozbXpjJbw',
            srcSet: 'https://i.ytimg.com/vi/R4JIOeWU4MU/hq720.jpg?sqp=-…H8gMSg0MA8=&rs=AOn4CLDel3p2Np9BxMP8E59dlozbXpjJbw 800w, https://i.ytimg.com/vi/R4JIOeWU4MU/hq720.jpg?sqp=-…H8gMSg0MA8=&rs=AOn4CLDel3p2Np9BxMP8E59dlozbXpjJbw 1600w'
        },
        {
            src: 'https://i.ytimg.com/vi/ft1BBYGfdeo/hq720.jpg?sqp=-…CMgOyh_MA8=&rs=AOn4CLAdlz8YIAaD1TFHuKCjDDLiU34thg',
            srcSet: 'https://i.ytimg.com/vi/ft1BBYGfdeo/hq720.jpg?sqp=-…CMgOyh_MA8=&rs=AOn4CLAdlz8YIAaD1TFHuKCjDDLiU34thg 800w, https://i.ytimg.com/vi/ft1BBYGfdeo/hq720.jpg?sqp=-…CMgOyh_MA8=&rs=AOn4CLAdlz8YIAaD1TFHuKCjDDLiU34thg 1600w'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [images.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full max-w-[90vw] mx-auto overflow-hidden my-10">
            <div 
                className="flex transition-transform duration-500" 
                style={{ transform: `translateX(-${currentIndex * 90}vw)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className="w-[90vw] flex-shrink-0">
                        <img
                            src={image.src}
                            srcSet={image.srcSet}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-[60vh] object-cover"
                        />
                    </div>
                ))}
            </div>
            <button
                onClick={prevSlide}
                className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
            >
                &#10095;
            </button>
        </div>
    );
};

export default Rolling;


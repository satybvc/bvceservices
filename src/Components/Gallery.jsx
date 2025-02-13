import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ImgOne from '../assets/images/IMG_1.webp';
import ImgTwo from '../assets/images/IMG_2.webp';
import ImgThree from '../assets/images/IMG_3.webp';
import ImgFour from '../assets/images/IMG_4.webp';
import ImgFive from '../assets/images/IMG_5.webp';
import ImgSix from '../assets/images/IMG_6.webp';
import ImgSeven from '../assets/images/IMG_7.webp';
import ImgEight from '../assets/images/IMG_8.webp';
import ImgNine from '../assets/images/IMG_9.webp';
import ImgTen from '../assets/images/IMG_10.webp';
import { FaSearchPlus } from "react-icons/fa";
import Heading from "./Heading";

const images = [
    { src: ImgOne },
    { src: ImgTwo },
    { src: ImgThree },
    { src: ImgFour },
    { src: ImgFive },
    { src: ImgSix },
    { src: ImgSeven },
    { src: ImgEight },
    { src: ImgNine },
    { src: ImgTen },
];

export default function Gallery() {
    const [open, setOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    return (
        <section className="gallery text-center">
            <Heading
                title={"Our Gallery"}
                description={"Some fond memories to cherish..."}
            /> 

            <div className="gallery_grid">
                {images.map((img, index) => (
                    <button
                        key={index}
                        className="gallery_box"
                        onClick={() => {
                            setPhotoIndex(index);
                            setOpen(true);
                        }}
                    >
                        <img src={img.src} alt={`Gallery ${index + 1}`} loading="lazy" />
                        <div className="overlay">
                            <span className="zoom_icon">
                                <FaSearchPlus />
                            </span>
                        </div>
                    </button>
                ))}
            </div>

            {open && (
                <Lightbox
                    slides={images}
                    open={open}
                    index={photoIndex}
                    close={() => setOpen(false)}
                />
            )}

        </section>
    );
}

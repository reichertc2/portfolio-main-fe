"use client";

import React, {useCallback, useEffect, useState} from "react";
import Image from "next/image";
import {IImageData} from "@/app/_models/user";

interface IProjectCarouselProps {
    images: IImageData[];
    className?: string;
}

export const ProjectImageCarousel: React.FC<IProjectCarouselProps> = ({
                                                                          images,
                                                                          className = "",
                                                                      }) => {
    const [index, setIndex] = useState(0);
    const count = images.length;

    const styles = {
        container: "relative inline-block w-1/3 mx-2 max-w-3xl",
        imageContainer: "relative overflow-hidden rounded-md",
        imageSubcontainer: "relative aspect-[16/10] w-full",
        image: "object-cover transition-opacity duration-300",
        leftImageButton: "absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-white hover:bg-black/70",
        rightImageButton: "absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-white hover:bg-black/70",
    }

    const goTo = useCallback(
        (next: number) => {
            if (count === 0) return;
            setIndex(((next % count) + count) % count);
        },
        [count]
    );

    const prev = useCallback(() => goTo(index - 1), [goTo, index]);
    const next = useCallback(() => goTo(index + 1), [goTo, index]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [prev, next]);

    if (count === 0) return null;

    const current = images[index];

    return (
        <div className={`${styles.container} ${className}`}>
            <div className={styles.imageContainer}>
                <div className={styles.imageSubcontainer}>
                    <Image
                        src={current.image}
                        alt={current.alt}
                        fill
                        className={styles.image}
                        sizes="(max-width: 768px) 100vw, 60vw"
                        priority={index === 0}
                    />
                </div>

                {count > 1 && (
                    <>
                        <button
                            type="button"
                            onClick={prev}
                            aria-label="Previous image"
                            className={styles.leftImageButton}
                        >
                            ‹
                        </button>
                        <button
                            type="button"
                            onClick={next}
                            aria-label="Next image"
                            className={styles.rightImageButton}
                        >
                            ›
                        </button>
                    </>
                )}
            </div>

            {count > 1 && (
                <div className="mt-3 flex justify-center gap-2">
                    {images.map((img, i) => (
                        <button
                            key={`${img.image}-${i}`}
                            type="button"
                            onClick={() => goTo(i)}
                            aria-label={`Go to image ${i + 1}`}
                            aria-current={i === index}
                            className={`h-2.5 w-2.5 rounded-full transition-opacity ${
                                i === index ? "bg-white opacity-100" : "bg-white opacity-40 hover:opacity-70"
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjectImageCarousel;
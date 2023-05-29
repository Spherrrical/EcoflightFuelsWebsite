import { AdvanceButton } from "../utils/Button-Small";
import React, { useState, useEffect } from "react";
import Container from "../utils/Container";

export const AdvanceSectionOne = () => {
    const [carouselIndex, setCarouselIndex] = useState(0);
    const carouselTexts = [
        "Build custom themes.",
        "Import photos seamlessly.",
        "Use vector SVG's.",
        "Collaborate with others.",
        "Export to PNG, PDF, and more.",
        "Design on the go with Advance Cloud.",
        "Approve or deny designs right from your phone.",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselTexts.length);
        }, 2800);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative bg-gradient-to-r from-emerald-300 from-10% via-sky-400 via-100% overflow-hidden py-24">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-center text-white text-6xl sm:text-5xl font-circular-medium relative transition-opacity duration-8000">
                    {carouselTexts[carouselIndex]}
                </h1>
            </div>
        </section>
    );
}

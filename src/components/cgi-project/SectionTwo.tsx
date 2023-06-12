import { AdvanceButton } from "../utils/Button-Small";
import React, { useState, useEffect } from "react";
import Container from "../utils/Container";

export const CricketSectionTwo = () => {
    return (
        <section className="relative bg-gradient-to-r from-emerald-500 from-10% via-blue-600 via-100% overflow-hidden py-24">
            <div className="flex flex-col items-center space-y-4">
                <h1 className="text-center text-white text-2xl sm:text-5xl font-circular-medium break-words">
                    It's the second most popular sport in the world.
                </h1>
                <h1 className="text-center text-white text-1xl sm:text-5xl font-circular-medium break-words">
                    It was the most watched sport during the ICC World Cup in 2019.
                </h1>

            </div>

        </section>
    );
}

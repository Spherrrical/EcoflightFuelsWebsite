import { AdvanceButton } from "../utils/Button-Small";
import React, { useState, useEffect } from "react";
import Container from "../utils/Container";

export const CricketSectionOne = () => {
    return (
        <section className="relative bg-gradient-to-r from-blue-500 from-10% via-purple-500 via-100% overflow-hidden py-24">
            <div className="flex flex-col items-center space-y-4">
                <h1 className="text-center text-white text-2xl sm:text-5xl font-circular-medium">
                    Cricket was created in the 16th century.
                </h1>

            </div>

        </section>
    );
}

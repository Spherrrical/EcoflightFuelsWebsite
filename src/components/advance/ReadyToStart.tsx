import { AdvanceButton } from "../utils/Button-Small";
import React, { useState, useEffect } from "react";
import Container from "../utils/Container";

export const AdvanceSectionLast = () => {
    return (
        <section className="relative bg-gradient-to-r from-blue-500 from-10% via-purple-500 via-100% overflow-hidden py-24">
            <div className="flex flex-col items-center space-y-4">
                <h1 className="text-center text-white text-6xl sm:text-5xl font-circular-medium">
                    Create collaborative work with
                </h1>
                <h1 className="text-center text-white text-6xl sm:text-5xl font-circular-medium">
                    Advance Cloud Live.
                </h1>
                <p className="py-3"></p>
                <AdvanceButton className="w-40 text-black bg-turks hover:bg-turkshover">
                    Learn More
                </AdvanceButton>
            </div>

            <p className="py-16"></p>

            <div className="flex flex-col items-center space-y-4">
                <h1 className="text-center text-white text-6xl sm:text-5xl font-circular-medium">
                    Ready to start creating eye-catching designs?
                </h1>
                <h1 className="text-center text-white text-6xl sm:text-5xl font-circular-medium">
                    Start designing with Advance.
                </h1>
                <p className="py-3"></p>
                <AdvanceButton className="w-40 text-black bg-turks hover:bg-turkshover">
                    Learn More
                </AdvanceButton>
            </div>
        </section>
    );
}

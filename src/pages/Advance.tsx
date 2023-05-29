import {AdvanceButton} from "../components/utils/Button-Small";
import React from "react";
import {AdvanceSectionOne} from "../components/advance/EffortlessSection";
import {AdvanceSectionLast} from "../components/advance/ReadyToStart";
import {Footer} from "../components/utils/Footer";

export const Advance = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-screen bg-white">
                <div className="flex flex-col items-center space-y-4">
                    <h1 className="text-center text-black text-6xl sm:text-5xl font-circular-bold">
                       We're creating something beautiful.
                    </h1>
                    <h1 className="text-center text-gray-400 text-6xl sm:text-sm font-circular-book">
                        The next generation of yearbook designing software is almost here.
                    </h1>
                    <p className="py-0.5"></p>
                    <AdvanceButton className="w-40 text-black bg-turks hover:bg-turkshover">
                        Learn More
                    </AdvanceButton>
                </div>
            </div>

            <AdvanceSectionOne/>
            <AdvanceSectionLast/>
            <Footer/>
        </div>
    );
}
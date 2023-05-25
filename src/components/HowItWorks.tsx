import { Button } from './utils/Button';
import Container from './utils/Container';
import { useNavigate } from "react-router-dom";

export const HowItWorks = () => (
    <section className="bg-darkNavy overflow-hidden py-12">
        <div className="flex justify-center">
            <Container className="max-w-4xl text-center lg:text-left">
                <h1 className="text-center text-green font-sfpro text-5xl">
                    What is our plan?
                </h1>
                <p className="mt-7 text-center text-oldWhite text-1xl px-8 font-inter">
                   We are dedicated to supporting the aviation industry's pursuit of achieving net zero emissions by 2050. We are committed to utilizing biomass derived from landfills as a sustainable source for creating biofuels. Additionally, we prioritize active engagement with communities and value their feedback, ensuring that our operations have a positive impact on the surrounding areas that may be affected by our plans. With our projections, we anticipate producing an average of approximately 4.3 million gallons of biofuel each year.
                </p>
                <p className="py-5"></p>
                <h1 className="text-center px-2 text-green font-sfpro text-5xl">
                    How does it work?
                </h1>
                <p className="mt-7 text-center px-6 text-oldWhite text-1xl font-inter">
                    Ecoflight Fuels is paving the way for sustainable aviation fuel (SAF) production by harnessing the potential of landfills. Recognizing landfills as a promising waste stream, the company aims to convert organic waste materials, particularly food waste, into biofuels. With a focus on a landfill in Washington, they plan to extract usable materials from the waste and initiate biofuel production. While the exact manufacturing process is not specified, it likely involves innovative technologies like anaerobic digestion or fermentation to transform biomass into biofuel. Once produced, the biofuels will be stored in sizable tanks at King County International Airport, holding up to 875,000 gallons of SAF. Transportation of the biomass and SAF will be facilitated by biodiesel-fueled semi-trucks, ensuring an efficient and sustainable logistics chain. Ultimately, the SAF produced by Ecoflight Fuels will be utilized to power aircraft at KCIA, offering a more environmentally friendly alternative to conventional jet fuel and contributing to the reduction of carbon emissions in the aviation industry.
                </p>
            </Container>
        </div>
    </section>
);

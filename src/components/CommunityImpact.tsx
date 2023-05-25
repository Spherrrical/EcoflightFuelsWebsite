import { Button } from './utils/Button';
import Container from './utils/Container';

export const CommunityImpact = () => (
    <section className="bg-lightNavy overflow-hidden py-12">
        <div className="flex justify-center">
            <Container className="max-w-4xl text-center lg:text-left">
                <h1 className="text-center text-green font-sfpro text-5xl">
                    How does this effect the community?
                </h1>
                <p className="mt-7 text-center text-oldWhite text-1xl px-8 font-inter">
                    The establishment of a sustainable aviation fuel (SAF) manufacturing facility by Ecoflight Fuels presents potential benefits and considerations for the surrounding areas of Beacon Hill, South Park, and Tukwila. While specific details on the impacts are not provided in the report, key factors should be taken into account. The manufacturing process of SAF may involve emissions and odors, requiring proper emission control measures. Noise generated during the process could impact nearby residential areas, necessitating noise mitigation measures. Transportation activities related to biomass delivery and SAF distribution could increase local traffic and congestion. However, the facility could also bring positive economic impacts, such as job creation and local economic growth. Conducting a thorough environmental and social impact assessment would be essential to evaluate and address any potential concerns.
                </p>
            </Container>
        </div>
    </section>
);

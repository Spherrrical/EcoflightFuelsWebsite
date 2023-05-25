import { Button } from './utils/Button';
import Container from './utils/Container';

export const AboutUs = () => (
    <section className="bg-navy overflow-hidden py-12">
        <div className="flex justify-center">
            <Container className="max-w-4xl text-center lg:text-left">
                <h1 className="text-center text-green font-sfpro text-5xl">
                    About Us
                </h1>
                <p className="mt-8 text-center text-oldWhite text-1xl px-8 font-inter">
                    Ecoflight Fuels is a group of Raisbeck Aviation High School students working to develop an eco-friendly future for aviation by creating sustainable aviation fuel.
                </p>
                <div className="flex justify-center mt-8">
                    <a href="/EcoflightFuelsRFP.pdf" target="_blank" rel="noopener noreferrer">
                        <Button className="w-60 text-lightOcean bg-lightNavy hover:bg-darkNavy">
                            Read the Report
                        </Button>
                    </a>
                </div>
            </Container>
        </div>
    </section>
);

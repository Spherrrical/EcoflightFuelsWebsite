import { Button } from './utils/Button';
import Container from './utils/Container';

export const CommunityImpact = () => (
    <section className="bg-navy">
        <div className="relative">
            <Container className="flex relative top-0 flex-col items-center justify-center py-12 px-12 ml-19 max-w-7xl ">
                <div className="max-w-4xl text-center lg:text-left">
                    <h1 className="text-center text-green font-sfpro text-6xl">Community Impact</h1>
                    <p className="mt-8 text-lightOcean font-inter">
                        Ecoflight Fuels is commited to creating a better environment for the community around us. We are working with the community to create a sustainable future for aviation.
                    </p>
                    {/*<p className="py-4 text-lightOcean font-inter">*/}
                    {/*    Ecoflgith*/}
                    {/*</p>*/}
                    <p className="py-4"></p>
                </div>
                <div className="flex flex-col items-center space-y-3 space-x-4 text-center md:space-y-0 lg:flex-row lg:items-start lg:text-left">
                    <a href="https://opencollective.com/flybywire/" target="_blank" rel="noreferrer">
                        <Button className="w-40 text-lightOcean bg-lightNavy hover:bg-darkNavy">
                            SAF Report
                        </Button>
                    </a>
                </div>
                <p className="py-4"></p>
                <div className="items-center space-y-3 space-x-4 text-center md:space-y-0 lg:flex-row lg:items-start lg:text-left">
                    <a href="https://opencollective.com/flybywire/" target="_blank" rel="noreferrer">
                        <Button className="w-40 text-lightOcean bg-lightNavy hover:bg-darkNavy">
                            Thing 1
                        </Button>
                    </a>
                </div>
            </Container>
        </div>
    </section>
);
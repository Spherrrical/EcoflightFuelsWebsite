import {AdvanceButton} from "../components/utils/Button-Small";
import React from "react";
import {AdvanceSectionOne} from "../components/advance/EffortlessSection";
import {AdvanceSectionLast} from "../components/advance/ReadyToStart";
import {Footer} from "../components/utils/Footer";
import {CricketSectionOne} from "../components/cgi-project/SectionOne";
import Container from "../components/utils/Container";
import {CricketSectionTwo} from "../components/cgi-project/SectionTwo";



export const Cricket = () => {
    return (
        <div>
            <div
                className="flex justify-center items-center h-screen bg-cover bg-blur-5"
                style={{ backgroundImage: `url("./cricket.jpeg")` }}
            >
                <div className="flex flex-col items-center space-y-4">
                    <h1 className="text-center text-black text-4xl sm:text-7xl font-circular-bold">
                        The History of Cricket
                    </h1>
                    <h1 className="text-center text-black text-2xl sm:text-sm font-circular-bold">
                        (the european sport)
                    </h1>
                </div>
            </div>

c
            <CricketSectionOne/>

            <section className="bg-white overflow-hidden py-12">
                <div className="flex justify-center">
                    <Container className="max-w-4xl text-center lg:text-left">
                        <h1 className="text-center text-red-700 font-sfpro text-5xl">
                            What is cricket?
                        </h1>



                        <p className="mt-6 text-center text-black text-1xl px-8 font-inter">
                            Cricket is a popular team sport played with a bat and a ball. It is primarily played in countries like England, Australia, India, Pakistan, and others where it holds a significant cultural and sporting importance.
                        </p>
                        <p className="py-5"></p>
                        <h1 className="text-center text-red-700 font-sfpro text-5xl">
                            How do you play it?
                        </h1>
                        <p className="mt-6 text-center text-black text-1xl px-8 font-inter">
                            The game involves two teams, each consisting of eleven players. The objective is for one team to score more runs than the other while also dismissing the opposing team's players. The game takes place on a grass field, usually an oval-shaped pitch in the center. At each end of the pitch, there is a set of three wooden stumps with two small wooden bails balanced on top. This is called a wicket. If the ball touches it when in play, your out.
                        </p>
                        <img src="cricket2.jpeg" alt="Cricket" className="mx-auto my-8 w-256 h-128" />
                        <p className="py-5"></p>
                        <h1 className="text-center text-red-700 font-sfpro text-5xl">
                            Timeline of Cricket
                        </h1>
                        <p className="mt-6 text-center text-black text-1xl px-8 font-inter">
                            Cricket, a beloved sport with a fascinating history, is believed to have originated during Saxon or Norman times in the Weald region of south-east England. According to experts, it may have been initially played by children living in the area's dense woodlands and clearings. The earliest known reference to cricket being played as an adult sport dates back to 1611 when a dictionary defined it as a game primarily enjoyed by boys. There is also a theory suggesting that cricket evolved from the game of bowls, with the intervention of a batsman attempting to prevent the ball from reaching its target by striking it away.
                        </p>

                    </Container>
                </div>
            </section>

            <CricketSectionTwo/>

            <section className="bg-white overflow-hidden py-12">
                <div className="flex justify-center">
                    <Container className="max-w-4xl text-center lg:text-left">
                        <p className="text-center text-black text-1xl px-8 font-inter">
                            The ICC World Cup is the pinnacle event of international cricket, held every four years. It brings together the best teams from across the globe to compete for the title of world champions. The tournament's format includes a group stage followed by knockout matches, creating suspense and excitement. With a rich history dating back to 1975, the ICC World Cup has produced unforgettable moments and intense rivalries. It attracts a massive global audience, with fans eagerly following matches through various media platforms. The World Cup serves as a cultural phenomenon, uniting cricket enthusiasts worldwide and providing a platform for nations to showcase their cricketing prowess on the world stage.
                        </p>
                        {/*<p className="py-5"></p>*/}
                        <img src="cricket.png" alt="Cricket" className="mx-auto my-8 w-256 h-128" />
                        <h1 className="text-center text-red-700 font-sfpro text-5xl">
                            What do I already know, and what did I learn?
                        </h1>
                        <p className="mt-6 text-center text-black text-1xl px-8 font-inter">
                            As someone who grew up in an environment of cricket, it's been my whole life. From watching it, to playing and even meeting players. But, like a lot of people, I don't know much about specific rules.
                        </p>
                        <p className="mt-6 text-center text-black text-1xl px-8 font-inter">
                            For example, catching the ball with one hand and then immediately dropping it is actually a catch. Normally, it would look like its a drop. But as long as 2 hands were on the ball while you catched it, its safe.
                        </p>
                        <p className="mt-6 text-center text-black text-1xl px-8 font-inter">
                            If the ball touches even the slightest of the wicket, it's an out. What's more interesting is that if the bat touches the wicket, it's also an out. This is why the batsman has to be very careful when swinging the bat.
                        </p>
                        <p className="mt-6 text-center text-black text-1xl px-8 font-inter">
                            In baseball, you would be required to run after you hit the ball. In cricket, its optional to run since you can hit the balls to boundaries that are worth 4 or 6 points. This is why cricket is a more strategic game than baseball.
                        </p>
                        <p className="mt-6 text-center text-black text-1xl px-8 font-inter">
                            Now, what I learned was that cricket is a very strategic game. It's not just about hitting the ball and running. It's about knowing when to hit the ball, where to hit the ball, and how to hit the ball. It's also about knowing when to run and when not to run. It's a very complex game that requires a lot of thinking and planning.
                        </p>


                    </Container>
                </div>
            </section>


            <Footer/>

        </div>
    );
}
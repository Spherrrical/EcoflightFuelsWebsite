import { Button } from './Button';
import Container from './Container';
import React from "react";

export const Footer = () => (
    <section className="bg-navy overflow-hidden py-12">
        <div className="flex justify-center">
            <Container className="max-w-4xl text-center lg:text-left">
                <h1 className="text-center text-white font-sfpro text-1xl">
                    Designed and Developed by Musa - <a className="text-turks font-sfpro" href="https://github.com/Spherrrical/projects.spherrrical.dev">Source Code</a>
                </h1>
            </Container>
        </div>
    </section>
);

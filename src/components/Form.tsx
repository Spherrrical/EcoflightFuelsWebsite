import React from 'react';
import { useNavigate } from "react-router-dom";
import {Button} from "./utils/Button";


export const Form = () => {
    const navigate = useNavigate();

    const navigateToWebsite = () => {
        navigate('/thankyou');
    };

    return (
        <div className="isolate bg-navy min-h-screen px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-sfpro tracking-tight text-oldWhite sm:text-4xl font-circularbold">
                    Ecoflight Flight Inquries
                </h2>
                <p className="mt-5 text-lg text-gray-100 font-inter">
                    Fill out the form below to contact us about our project, how we can help you, or any other questions you may have.
                </p>
                <p className="mt-5 text-xs text-green font-inter">
                    This form does not submit any real data. It is only a demonstration for the KCIA project. If you'd like to get in contact with one of the group members, please email us at <a className="text-lightOcean" href="mailto: musa@spherrrical.dev">here</a>.
                </p>
            </div>
            <form method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-slate-50 font-circularbook">
                            First Name
                        </label>
                        <div className="mt-2.5">
                            <input
                                required={true}
                                type="text"
                                name="firstName"
                                id="first-name"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-slate-50 font-circularbook">
                            Last Name
                        </label>
                        <div className="mt-2.5">
                            <input
                                required={true}
                                type="text"
                                name="lastName"
                                id="last-name"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-slate-50 font-circularbook">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-slate-50 font-circularbook">
                            Message
                        </label>
                        <div className="mt-2.5">
              <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
              />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <a target="_blank" rel="noopener noreferrer">
                        <Button onClick={navigateToWebsite} className="w-60 text-lightOcean bg-lightNavy hover:bg-darkNavy">
                            Contact us
                        </Button>
                    </a>
                </div>
            </form>
        </div>
    );
}


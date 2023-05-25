import {Button} from "./Button";

function GlobalPage() {
    return (
        <div>
            <div className="flex justify-center items-center h-screen bg-gray-700">
                <div className="flex flex-col items-center space-y-9">
                    <h1 className="text-center text-oldWhite text-3xl sm:text-4xl font-sfpro">
                        Welcome to Musa's projects menu page.
                    </h1>
                    <h2 className="text-center text-blue-400 text-1xl sm:text-2xl font-inter">
                        Select a project to view below!
                    </h2>
                    <a href="/ecoflightfuels" target="_blank" rel="noreferrer">
                        <Button className="w-60 text-inter text-lightOcean bg-slate-600 hover:bg-slate-500">
                            Ecoflight Fuels
                        </Button>
                    </a>
                    <a href="https://developop-website.vercel.app/" target="_blank" rel="noreferrer">
                        <Button className="w-60 text-inter text-lightOcean bg-slate-600 hover:bg-slate-500">
                            DeveloPop
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default GlobalPage;

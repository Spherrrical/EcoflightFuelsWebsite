import { Button } from './utils/Button';
import Container from './utils/Container';
import { useNavigate } from "react-router-dom";

export const ThankYou = () => {
    const navigate = useNavigate();

    const navigateToWebsite = () => {
        navigate('/ecoflightfuels');
    };

    return (
        <div>
            <div className="flex justify-center items-center h-screen bg-slate-800">
                <div className="flex flex-col items-center space-y-9">
                    <h1 className="text-center text-green text-3xl sm:text-4xl font-sfpro">
                        Thanks for reaching out to us!
                    </h1>
                    <h1 className="text-center text-lightOcean text-inter text-sm sm:text-base">
                        We'll get back to you as soon as possible.
                    </h1>
                    <Button
                        className="w-60 text-inter text-lightOcean bg-slate-600 hover:bg-slate-500"
                        onClick={navigateToWebsite}
                    >
                        Return to website
                    </Button>
                </div>
            </div>
        </div>
    );
};

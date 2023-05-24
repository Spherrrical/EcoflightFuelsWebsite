import "./global.css"
import logo from "./components/imgs/EcoflightLogo.svg"
import {CommunityImpact} from "./components/CommunityImpact";

function App() {
  return (
      <div>
          <div className="flex justify-center items-center h-screen bg-lightNavy">
              <div className="flex flex-col items-center space-y-9">
                  <img className="w-64 sm:w-96" src={logo} alt="Ecoflight Logo" />
                  <h1 className="text-center text-oldWhite text-6xl sm:text-8xl font-sfpro">
                      Sustainable Aviation Fuel
                  </h1>
                  <h2 className="text-center text-oldWhite text-1xl sm:text-2xl font-sfpro">
                      Developing a sustainable aviation future for the King County International Airport.
                  </h2>
              </div>
          </div>

          {/* Class Components will go here */}
            <CommunityImpact/>
      </div>
  );
}

export default App;

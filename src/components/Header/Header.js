import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import logo from '../../assets/images/favicon.png'
import { particlesData } from "../../common/data/particles";
import Filters from "./Filters";
import FormData from "./FormData";

const Header = (props) => {
    

   


    const particlesInit = async (main) => {
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };


    return <header className="header">
                <h1><img width="56" height="56" src={logo} alt="logo" /> Find and download the best high-quality photos</h1>

                <div className="header__container">
                    <FormData {...props} />
                    <Filters {...props} />
                </div>
                <Particles id="particles-here" init={particlesInit} options={particlesData} />
            </header>
}
export default Header;
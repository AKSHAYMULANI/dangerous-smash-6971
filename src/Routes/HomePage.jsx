import { Alertbar } from "../Components/Alert";
import { Footer } from "../Components/Footer";

import Navbar from "../Components/Navbar";
import TopSlider from "../Components/TopSlider";
import { Trusted } from "../Components/TrustedBudge";

function HomePage(){

    return (
        <div>
            <Alertbar />
            <Navbar />
            <TopSlider />
            <Trusted />
            <Footer />
        </div>
    )
}

export default HomePage
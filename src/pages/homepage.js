import Footercomp from "../components/footercomp";
import Headercomp from "../components/headercomp";
import Homecomp from "../components/homecomp";

import '../homepage.css';
import '../responsive.css';

const Homepage = () => {
    return (
        <>
        {<Headercomp/>}
        {<Homecomp/>}
        {<Footercomp/>}
        </>
    );
}

export default Homepage;
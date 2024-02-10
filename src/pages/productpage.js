import Footercomp from "../components/footercomp";
import Headercomp from "../components/headercomp";
import Productcomp from "../components/productcomp";
import '../productpage.css'



const Productpage = () => {
    return (
      <>
      {<Headercomp/>}
      {<Productcomp/>}
      {<Footercomp/>}
      </>
    );
}

export default Productpage;

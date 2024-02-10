import Headercomp from '../components/headercomp';
import Cartcomp from '../components/cartcomp';
import Footercomp from '../components/footercomp';
import '../cartpage.css'


const cartpage = () => {
  return (
    <>
      {<Headercomp/>}
      {<Cartcomp/>}
      {<Footercomp/>}
    </>
  );
}

export default cartpage;

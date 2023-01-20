import Navbar from '/components/navBar';
import Head from 'next/Head';
import Footer from '@/components/footer';

const Contact =() => {
    return ( 
        <div className = "main">
        <Head>
        <title>Contact </title>
    </Head>
        {/* main start here */}
      <div className = "contact">
        {/* main starts here */}  

      <div >
       <div>
       <h3>This is Contact page ok!</h3>
        <p>
          This is the best Contact page in the world with next js
        </p>
        <button className = "btn btn-info">Click</button>
       </div>
      </div>
       
      </div>
       {/* main ends here */}
    </div>
     );
}
 
export default Contact;
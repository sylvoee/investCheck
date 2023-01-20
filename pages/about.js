import Footer from '@/components/footer';
import Navbar from '@/components/navBar';
import Head from 'next/Head';



const About =() => {
    return ( 
        <div className = "main">
        <Head>
            <title>About</title>
        </Head>

        {/* main start here */}
      <div className = "about">
        {/* Row atarts here */}
        <div className = "row">
        <div className = "col-sm-4">Thsi is col 1</div>
        <div className = "col-sm-4">This is col 2</div>
        <div className = "col-sm-4">This is col-3</div>
        </div>
        {/* row ends here */}
      </div>
       {/* main ends here */}

    </div>
     );
}
 
export default About;
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Footer from "./footer";
import Navbar from "./navBar";
import 'bootstrap/dist/css/bootstrap.css' ;


const Layout = ({children}) => {
    return ( 
        <>
        <Head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{children.title}</title>
        </Head>

        <div className = "layout">
         <Navbar />
         {/* other components are render here */}
          {children}

         <Footer />
         
        </div>
        </>
     );
}
 
export default Layout;
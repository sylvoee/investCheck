import Footer from '@/components/footer';
import Navbar from '@/components/navBar';
import Head from 'next/head' ;

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className ="main container-fluid">
     <Head>
      <title>HOME</title>
     </Head>
       
       {/* main start here */}
      <div className = "home">
        {/* main starts here */}  

      <div >
       <div>
       <h3>This is home page ok!</h3>
        <p>
          This is the best home page in the world with next js
        </p>
        <button className = "btn btn-info">Click</button>
       </div>
      </div>
       
      </div>
       {/* main ends here */}
      
    </div>
  )
}

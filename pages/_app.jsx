import "./styles/style.css"
import { useEffect } from "react";
import './styles/global.css'
import './styles/responsive.css'
import '../components/header'
import Navbars from "../components/header";
import Head from "next/head";




const MyApp = ({ Component, pageProps, auth }) => {
    useEffect(() => {
      
    }, []); 
    return (
      <div>
        <Navbars/>
        <Component {...pageProps} />
        
       
      </div>
    )
  }
  export default MyApp
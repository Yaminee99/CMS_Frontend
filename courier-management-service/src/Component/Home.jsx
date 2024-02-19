
import { Container } from "react-bootstrap";
import CarouselsComp from "./CarouselsComp";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from "./NavigationBar";
import Footer from "./Footer";

export function Home() {
    return (
        <>
                <NavigationBar/>
                

                <CarouselsComp />
            
             
        </>

    );
}
export default Home;
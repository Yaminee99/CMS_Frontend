import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import image1 from "../Component/images/image1.jpg";
import image2 from "../Component/images/image2.jpg";  
import {Container} from "react-bootstrap";

export function CarouselsComp() {
  console.log("CarouselsComp rendering...");
  return (
    <Container className="mt-2">
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100 vh-100" src={image1} alt="First slide" />
        <Carousel.Caption>
          <Button className="btn" variant="danger"></Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 vh-100" src={image2} alt="Second slide" />
        <Carousel.Caption>
          <Button className="btn" variant="danger"></Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default CarouselsComp;

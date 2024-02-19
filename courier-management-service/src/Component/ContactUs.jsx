// import { Container } from "react-bootstrap";
// import { Header } from "./Header";

// const backgroundImageUrl = "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkwNC1udW5ueS0wMjFfMy5qcGc.jpg";

// export function ContactUs() {
//   const containerStyle = {
//     backgroundImage: `url(${backgroundImageUrl})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     minHeight: '100vh',
//   };
//   return (
//     <Container md={5} className="L-center w-25">
//       <br />
//       <br />
//       <br />
//       <Container className="mb-5">
//       <Header text="Contact Us" ></Header>
//       </Container>
//       <p>Raintree Marg, near Bharati Vidyapeeth, Sector 7, CBD Belapur, Navi Mumbai, Maharashtra 400614</p>
//       <p>Email: cdacsportsacademy@gmail.com</p>
//       <p>Phone: +91-22-27565303</p>
//       <br />
//       <br />
//       <br />
//     </Container>
//   );
// }

// export default ContactUs;

import {
  Row,
  Container,
  Col,
  Card,
  CardBody,
  FormControl,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import yaminee from "../Component/images/yaminee.jpg";
import suraj from "../Component/images/suraj.jpg";
import piyush from "../Component/images/piyush.jpg";
import omkar from "../Component/images/omkar.jpg";
import akash from "../Component/images/akash.jpg";
import { NavigationBar } from "./NavigationBar";

export function ContactUs() {
  return (
    <>
    <NavigationBar/>
      <Container className="mt-4">
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={yaminee} />
              <Card.Body>
                <Card.Title className="text-center">
                  Yaminee Kushwaha
                </Card.Title>
                <Card.Text></Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={suraj} />
              <Card.Body>
                <Card.Title className="text-center">Suraj Patil</Card.Title>
                <Card.Text></Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={piyush} />
              <Card.Body>
                <Card.Title className="text-center">Piyush Kolhe</Card.Title>
                <Card.Text></Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
       <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={omkar} />
              <Card.Body>
                <Card.Title className="text-center">
                  Omakr Kolhe
                </Card.Title>
                <Card.Text></Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={akash} />
              <Card.Body>
                <Card.Title className="text-center">
                  Akash Tomar
                </Card.Title>
                <Card.Text></Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col sm={{ span: 6, offset: 3 }} className="mt-4">
            <Card className="shadow p-4">
              <CardBody>
                <h4 className="mb-3">☎️Let Us Contact You</h4>

                <Form className="mb-3">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Enter Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your first Name"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Enter Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your Last Name"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Enter Mobile No</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter your Last Name"
                    />
                  </Form.Group>

                  <Form.Group className="mb-2">
                    <Form.Label>Your Comments</Form.Label>
                    <FormControl
                      as={"textarea"}
                      rows={6}
                      placeholder="write here"
                    />
                  </Form.Group>

                  <p className="text-center">✌️"We are here with you✌️"</p>
                </Form>

                <Container className="text-center">
                  <Button variant="success">Submit</Button>
                </Container>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

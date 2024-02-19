

import { Row, Col, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import mission from "../Component/images/mission.jpg";
import vision from "../Component/images/vision.jpg";
import network from "../Component/images/network.jpg";
import aboutus1 from "../Component/images/aboutus1.jpg";
import aboutus2 from "../Component/images/aboutus2.jpg";
import aboutus3 from "../Component/images/aboutus3.jpg";
import aboutus4 from "../Component/images/aboutus4.jpg";
import aboutus5 from "../Component/images/aboutus5.jpg";
import ourStory from "../Component/images/ourStory.jpg";
import { NavigationBar } from "./NavigationBar";

export function AboutUs() {
  return (
    <>
    <NavigationBar/>
      <Container className="mt-4">
        {/* <Alert variant="primary">
            Our Journey: Revolutionizing Courier Management </Alert>  */}
        <Card>
          {/* <Card.Img variant="top" src=/> */}
          <Card.Body>
            <Card.Title className="text-center">
              "Our Story"
            </Card.Title>
            <Card.Text className="text-justify">
              At CMS, our story began with a vision to redefine the landscape of
              courier services. We embarked on this journey fueled by a passion
              for efficiency, reliability, and a commitment to our customers.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>

      <Container className="mt-2">
        <Card>
          {/* <Card.Img variant="top" src=/> */}
          <Card.Body>
            <Row>
              <Col>
                <Card.Img variant="top" src={ourStory} />
              </Col>
              <Col>
                <Card.Title className="text-center">
                  "Our Journey: Revolutionizing Courier Management"
                </Card.Title>
                <Card.Text className="text-justify">
                  We are one of India’s leading integrated express logistics
                  provider, operating the largest physical network of customer
                  access points in the country. We offer a comprehensive range
                  of technology-enabled logistics solutions to serve a wide
                  spectrum of customers across diverse industry verticals. We
                  commenced operations in 1990 and were the first express
                  logistics company in India to implement a network of
                  entrepreneurs (Channel Partners) that operate CMS branded
                  Customer Access Points. Our Channel Partners support us in
                  building relationships, generating business and providing
                  services to customers. Today, the CMS brand has transformed
                  from a home-grown courier, express and parcel company to a
                  widely recognized express logistics player offering a wide
                  range of integrated delivery solutions to retail customers and
                  businesses. Our solutions range from traditional pick-up and
                  delivery to integrated warehousing and order fulfilment
                  allowing our customer optimise for time sensitivity and cost
                  effectiveness.
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>

      <Container className="mt-3">
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={aboutus1} />
            <Card.Body>
              <Card.Title className="text-center">
                "Humble Beginnings"
              </Card.Title>
              <Card.Text className="text-align">
                It all started in 2023 when a group of forward-thinkers noticed
                the inefficiencies plaguing traditional courier services. We saw
                the potential to transform this industry by harnessing
                technology and a customer-centric approach.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={aboutus2} />
            <Card.Body>
              <Card.Title className="text-center">
                "Innovation and Adaptability"
              </Card.Title>
              <Card.Text className="text-justify">
                From day one, innovation has been our cornerstone. We embraced
                cutting-edge technology to streamline operations, optimize
                routes, and enhance tracking capabilities. Our adaptability to
                market changes ensured that we stayed ahead, evolving alongside
                the ever-shifting demands of our customers.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img
              className="d-block w-40 vh-20"
              variant="top"
              src={aboutus3}
            />
            <Card.Body>
              <Card.Title className="text-center">
                "Building Trust, Delivering Excellence"
              </Card.Title>
              <Card.Text className="text-justify">
                Building trust has been our priority. We understood that each
                package we handle holds immense value, whether in monetary terms
                or sentimental significance. That's why our commitment to
                reliability and secure delivery has earned us the confidence of
                businesses and individuals alike.{" "}
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={aboutus4} />
            <Card.Body>
              <Card.Title className="text-center">
                "Customer-Centric Focus"
              </Card.Title>
              <Card.Text className="text-justify">
                Throughout our journey, our customers have been at the heart of
                everything we do. We listen, learn, and evolve based on their
                feedback. Our dedication to providing seamless, personalized
                experiences sets us apart..
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={aboutus5} />
            <Card.Body>
              <Card.Title className="text-center">
                "Forward, Together"
              </Card.Title>
              <Card.Text className="text-justify">
                As we look ahead, our journey continues, aiming higher and
                striving to exceed expectations. We envision a future where
                courier services are synonymous with efficiency, trust, and
                innovation.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>

      <Container className="mt-2">
        {/* <Alert variant="primary">
            Our Journey: Revolutionizing Courier Management </Alert>  */}
        <Card>
          {/* <Card.Img variant="top" src=/> */}
          <Card.Body>
            <Card.Title className="text-center">
              "Join Us on Our Journey"
            </Card.Title>
            <Card.Text className="text-justify">
              Join us as we continue to pave the way for a new era in courier
              management. Experience the difference with CMS, where every
              delivery is not just a package but a promise fulfilled.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>

      <Container className="mt-4">
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={mission} />
            <Card.Body>
              <Card.Title className="text-center">"Mission"</Card.Title>
              <Card.Text className="text-justify">
                Our mission at CMS is to provide unparalleled logistics
                solutions, delivering reliability, efficiency, and exceptional
                customer service. We strive to optimize global connectivity,
                leveraging innovative technology and a dedicated team to ensure
                swift, secure, and seamless delivery experiences. Committed to
                excellence and sustainability, we aim to exceed expectations
                while contributing positively to the communities we serve.
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
          </Card>

          <Card>
            <Card.Img variant="top" src={vision} />
            <Card.Body>
              <Card.Title className="text-center">"Vision"</Card.Title>
              <Card.Text className="text-justify">
                Our vision is to revolutionize the courier management industry
                by leveraging cutting-edge technology, automation, and a
                customer-first approach. We strive to create a seamless and
                reliable delivery ecosystem that exceeds expectations in speed,
                accuracy, and convenience. Through innovative solutions and a
                commitment to excellence, we aim to become the preferred and
                trusted choice for individuals and businesses alike, simplifying
                logistics while delivering unparalleled value and satisfaction
                to our customers.{" "}
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
          </Card>

          {/* <Card>
        <Card.Img variant="top" src={values} />
        <Card.Body>
          <Card.Title>Values</Card.Title>
          <Card.Text>
            
Commitment towards a sustainable future for societies and the environment,Focus on speed and agility to seize opportunity in a Volatile Uncertain Complicated Ambiguous (VUCA) world
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card> */}
        </CardGroup>
      </Container>

      <Container className="mt-4">
      <div>
        <img className="d-block w-100 vh-0" src={network} />
      </div>
      </Container>
    </>
  );
}

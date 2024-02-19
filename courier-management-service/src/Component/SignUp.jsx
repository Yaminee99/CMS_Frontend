import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "./Header";

const backgroundImageUrl = "";

export function SignUp() {
//   const navigate = useNavigate();
//   const containerStyle = {
    
//     backgroundImage: `url(${backgroundImageUrl})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     minHeight: '100vh', // Set a minimum height to cover the entire viewport
//   };

//   const [formData, setFormData] = useState({ email: "", address: "", password: "", phone: "", city: "" });
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const result = await saveUser(formData);
  //     setFormData({ email: "", address: "", password: "", phone: "", city: "" });
  //     setIsSubmitted(true);
  //     setTimeout(() => {
  //       setIsSubmitted(false);
  //     }, 1500);
  //     console.log(result.message);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//         const result = await saveUser(formData);
//         setFormData({
//             email: "",
//             address: "",
//             password: "",
//             phone: "",
//             city: ""
//         });
//         setIsSubmitted(true);
//         setTimeout(() => {
//             setIsSubmitted(false);
//             navigate("/Login");
//         }, 2000);
//         console.log(result.message);
//     } catch (error) {
//         console.log(error);
//     }
// };

  return (
    <Container  className="L-center w-25">
      <Row className="justify-content-md-center">
        <Header text="Sign Up"></Header>
        <Col lg={16}>
          <Form >
            <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
              <Form.Label>Email address:</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Address:</Form.Label>
              <Form.Control type="text" name="address" placeholder="Address" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone:</Form.Label>
              <Form.Control type="number" name="phone" placeholder="Phone" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>City:</Form.Label>
              <Form.Control type="text" name="city" placeholder="City"  />
            </Form.Group>
            <Button variant="primary" type="submit" className="mb-5 mx-auto d-block">
              Submit
            </Button>
          </Form>
          {/* <Row className="mt-3 mb-4">
                    <Col lg={4}>
                        {isSubmitted ? <Alert variant="success">Student Registered</Alert> : null}
                    </Col>
          </Row> */}
        </Col>
      </Row>
    </Container>
  );
}



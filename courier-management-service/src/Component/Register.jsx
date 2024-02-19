import { useState } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";
import { NavigationBar } from "./NavigationBar";


function Register() {
    const [errorMessage, setErrorMessage] = useState("");
    const [userData, setUserData] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        address: {
            line1: "",
            line2: "",
            pincode: "",
            city: "",
            state: ""
        }
    });

    function handleUserInput(event) {
        const { name, value } = event.target;
        const fieldNames = name.split(".");
        if (fieldNames.length === 2) {
            setUserData((prevData) => ({
                ...prevData,
                [fieldNames[0]]: {
                    ...prevData[fieldNames[0]],
                    [fieldNames[1]]: value
                }
            }));
        } else {
            setUserData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    }

    function register(event) {
        event.preventDefault();
        axios.post('http://localhost:8092/register', userData)
            .then((response) => {
                console.log(response);
                console.log(response.data);
                if (response.data.status) {
                    sessionStorage.setItem('customerId', response.data.customerId);
                    window.location.href = '/'; // Redirect using window.location
                } else {
                    setErrorMessage(response.data.messageIfAny);
                }
            })
            .catch((error) => {
                // Handle errors
                console.error("Registration error: ", error);
                if (error.response && error.response.status === 400) {
                    // Check specific error message
                    const { messageIfAny } = error.response.data;
                    if (messageIfAny === 'User already registered!') {
                        setErrorMessage("This email is already registered.");
                    } else {
                        setErrorMessage("Registration failed. Please try again.");
                    }
                } else {
                    setErrorMessage("Error occurred during registration.");
                }
            });
    }

    return (
        <>
        <NavigationBar/>
        <Container className="mt-4">
        <Row>
            <Col>
            <div style={{  justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div>
                {errorMessage && <h1>{errorMessage}</h1>}
                <form onSubmit={register}>
                    
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" name="fname" className="form-control" onChange={handleUserInput} />
                    </div>
                    
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" name="lname" className="form-control" onChange={handleUserInput} />
                    </div>

                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" name="email" className="form-control" onChange={handleUserInput} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" className="form-control" onChange={handleUserInput} />
                    </div>

                    <div className="form-group">
                        <label>Address line1</label>
                        <input type="text" name="line1" className="form-control" onChange={handleUserInput}/>
                    </div>

                    <div className="form-group">
                        <label>Address line2</label>
                        <input type="text" name="line2" className="form-control" onChange={handleUserInput} />
                    </div>

                    <div className="form-group">
                        <label>Pincode</label>
                        <input type="number" name="address.pincode" className="form-control" onChange={handleUserInput} />
                    </div>

                    <div className="form-group">
                        <label>City</label>
                        <input type="text" name="address.city" className="form-control" onChange={handleUserInput} />
                    </div>

                    <div className="form-group">
                        <label>State</label>
                        <input type="text" name="address.state" className="form-control" onChange={handleUserInput} />
                    </div>

                    <div className="text-center">
                    <button className="btn btn-primary mt-2">Signup</button>
                    </div>

                </form>
            </div>
        </div>
        </Col>
        <Col></Col>
        </Row>
        </Container>
        </>
    );
}

export default Register;

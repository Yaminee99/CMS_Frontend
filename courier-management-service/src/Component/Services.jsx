import React from 'react';
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "./Header";
import { useState } from "react";
import  axios  from 'axios';
import { NavBars } from './NavBars';



export function Services(){
    const [formData, setFormData] = useState(
        {packageEntity:""},{
        senderName: "", senderAddress: "", senderPincode: "", senderMobileNo: "", senderEmailId: "", senderCity: "", senderState: "",
        receiverName: "", receiverAddress: "", receiverPincode: "", receiverMobileNo: "", receiverEmailId: "", receiverCity: "", receiverState: "",
       
    });
     const [isSubmitted,setIsSubmitted]=useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    
    //  const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     console.log(formData);
    //     let url = 'http://localhost:9995/user/create';
    //     axios.post(url,formData).then((response) => {
    //         alert('Parcel added!!!')
    //         console.log(response.data);
    //     })
        
    //  }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        let url = 'http://localhost:9995/user/create';
        
        try {
            const response = await axios.post(url, formData);
            alert('Parcel added!!!');
            console.log(response.data);
        } catch (error) {
            console.error('Error adding parcel:', error);
        }
    };
    

    return (
        <>
        <NavBars/>
        <Container>
            <Header text="Sender's Details"></Header>

            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" name="senderName" onKeyUp={handleChange} required/>
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter address" name="senderAddress" onKeyUp={handleChange} required/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Pincode</Form.Label>
                            <Form.Control type="text" placeholder="Enter Pincode" name="senderPincode" onKeyUp={handleChange} required/>
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Mobile no</Form.Label>
                            <Form.Control type="text" placeholder="Enter Moblie no" name="senderMobileNo" onKeyUp={handleChange} required />
                        </Form.Group>
                    </Col>

                </Row>

                <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email-id</Form.Label>
                            <Form.Control type="text" placeholder="Enter Email-id" name="senderEmailId" onKeyUp={handleChange} required/>
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="Enter City" name="senderCity" onKeyUp={handleChange} required />
                        </Form.Group>
                    </Col>

                </Row>
                <Row>
                    <Col lg={3}>
                        <Form.Group className="mb-3">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="Enter State" name="senderState" onKeyUp={handleChange} required />
                        </Form.Group>
                    </Col>

                </Row>


                <Header text="Receiver's Details"></Header>
                <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" name="receiverName" onKeyUp={handleChange} required/>
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter address" name="receiverAddress" onKeyUp={handleChange} required />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Pincode</Form.Label>
                            <Form.Control type="text" placeholder="Enter Pincode" name="receiverPincode" onKeyUp={handleChange} required/>
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Mobile no</Form.Label>
                            <Form.Control type="text" placeholder="Enter Moblie no" name="receiverMobileNo" onKeyUp={handleChange} required/>
                        </Form.Group>
                    </Col>

                </Row>

                <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email-id</Form.Label>
                            <Form.Control type="text" placeholder="Enter Email-id" name="receiverEmailId" onKeyUp={handleChange} required />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="Enter City" name="receiverCity" onKeyUp={handleChange} required/>
                        </Form.Group>
                    </Col>

                </Row>
                <Row>
                    <Col lg={3}>
                        <Form.Group className="mb-3">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="Enter State" name="receiverState" onKeyUp={handleChange} required/>
                        </Form.Group>
                    </Col>

                </Row>




                <Row>
                    <Col lg={3}>
                        <Button variant="primary" type="submit">Add</Button>
                        
                    </Col>

                </Row>
            </Form>
            { <Row className="mt-3">
                    <Col lg={4}>
                        {isSubmitted?<Alert variant="success">Details Inserted</Alert>:null}
                    </Col>
                </Row> }
        </Container>
        </>
        
    );
}
export default Services;
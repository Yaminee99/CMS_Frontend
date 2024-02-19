import React, { useEffect } from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "./Header";
import { useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import { saveStudent } from "../services/StudentService";


export function CourierUpdateDetails() {
    const params = useParams()
    const [formData, setFormData] = useState({
        senderName: "", senderAddress: "", senderPincode: "", senderMobileNo: "", senderEmailId: "", senderCity: "", senderState: "",
        receiverName: "", receiverAddress: "", receiverPincode: "", receiverMobileNo: "", receiverEmailId: "", receiverCity: "", receiverState: "",
        courierStatus: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
        }, 1500);
        try {
            setTimeout(() => {
                const result = updateCourierDetails(formData, params.courierId);
                console.log(result);
                // navigate('/CourierDetailsList')
            }, 1500);
        }
        catch (error) {
            console.log(error);
        }
    };

    async function updateCourierDetails(updateData, courierId) {
        try {
            console.log(updateData)
            const response = await axios.put(`http://localhost:8092/updateCourierDetails`, updateData)
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }



    const populateCourierState = async () => {
        try {
            const result = await FetchCourierById(params.courierId);
            setFormData(result);
            console.log("result", result)

        } catch (error) {
            console.log(error);
        }
    }

    async function FetchCourierById(courierId) {
        try {
            const response = await axios.get(`http://localhost:8092/fetchCourierDetails/${courierId}`)

            return response.data;
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        populateCourierState();
    }, [])

    return (
        <Container>

            <Form onSubmit={handleSubmit}>
                <Header text="Parcel Details"></Header>
                <Row>
                    <Col lg={3}>
                        <Form.Group className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Select
                                value={formData.courierStatus}
                                name="courierStatus"
                                onChange={handleChange}
                            >
                                <option value="">Select Status</option>
                                <option value="Pending">Pending</option>
                                <option value="Booked">Booked</option>
                                <option value="In Transit">In Transit</option>
                                <option value="Delivered">Delivered</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>

                </Row>

                <Row>
                    <Col lg={3}>
                        <Button variant="primary" type="submit">Register</Button>
                    </Col>

                </Row>
            </Form>

        </Container>
    );
}
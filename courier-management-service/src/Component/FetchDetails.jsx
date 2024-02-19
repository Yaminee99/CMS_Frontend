import React, { useEffect, useState } from 'react';
import { Container } from "react-bootstrap";
import axios from 'axios';
import { NavBars } from './NavBars';

export function FetchDetails() {
    const [formData, setFormData] = useState({
        senderName: "", senderAddress: "", senderPincode: "", senderMobileNumber: "", senderEmailId: "", senderCity: "", senderState: "",
        receiverName: "", receiverAddress: "", receiverPincode: "", receiverMobileNumber: "", receiverEmailId: "", receiverCity: "", receiverState: "",
        courierStatus: "Pending"
    });

    const id = sessionStorage.getItem("fetchId");

    useEffect(() => {
        fetchPackageDetails(id);
    }, []);

    async function fetchPackageDetails(id) {
        try {
            const response = await axios.post(`http://localhost:9995/user/details/${id}`);
            console.log("Fetched data:", response.data);

            // Set retrieved data in formData state
            setFormData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <NavBars />
            <Container>
                <h1>Details</h1>
                {/* Display data from formData */}
                <div>
                    <h2>Sender's Details</h2>
                    <p>Name: {formData.senderName}</p>
                    <p>Address: {formData.senderAddress}</p>
                    <p>Pincode: {formData.senderPincode}</p>
                    <p>Mobile No: {formData.senderMobileNumber}</p>
                    <p>Email Id: {formData.senderEmailId}</p>
                    <p>City: {formData.senderCity}</p>
                    <p>State: {formData.senderState}</p>
                </div>
                <div>
                    <h2>Receiver's Details</h2>
                    <p>Name: {formData.receiverName}</p>
                    <p>Address: {formData.receiverAddress}</p>
                    <p>Pincode: {formData.receiverPincode}</p>
                    <p>Mobile No: {formData.receiverMobileNumber}</p>
                    <p>Email Id: {formData.receiverEmailId}</p>
                    <p>City: {formData.receiverCity}</p>
                    <p>State: {formData.receiverState}</p>
                </div>
            </Container>
        </>
    );
}

export default FetchDetails;

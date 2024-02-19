import { useEffect, useState } from "react";
import {  Button, Container,Table } from "react-bootstrap";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { AlertComp } from "./AlertComp";
import { NavBars } from "./NavBars";


export function CourierDetailsList() {
  const navigate = useNavigate();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    populateCourierState();
  }, []);

  const handleDeleteClick=async(courierId)=>{
    try{
        await deleteCourierDetails(courierId); 
        populateCourierState();
    } catch(error){
        console.log(error);
    }
}

async function deleteCourierDetails(courierId) {
  try {
    const response = await axios.delete(`http://localhost:8092/deleteCourierDetails/${courierId}`);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}



  async function populateCourierState() {
    try {
      const data = await fetchCourierDetails();
      // setDetails(data.CourierInfo);
      // console.log(data.CourierInfo); // Log the customers array from the fetched data
    } catch (error) {
      console.log(error);
    }
  }



  async function fetchCourierDetails() {
    try {
      const response = await axios.get("http://localhost:8092/fetchAllCourierDetails");
      console.log(response.data);
      setDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
     <NavBars/>

     <Container>
      <div>
        {details && details.length !== 0 ? (
          <Table responsive="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>CourierId</th>
                <th>SenderName</th>
                <th>ReceiverName</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {
              details.map((det, index) => (
              
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{det.courierId}</td>
                <td>{det.senderName}</td>
                 <td>{det.receiverName}</td>
                <td>{det.courierStatus}</td> 
                { <td><Button variant="danger" id="btn" onClick={()=>{
                                            handleDeleteClick(det.courierId);
                                        }}>Delete</Button> &#160;
                                            { <Button id="btn" onClick={()=>{
                                                // Navigate(/edit);
                                                navigate(`/edit/${det.courierId}`);
                                            }}>Update</Button> }
                                        </td> }
              </tr>
              
              ))}
            </tbody>
          </Table>
        ) : (
          <AlertComp text="Oh snap! Data not found..!"></AlertComp>
          // <p>No Details Found...!</p>
        )}
      </div>
    </Container>
    </>
   
  );
}
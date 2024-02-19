import { useEffect, useState } from "react";
import {  Button, Container,Table } from "react-bootstrap";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { AlertComp } from "./AlertComp";
import { NavBars } from "./NavBars";


export function PackageList() {
  
  const [details, setDetails] = useState([]);

  useEffect(() => {
    populateCourierState();
  }, []);

  const handleDeleteClick=async(id)=>{
    try{
        await deleteCourierDetails(id); 
        populateCourierState();
    } catch(error){
        console.log(error);
    }
}

const handleDetailsClick=async(id)=>{
    try{
        await fetchPackageDetails(id); 
        // populateCourierState();
    } catch(error){
        console.log(error);
    }
}



async function deleteCourierDetails(id) {
  try {
    const response = await axios.get(`http://localhost:9995/user/delete/${id}`);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

async function fetchPackageDetails(id) {
    console.log("Yaminee : " + id);
    sessionStorage.setItem("fetchId",id);
    const packId = sessionStorage.getItem("fetchId");
    // navigate(`/FetchDetails/${packId}`);
  //  navigate(`/FetchDetails/${packId}`);
    try {
      const response = await axios.post(`http://localhost:9995/user/details/${id}`);
      console.log("----------");
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
      const response = await axios.post("http://localhost:9995/admin/packages");
      console.log(response.data);
    //   sessionStorage.setItem("packageId",response.data.id);
    //   const packId = sessionStorage.getItem("packageId");
    //  console.log("Vikrant"+packId);

      setDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const navigate = useNavigate();

  const fetch = () => {
    navigate("/FetchDetails");
  };



  return (
    <>
     <NavBars/>

     <Container>
      <div>
        <h1>Hello</h1>
        
          <Table responsive="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Index</th>
                <th>Tracking Number</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {
              details.map((det, index) => (
              
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{det.index}</td>
                <td>{det.trackingNumber}</td>
                <td>{det.status}</td> 
                    {/* navigate(`/edit/${det.courierId}`); */}
                {/* <td>
                      
                        <Button variant="success" onClick={() => handleDetailsClick(det.id)}>Details</Button>
                        
                </td> */}
                <td>
                    <Button variant="success" onClick={() => {
                        handleDetailsClick(det.id);
                        navigate('/FetchDetails');
                    }}>Details</Button>
              </td>
                <td>
                        {/* <Button variant="success" onClick={() => navigate(`/FetchDetails/${det.id}`) }>Details</Button> */}
                        {/* <Button variant="success" onClick={() => navigate(`/FetchDetails`) }>Details</Button> */}
                        
                </td>
                

                <td>
                        <Button variant="danger" onClick={() => handleDeleteClick(det.id)}>Delete</Button>
                        
                </td>
                
              </tr>
              
              ))}
            </tbody>
          </Table>
        
      </div>
    </Container>
    </>
   
  );
}
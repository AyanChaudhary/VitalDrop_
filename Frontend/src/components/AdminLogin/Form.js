import React from 'react';
import IMG from "./loginperson.jpg"
import "./Form.css"
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import {NavLink} from "react-router-dom"

function Form() {
  return (
    <MDBContainer fluid className="p-3 my-5 custom" style={{padding: "3rem 3rem"}}>

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src={IMG} class="img-fluid" alt="Phone image" style={{width: "100%", padding: "2rem"}}/>
        </MDBCol>

        <MDBCol col='4' md='6' style={{padding: "2rem"}}>

        <MDBInput wrapperClass='mb-4' label='Name' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>


          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>
          <NavLink to="/adminlogin/adminuser" style={{color: "black"}}>
          <MDBBtn className="mb-4 w-100" size="lg">Log in</MDBBtn>
          </NavLink>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>

          <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
            Signup
          </MDBBtn>

          

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Form;
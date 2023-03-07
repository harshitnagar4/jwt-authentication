import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';






function Signup() {
    const navigate = useNavigate()
    const[formData,setFormData]=useState({firstname:"",lastname:"",email:"",password:""});
    const[formValid,setFormValid]=useState({});
    const [apiStatus,setApiStatus]=useState("")
    const changeInputHandler = (e)=>{
        const{name,value}=e.target;
       setFormData({...formData,[name]:value})
       }
       
       console.log(formData,'formData')

       const apiFuncHandler =  async()=>{
        let url = 'http://localhost:4000/signup';
        let fetchURl = await fetch(url,{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
            },body:JSON.stringify(formData)
        });
        setApiStatus(fetchURl.status);
        let fetchUrlData = await fetchURl.json();
        setFormValid(fetchUrlData);
    }

useEffect(()=>{
if(apiStatus===201){
    navigate('/login')
}
},[apiStatus])
  return (
    <MDBContainer fluid className='p-4'>

      <MDBRow className='justify-content-center'>

        <MDBCol md='8' className='text-center text-md-start d-flex flex-column justify-content-center' style={{width:'50%'}}>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            The best offer <br />
            <span className="text-primary">for your business</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>

        </MDBCol>

        <MDBCol md='4'>

          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>

              <MDBRow>
              {apiStatus===400 && <span className='text-danger'>{formValid.firstname}</span>}
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Firstname' id='form1' type='text' name="firstname" onChange={changeInputHandler} value={formData.firstname}/>
                </MDBCol>
                {apiStatus===400 && <span className='text-danger'>{formValid.lastname}</span>}
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text' name="lastname" onChange={changeInputHandler} value={formData.lastname}/>
                </MDBCol>
              </MDBRow>
              {apiStatus===400 && <span className='text-danger'>{formValid.email}</span>}
              <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' name="email" onChange={changeInputHandler} value={formData.email}/>
             {apiStatus===400 &&  <span className='text-danger'>{formValid.password}</span>}
              <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' name="password" onChange={changeInputHandler} value={formData.password}/>
   

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='w-100 mb-4' size='md' onClick={apiFuncHandler} >sign up</MDBBtn>

              <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Signup;
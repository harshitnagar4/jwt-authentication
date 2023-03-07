import React, { useEffect, useState } from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';


function Login() {
  const[formValue,setFormValue] = useState({email:"" , password:""});
  const[apiStatus,setApiStatus] = useState('');
  const[fetchData,setFetchData] = useState([]);
  const[loginValid,setLoginValid] = useState({email:"",password:""})
  const valueHandler = (e)=>{
 const{name,value}=e.target;
 setFormValue({...formValue,[name]:value})
  }
  const logInApiHandler = async ()=>{
   const{email,password}=formValue
   if(!email){
 setLoginValid((p)=>{ return {...p,['email']:"email is Required"}})
   }
    else if (!password){
      setLoginValid((p)=>{ return {...p,['password']:"password is required"}})
    }
    else{
      const url = 'http://localhost://4000/login';
      const fetchUrl = await fetch(url,{
        method:'POST'
      });
      if(fetchUrl.status===201){
        setApiStatus(201)
      }
      const fetchData = await fetchUrl.json();
 console.log(fetchData,'fetchData')
    }
  }
  console.log(formValue,'formValue')

  useEffect(()=>{
   
    if(apiStatus===201){
      navigate('/dashboard')
    }
    
  },[apiStatus])
const navigate = useNavigate();

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
  
      <MDBRow style={{justifyContent: 'space-around'}}>

        <MDBCol col='8' md='4'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='8' md='4'>

          <div className="d-flex flex-row align-items-center justify-content-center">

            <p className="lead fw-normal mb-0 me-3">Sign in with</p>

            <MDBBtn floating size='md' tag='a' className='me-2'>
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>

            <MDBBtn floating size='md' tag='a'  className='me-2'>
              <MDBIcon fab icon='twitter' />
            </MDBBtn>

            <MDBBtn floating size='md' tag='a'  className='me-2'>
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>

          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0 w-100">Or</p>
          </div>
          <h6 className=' text-center text-danger'>{apiStatus === 404 && fetchData[0]}</h6>
          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" name="email" onChange={valueHandler}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"  name="password"onChange={valueHandler}/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg' onClick={logInApiHandler}>Login</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger" onClick={()=>{ navigate('/')}}>Register</a></p>
          </div>

        </MDBCol>

      </MDBRow>


    </MDBContainer>
  );
}

export default Login;
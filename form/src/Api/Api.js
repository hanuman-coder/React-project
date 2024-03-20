
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';



 

function Api() {

  const [success, setSuccess] = useState('')
  const[userData,setUserData] = useState([]);

  const submitHandler =(e) => {
    e.preventDefault();
   setSuccess('');


  validateForm(e.target.name,'Please enter your name' );
  validateForm(e.target.email,'Please enter your email' );
  validateForm(e.target.mobile_number,'Please enter your mobile number');
  validateForm(e.target.password ,'Please enter your password');
  

if(e.target.name.value != '' && e.target.email.value != '' && e.target.mobile_number.value != '' && e.target.password.value != ''){
      var data={
        user_name: e.target.name.value,
        user_email: e.target.email.value,
        user_number: e.target.mobile_number.value,
        user_password: e.target.password.value,
      }

  // setUserData([...userData,data]);
  // setSuccess('Data Added Successfully !!');

  // e.target.reset();

    }
    
}

const validateForm =(input,message ) => {
  if(input.value == ''){
    input.nextSibling.innerText = message;
  }else{
    input.nextSibling.innerText ='';
  }

}

const [u_api,setApi] = useState([]);

const getData = async() => {
    const response = await fetch (`https://dummyjson.com/users`);
    const usrData = await response.json();
    setApi(usrData.users);
}

useEffect (
    () =>
    {
        getData();
    },

    []
)


  return (
    <Container className="mt-2">
      <Row>
        <Col className='text-center text-success'>{success}</Col>
      </Row> 

      <Row>
        <Col className='text-center text-danger'></Col>
      </Row>

      <Row>
        <Col> 

           <Form onSubmit={submitHandler}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter Your Name" />
        <Form.Text className="text-danger">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
        <Form.Text className="text-danger">
        </Form.Text>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="Number" name="mobile_number"placeholder="Enter Mobile Number" />
        <Form.Text className="text-danger">
       
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  name="password"placeholder="Password" />
        <Form.Text className="text-danger">
       
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">Submit</Button>
   
          </Form>
      </Col>

      </Row>


      <Col className="mt-2">    
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sr.No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Password</th>
          
        </tr>
      </thead>
      <tbody>
        {
          u_api.map((v,i) => {
          return  <tr key={i}> 
                        <td>{i+1}</td>
                        <td>{v.firstname + v.lastname}</td>
                        <td>{v.email}</td>
                        <td>{v.phone}</td>
                        <td>{v.password}</td>
                  </tr>
          

          })
        }
  
          

  
      </tbody>
    </Table>
  </Col>

    </Container>



  );
}

export default Api;

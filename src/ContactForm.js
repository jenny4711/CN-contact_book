import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch,useSelector } from 'react-redux';


const ContactForm = () => {
  const [name,setName]=useState('')
  const [phoneNum,setPhoneNum]=useState(0)
  const dispatch=useDispatch()
 
  const addContact=(evt)=>{
   evt.preventDefault()
   dispatch({type:'ADD_CONTACT',payload:{name,phoneNum} })
   dispatch({type:'remove'})
  }


  return (
    <div> 
    <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={(evt)=>setName(evt.target.value)}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>전화번호</Form.Label>
        <Form.Control type="number" placeholder="Phone Number" onChange={(evt)=>setPhoneNum(evt.target.value)}/>
      </Form.Group>
      
      <Button  variant="primary" type="submit">
        ADD
      </Button>
    </Form>
 <div>

 
 </div>



    </div>
  )
}

export default ContactForm
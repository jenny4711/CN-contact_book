import React,{useState,useEffect} from 'react'
import ContactItem from './ContactItem'
import Search from './Search'
import { useDispatch,useSelector } from 'react-redux';
import './App.css';

const ContactList = () => {
  const {contactList , result} = useSelector((state)=>state)
  
const getResult=()=>{
  if(result.length >0){
    return result.map((item)=>(<h1 ><ContactItem item={item}/></h1>))
  }else{
    return contactList.map((item)=>(<h2 ><ContactItem item={item}/></h2>))
  }
}

console.log(result)




  return (
    <div key={result}>
      <Search/>
      <h4>Num:{contactList.length}</h4>
  {result.length>0?result.map((item)=>(<h1 ><ContactItem item={item}/></h1>)):contactList .map((item)=>(<h1 ><ContactItem item={item}/></h1>))}
    </div>
    
  )
}

export default ContactList


// {contactList.map((item)=>(<ContactItem item={item}/>))}
    
// {result.map((item)=>(<ContactItem item={item}/>))}

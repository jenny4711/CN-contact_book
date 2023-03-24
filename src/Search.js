import React,{useState} from 'react'
import { Row,Col,Form,Button } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
const Search = () => {
  const [search,setSearch]=useState("")

  const contactList = useSelector(state=>state.contactList)
  const dispatch=useDispatch()
 const searching=(evt)=>{
  evt.preventDefault()
 
  setSearch(evt.target.value)
 
 }

 const findByName=(evt)=>{
  evt.preventDefault()
 dispatch({type:'SEARCH',payload:{search}})

  // const result=contactList.filter((item)=>item.name.includes(search))
  
 }
 

  return (
    <Row>
      <Col lg={10}>
      <Form.Control type="text" placeholder="이름을 입력해주세요" onChange={searching}/>
        
      </Col>
      <Col lg={2}>
      <Button onClick={findByName}>찾기</Button>
      </Col>
    </Row>
  )
}

export default Search
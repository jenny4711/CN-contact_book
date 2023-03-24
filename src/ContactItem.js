import React from 'react'
import { Row,Col,Form,Button } from 'react-bootstrap'


const ContactItem = ({item}) => {
  const {name,phoneNum}=item
 
  return (
    <Row>
      <Col lg={2}>
      <img width={50} src="https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"/>
      </Col>
      <Col lg={10}>
      <div>{name}</div>
      <div>{phoneNum}</div>
      </Col>
    </Row>
  )
}

export default ContactItem
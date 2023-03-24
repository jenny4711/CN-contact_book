import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container,Col,Row } from 'react-bootstrap';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
// 1.왼쪽에는 연락처등록하는  폼이,오른쪽에는 연락처 리스트와 search창이 있다.
// 2.리스트에 유저 이름과 전화번호를 추가할수 있다.
// 3.리스트에 아이템이 몇개있는지 보인다 
// 4.사용자가 유저를 이름검색으로 찾을수 있다. 
function App() {
  return (
    <div className="App">
      
      <h1 className='App-title'>연락처</h1>
      <Container>
        <Row>
      <Col ><ContactForm/></Col>
      <Col ><ContactList/></Col>
      </Row>
      </Container>
      
    </div>
  );
}

export default App;

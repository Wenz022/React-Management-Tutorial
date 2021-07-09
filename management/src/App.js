import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';

const Customers = [
  {
    'id':1,
    'image':'https://placeimg.com/64/64/1',
    'name' : '홍길일',
    'birthday' : '961222',
    'gender':'남자',
    'job': '학생'
  },
  {
    'id':2,
    'image':'https://placeimg.com/64/64/2',
    'name' : '홍길이',
    'birthday' : '971222',
    'gender':'남자',
    'job': '작가'
  },
  {
    'id':3,
    'image':'https://placeimg.com/64/64/3',
    'name' : '홍길삼',
    'birthday' : '981222',
    'gender':'여자',
    'job': '프로그래머'
  }
]

class App extends Component {
  render() {
     return(
      <div>
        {
          Customers.map( c => {
            return (
              <Customer 
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
     )
  }
}

export default App;

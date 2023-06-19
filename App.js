import React, { Component } from 'react';
import './App.css';

const data = [
	{ id: 1, title: 'wiadomosc numer 1', body: 'zawartosc wiadomosci nr 1...' },
	{ id: 2, title: 'wiadomosc numer 2', body: 'zawartosc wiadomosci nr 2...' },
];

setInterval(()=>{
  const index = data.length + 1;
  data.push({
    id:index,
    title:`wiadomosc numer ${index}`, 
    body: `zawartosc wiadomosci nr ${index}...` ,
    
  })
  console.log(data)
},5000)

class App extends Component {
  state ={
    comments:[...data]
  }

  getData = () =>{
    if(this.state.comments.length !== data.length){
          this.setState({
      comments: [...data]
    })
    }else{
      console.log('dane takie same')
    }

  }

  componentDidMount(){
    this.idI=setInterval(this.getData,2000)
  }

  componentWillUnmount(){
    clearInterval(this.idI)
  }


	render() {
    const comments = this.state.comments.map(comment => (
    <div key={comment.id}>
      <h4>{comment.title}</h4>
      <div>{comment.body}</div>
    </div>
    ))
		return <div className='App'>{comments.reverse()}</div>;
	}
}

export default App;

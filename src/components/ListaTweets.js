import React from 'react';
import ReactDOM from 'react-dom';
import '../css/tweet.css'
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Col from 'react-bootstrap/Col'
import axios from "axios";
import ImgUser from "../assets/avatar.jpg"


class ListaTweets extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        data: []
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    GetListaTweets = async () =>{
      try{
        const url = 'https://fakestoreapi.com/users';
        const res = await axios.get(url);

        this.setState({data: res.data})
        return res
      }

      catch(e) {
        console.log(e)
      }
    }
    
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit = async (event)=> {
      this.GetListaTweets()
      this.getListaTweets(this.state.data)
      console.log("ok")
      event.preventDefault();
    }

    getListaTweets(lista){
      return lista.map((tweet, i)=>{  
        return(
          <div className='TweetArea' height='5px'>
            <div className='TweetArea-imagem'>
              <img src={ImgUser} alt='' width='54px'></img>
            </div>
            <div className='TweetArea-TweetPost'>
              <div className='TweetArea-Identificação'>
                <span className='user'>{tweet.name.firstname}</span>
                <span className='userName'>@{tweet.username}</span>
              </div>
              <div className='TweetArea-tweet'>
                <span className='tweet'>{tweet.phone}</span>
              </div>        
            </div>
          </div>
        )
      });
    }
   
    render() {
      return (
        <Col>
        <form onSubmit={this.handleSubmit}>
          <button type="submit" value="Atualizar" active className='TextArea-btn'>Listar Tweets</button>
        </form>
          <form>{this.getListaTweets(this.state.data)}</form>
        </Col>
      );
    }
  }
  ReactDOM.render(
    <ListaTweets key=""/>,
    document.getElementById('root')
  );

  export default ListaTweets;
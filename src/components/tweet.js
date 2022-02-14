import React from 'react';
import ReactDOM from 'react-dom';
import ImgUser from '../assets/avatar.jpg'
import '../css/tweet.css'
import Form from 'react-bootstrap/Form'
import button from 'react-bootstrap/Button'
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        tweets: []
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      this.state.tweets.push({tweet: this.state.value, user: 'Fulano', username: '@fulanodetal'})
      this.setState({tweets: this.state.tweets});
      console.log(this.state)
          
      event.preventDefault();
    }
      
    getListaTweets(lista){
      return lista.map((tweets, i)=>{
        return(
          <div className='TweetArea'>
            <div className='TweetArea-imagem'>
              <img src={ImgUser} alt='' width='54px'></img>
            </div>
            <div className='TweetArea-TweetPost'>
              <div className='TweetArea-Identificação'>
                <span className='user'>{tweets.user}</span>
                <span className='userName'>{tweets.username}</span>
              </div>
              <div className='TweetArea-tweet'>
                <span className='tweet'>{tweets.tweet}</span>
              </div>        
            </div>
          </div>
        )
      })
    }
    
  
    render() {
      return (
        <Container>
          <Col></Col>
          <Col>
            <Row>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label><img src={ImgUser} alt='' width='54px'></img></Form.Label>
                  <Form.Control placeholder='O que está acontecendo...' as="textarea" rows={3} value={this.state.value} onChange={this.handleChange}/>
                </Form.Group>
                <div className='div-btn'>
                  <button type="submit" value="Tweetar" active className='TextArea-btn'>Tweetar</button>
                </div>
              </Form>
            </Row>
            <Col>
              <span>{this.getListaTweets(this.state.tweets)}</span>
            </Col>   
          </Col>
          <Col></Col>
        </Container>
      );
    }
  }
  ReactDOM.render(
    <EssayForm key=""/>,
    document.getElementById('root')
  );

  export default EssayForm;
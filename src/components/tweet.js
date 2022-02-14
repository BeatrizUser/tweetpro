import React from 'react';
import ReactDOM from 'react-dom';
import ImgUser from '../assets/avatar.jpg'
import '../css/tweet.css'
import Form from 'react-bootstrap/Form'
import  'bootstrap/dist/css/bootstrap.min.css' ;


class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Escreva algo...',
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
        <div>

        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>



          <form onSubmit={this.handleSubmit}>
            <label>
              <img src={ImgUser} alt='' width='54px'></img>
              <textarea value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Tweetar" />
          </form>
          <div>
          <span>{this.getListaTweets(this.state.tweets)}</span>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(
    <EssayForm />,
    document.getElementById('root')
  );

  export default EssayForm;
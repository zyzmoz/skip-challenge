import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Form, Header, Message, Segment } from 'semantic-ui-react';
import * as authProvider from '../providers/auth';

class SignUpPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      address: '',
      password: '',
      password2: ''
    }
  }

  createAccount = () => {

  }

  render = () =>{
    console.log(this.state);   
    const isValid =
      this.state.name !== '' &&
      this.state.email !== '' &&
      this.state.address !== '' &&
      this.state.password !== '' &&
      (this.state.password === this.state.password2); 
    return(
      <div className="padding">
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              {' '}Crate your account
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='Name'
                  onChange={e => this.setState({name: e.target.value})}
                />
                
                <Form.Input
                  fluid
                  icon='mail'
                  iconPosition='left'
                  placeholder='E-mail address'
                  onChange={e => this.setState({ email: e.target.value })}
                />
                
                <Form.Input
                  fluid
                  icon='box'
                  iconPosition='left'
                  placeholder='Address'
                  onChange={e => this.setState({ address: e.target.value })}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  onChange={e => this.setState({ password: e.target.value })}
                />       
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password Confirmation'
                  type='password'
                  onChange={e => this.setState({ password2: e.target.value })}
                />           

                <Button disabled={!isValid} color='teal' fluid size='large'>Login</Button>
              </Segment>
            </Form>
            <Message>
              Already have an account? <Link to="/login">Login</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default SignUpPage;
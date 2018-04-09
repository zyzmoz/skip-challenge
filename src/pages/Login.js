import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Form, Header, Message, Segment } from 'semantic-ui-react';
import * as authProvider from '../providers/auth';
import { auth as actions }  from '../actions';
import withAuthorization from '../components/hoc/withAuthorization';


class LoginPage extends Component {
  
  constructor(props, context) {
    super(props, context);
    this.state = {
      email: '',
      password: ''
    }  
  }

  

  login = () => {
    const { email, password } = this.state;

    authProvider.login(email, password).then((res) => {
      this.props.login(res.data);
    });
  }

  render = () => {
    
    const isValid = this.state.email !== '' && this.state.password !== '';
    return (
      <div className="padding">
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              {' '}Log-in to your account
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                  onChange={e => this.setState({email: e.target.value})}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  onChange={e => this.setState({ password: e.target.value })}
                />

                <Button disabled={!isValid} onClick={() => this.login()} color='teal' fluid size='large'>Login</Button>
              </Segment>
            </Form>
            <Message>
              New to us? <Link to="/signup">Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}



export default withAuthorization(LoginPage);
// demo.js
import React from 'react';
import ReactDOM from 'react-dom';
import Form, {Text, SubmitButton} from './src/index';

ReactDOM.render((
  <Form onSubmit={data => console.log(data)}>
    <Text
      name="name"
      validate={['required']}
      placeholder="Type your name here"
      label="Your name"/>
    <Text
      name="lastname"
      validate={['required']}
      placeholder="Type your last name here"
      label="Lastname"/>
    <Text
      name="birthday"
      validate={['required']}
      placeholder="Type your birthday here"
      label="Birthday"/>

    <SubmitButton/>
    
    <Ansver
      name="answer"
      label="Your age"
    />
  </Form>
), document.getElementById('container'));

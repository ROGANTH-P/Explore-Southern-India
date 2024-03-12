import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';

function Bot() {
  const steps = [
    {
      id: 'Greet',
      message: 'Hello! Welcome to our website.',
      trigger: 'Ask name',
    },
    {
      id: 'Ask name',
      message: 'Please enter your name.',
      trigger: 'Waiting for name',
    },
    {
      id: 'Waiting for name',
      user: true,
      trigger: 'Name',
    },
    {
      id: 'Name',
      message: 'Hi {previousValue}, feel free to ask any questions.',
      trigger: 'Ask question',
    },
    {
      id: 'Ask question',
      message: 'What would you like to know?',
      trigger: 'Waiting for question',
    },
    {
      id: 'Waiting for question',
      user: true,
      trigger: 'Answer',
    },
    {
      id: 'Answer',
      message: ({ previousValue }) => {
        const question = previousValue.toLowerCase();
        let answer = '';

        switch (question) {
          case 'capital of kerala':
            answer = 'The capital of Kerala is Thiruvananthapuram.';
            break;
          case 'traditional dance of kerala':
            answer = 'The traditional dance of Kerala is Kathakali.';
            break;
          case 'state fruit of kerala':
            answer = 'The state fruit of Kerala is Jackfruit.';
            break;
          case 'state tree of kerala':
            answer = 'The state tree of Kerala is the Coconut tree.';
            break;
          case 'game of kerala':
            answer = 'A popular game in Kerala is Boat Race (Vallam Kali).';
            break;
          case 'animal of kerala':
            answer = 'The state animal of Kerala is the Indian Elephant.';
            break;
          case 'bird of kerala':
            answer =
              'The state bird of Kerala is the Indian Roller (Neelkanth).';
            break;
          case 'flower of kerala':
            answer = 'The state flower of Kerala is Kanikonna (Golden Shower).';
            break;
          case 'capital of tamil nadu':
            answer = 'The capital of Tamil Nadu is Chennai.';
            break;
          case 'traditional dance of tamil nadu':
            answer = 'The traditional dance of Tamil Nadu is Bharatanatyam.';
            break;
          // Add more cases for other states here...
          default:
            answer = 'I am not sure how to answer that question.';
        }

        return answer;
      },
      trigger: 'Another question',
    },
    {
      id: 'Another question',
      message: 'Do you have another question?',
      trigger: 'Waiting for another question',
    },
    {
      id: 'Waiting for another question',
      user: true,
      trigger: 'Answer',
    },
    {
      id: 'End',
      message: 'Thank you for chatting with me!',
      end: true,
    },
  ];

  return (
    <div className='d-flex justify-content-center  vh-100'style={{backgroundImage:'linear-gradient(to right,rgba(255,0,0,0),rgba(255,0,0,1)'}}>
    <Segment className='my-5'>
      <ChatBot steps={steps} />
    </Segment>
    </div>
  );
}

export default Bot;
import React, { useState } from 'react'
import styled from 'styled-components/native'

import { TextInput, Image } from 'react-native'
import { Container, Title } from './HomeScreenStyling'

export const HomeScreen = () => {
  const [name, setName] = useState('name')
  const [password, setPassword] = useState('password')
  return (
    <Container>
      <Logo source={require('../assets/conversation.svg')} />
      <Title>One Million Stories</Title>
      
        <TextInput
          style={{ width: 230,height: 40, borderColor: 'gray', borderWidth: 1, margin: 5 }}
          setName={text => setValue(text)}
          value={name}
        />   
        <TextInput
          style={{ width: 230,height: 40, borderColor: 'gray', borderWidth: 1 }}
          setPassword={text => setValue(text)}
          value={password}
        />  

        <Button><Text>Log in</Text></Button>
    </Container> 
  )
}

/* Use this line to check out the project from computer */
//import LottieView from 'react-native-web-lottie'


export const Button = styled.TouchableOpacity`
  background-color:#9A0A35; 
  padding:8px;
  border-radius:4px;
  margin: 10px 0px;
  width: 230px;
`

export const Text = styled.Text`
  color: #ffffff;
  font-size:18px;
`

export const Logo = styled.Image`
  width: 200px;
  height: 200px;
  tintColor: rgb(219, 112, 147);
`

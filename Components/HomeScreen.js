import React, { useState } from 'react'
import styled from 'styled-components/native'

import { TextInput, Image } from 'react-native'
import { Container, Title } from './HomeScreenStyling'
import { SmallButton } from './StartScreen'

export const HomeScreen = () => {
  const [name, setName] = useState('name')
  const [password, setPassword] = useState('password')
  return (
    <Container>
      <Logo source={require('../assets/conversation.svg')} />
      <Title>1 Million Stories</Title>
      
        <TextInput
          style={{ width: 230,height: 40, borderColor: 'lightgray', borderWidth: 1, margin: 5, borderRadius: 5, overflow: 'hidden'  }}
          setName={text => setValue(text)}
          value={name}
        />   
        <TextInput
          style={{ width: 230,height: 40, borderColor: 'lightgray', borderWidth: 1, borderRadius: 5, overflow: 'hidden' }}
          setPassword={text => setValue(text)}
          value={password}
        />  

        <Button><Text>Log in</Text></Button>
        <TealText>or</TealText>
        <Button><Text>Sign up </Text></Button>
    </Container> 
  )
}

/* Use this line to check out the project from computer */
//import LottieView from 'react-native-web-lottie'

export const Button = styled.TouchableOpacity`
  background-color:#006161; 
  padding:8px;
  border-radius:4px;
  margin: 10px 0px;
  width: 230px;
`

export const Text = styled.Text`
  color: #ffffff;
  font-size:18px;
`

export const TealText = styled.Text`
  color: #006161; 
  font-size: 16px;
`

export const Logo = styled.Image`
  width: 200px;
  height: 200px;
  tintColor:#006161;
`

//#9A0A35
//tint rgb(219, 112, 147)


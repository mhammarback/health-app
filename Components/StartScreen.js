import React, { useState } from 'react'
import styled from 'styled-components/native'

import { TextInput } from 'react-native'
import { Container, Title, ButtonText } from './StartScreenStyling'

export const StartScreen = () => { 
  const [challenge, setChallenge] = useState('')
  const [story, setStory] = useState('Share your story here...')
  const [author, setAuthor] = useState('Your name or anonymous')

  const onClick = (event) => {
    event.preventDefault()
      setChallenge(challengeArray)
  }
  
  return (
    <Container>
      <Title>Community</Title> 
      <TextInput
          style={{ width: 230,height: 160, borderColor: 'gray', borderWidth: 1 }}
          setStory={text => setValue(text)}
          value={story}
        />  
       <TextInput
          style={{ width: 230,height: 30, borderColor: 'gray', borderWidth: 1, margin: 5 }}
          setAuthor={text => setValue(text)}
          value={author}
        />    
        <ChallengeButton onPress={onClick}>
          <ButtonText>SUBMIT</ButtonText>
        </ChallengeButton>
    </Container>
  )
}

export const ChallengeButton = styled.TouchableOpacity`
  background-color:#9A0A35; 
  padding:8px;
  border-radius:4px;
  margin: 10px 0px;
  width: 230px;
`

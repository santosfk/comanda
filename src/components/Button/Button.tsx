import { View, } from 'react-native'
import {StyledButton,Text} from './style'
import React from 'react'
type Props = {
    children:string,
    bgColor:string,
    color?:string,
    onPress:()=>void
}
export const Button = ({children,bgColor,color,onPress}:Props) => {
  return (
      <StyledButton onPress={onPress} bgColor={bgColor}><Text  color={color} style={{fontWeight:'bold'}}>{children}</Text></StyledButton>

  )
}


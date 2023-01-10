import { View, } from 'react-native'
import {StyledButton,Text} from './style'
import React from 'react'
type Props = {
    children:string,
    bgColor:string,
    color?:string,
    fontSize?:number,
    onPress:()=>void
}
export const Button = ({children,bgColor,color,onPress,fontSize}:Props) => {
  return (
      <StyledButton  onPress={onPress} bgColor={bgColor}><Text   color={color} style={{fontWeight:'bold'}} fontSize={fontSize}>{children}</Text></StyledButton>

  )
}


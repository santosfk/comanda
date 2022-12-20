import { View, Text, } from 'react-native'
import {StyledButton} from './style'
import React from 'react'
type Props = {
    children:string,
    bgColor:string,
    color?:string
}
export const Button = ({children,bgColor,color}:Props) => {
  return (

      <StyledButton bgColor={bgColor} color={color}>{children}</StyledButton>

  )
}


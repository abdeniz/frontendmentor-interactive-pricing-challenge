import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../utils/colors'

const Button = ({ children }) => {
  return (
    <ButtonWrapper>
      <ButtonText>{children}</ButtonText>
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.a`
  padding: 16px 48px;
  border-radius: 100px;
  background-color: ${COLORS.neutral.darkDesatBlue};
`

const ButtonText = styled.p`
  font-weight: 600;
  color: ${COLORS.primary.paleBlue};
`

export default Button

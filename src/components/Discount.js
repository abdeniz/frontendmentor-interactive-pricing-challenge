import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../utils/colors'

const Discount = ({ children, className }) => {
  return (
    <DiscountWrapper className={className}>
      <DiscountText>{children}</DiscountText>
    </DiscountWrapper>
  )
}

const DiscountWrapper = styled.div`
  padding: 2px 8px;
  border-radius: 100px;
  background-color: ${COLORS.primary.lightGrayRed};
`

const DiscountText = styled.p`
  font-size: 10px;
  color: ${COLORS.primary.lightRed};
`

export default Discount

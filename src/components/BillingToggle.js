import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../utils/colors'
import Discount from './Discount'

const BillingToggle = () => {
  return (
    <BillingToggleWrapper>
      <BillingText>Monthly Billing</BillingText>
      <ToggleBackground>
        <ToggleCircle />
      </ToggleBackground>
      <YearlyBillingWrapper>
        <BillingText>Yearly Billing </BillingText>
        <StyledDiscount>-25%</StyledDiscount>
      </YearlyBillingWrapper>
    </BillingToggleWrapper>
  )
}

const BillingToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
`

const BillingText = styled.p`
  font-size: 14px;
`

const ToggleBackground = styled.div`
  background-color: ${COLORS.neutral.lightGrayBlue2};
  width: 48px;
  height: 24px;
  border-radius: 15px;

  position: relative;

  margin: 0 16px;
`

const ToggleCircle = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${COLORS.neutral.white};
  border-radius: 100%;

  position: absolute;
  top: 50%;
  left: 12px;

  transform: translate(-50%, -50%);
`

const YearlyBillingWrapper = styled.div`
  position: relative;
`

const StyledDiscount = styled(Discount)`
  position: absolute;
  top: -10px;
  transform: translate(50%, -50%);
  right: 0;
`

export default BillingToggle

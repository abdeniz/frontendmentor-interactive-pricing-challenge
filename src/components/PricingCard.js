import React, { useState } from 'react'
import styled from 'styled-components'
import { COLORS } from '../utils/colors'
import Slider from './Slider'
import BillingToggle from './BillingToggle'
import FeaturesList from './FeaturesList'
import { features } from '../data/data'
import Button from './Button'
import { prices, pageViews } from '../data/data'

const PricingCard = () => {
  const [value, setValue] = useState(2)
  const [discount, setDiscount] = useState(false)

  return (
    <CardWrapper>
      <h2>{pageViews[value]} Pageviews</h2>
      <Slider setValue={setValue} value={value} />
      <PriceWrapper>
        {discount && <OldPrice>${prices[value]}.00</OldPrice>}
        <h5>${discount ? prices[value] * 0.75 : prices[value]}.00</h5>
        <h4>/ month</h4>
      </PriceWrapper>

      <BillingToggle setDiscount={setDiscount} discount={discount} />

      <HorizontalLine />
      <FeaturesList features={features} />
      <Button>Start my trial</Button>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  background-color: ${COLORS.neutral.white};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px;
  padding: 40px 0;
  max-width: 500px;
  min-width: 360px;
`

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 20px 0;
  position: relative;

  & > h5 {
    margin-right: 10px;
  }
`

const HorizontalLine = styled.hr`
  border: solid 1px ${COLORS.neutral.lightGrayBlue};
  width: 100%;
  margin: 20px 0 20px 0;
`

const OldPrice = styled.h4`
  position: absolute;
  left: -35px;
  top: 50%;
  transform: translate(-50%, -50%);
  text-decoration: line-through;
`

export default PricingCard

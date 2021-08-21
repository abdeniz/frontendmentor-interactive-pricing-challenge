import React, { useState } from 'react'
import styled from 'styled-components'
import { COLORS } from '../utils/colors'
import Slider from './Slider'
import BillingToggle from './BillingToggle'
import FeaturesList from './FeaturesList'
import { features } from '../data/features'
import Button from './Button'
import { prices } from '../data/prices'

const PricingCard = () => {
  const [value, setValue] = useState(3)

  return (
    <CardWrapper>
      <h2>100K Pageviews</h2>
      <Slider setValue={setValue} value={value} />
      <PriceWrapper>
        <h5>${prices[value - 1]}.00</h5>
        <h4>/ month</h4>
      </PriceWrapper>

      <BillingToggle />

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
  padding: 0 0 20px 0;

  & > h5 {
    margin-right: 10px;
  }
`

const HorizontalLine = styled.hr`
  border: solid 1px ${COLORS.neutral.lightGrayBlue};
  width: 100%;
  margin: 20px 0 20px 0;
`

export default PricingCard

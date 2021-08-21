import React from 'react'
import checkmarkIcon from '../img/icon-check.svg'
import styled from 'styled-components'

const FeaturesList = ({ features }) => {
  return (
    <FeaturesListWrapper>
      {features.map((feature, index) => {
        return (
          <Feature key={index}>
            <img src={checkmarkIcon} alt='checkmark_icon' />
            <FeatureText>{feature}</FeatureText>
          </Feature>
        )
      })}
    </FeaturesListWrapper>
  )
}

const FeaturesListWrapper = styled.div`
  padding: 20px 0 40px 0;
`

const FeatureText = styled.p`
  font-size: 14px;
`

const Feature = styled.div`
  padding: 5px 0;
  display: flex;
  align-items: center;

  & > img {
    margin-right: 15px;
    width: 12px;
    height: 12px;
  }
`

export default FeaturesList

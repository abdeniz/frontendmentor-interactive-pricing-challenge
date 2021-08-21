import React from 'react'
import styled from 'styled-components'
import sliderIcon from '../img/icon-slider.svg'
import { COLORS } from '../utils/colors'

let sliderPercentage = '50%'

const Slider = () => {
  return (
    <SliderWrapper>
      <StyledSlider>
        <SliderCircle>
          <img src={sliderIcon} alt='slider_icon' />
        </SliderCircle>
      </StyledSlider>
    </SliderWrapper>
  )
}

const SliderWrapper = styled.div`
  padding: 40px 0;
  width: 80%;
`

const SliderCircle = styled.div`
  background-color: ${COLORS.primary.strongCyan};
  width: 40px;
  height: 40px;

  border-radius: 50%;
  position: relative;
  top: -16px;
  left: ${sliderPercentage};
  transform: translateX(-50%);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

const StyledSlider = styled.div`
  position: relative;
  border-radius: 5px;
  background: ${COLORS.neutral.lightGrayBlue};
  height: 10px;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    background-color: ${COLORS.primary.softCyan};
    left: 0;
    top: 0;
    border-radius: 5px;
    width: ${sliderPercentage};
    height: 10px;
    z-index: 0;
  }
`

export default Slider

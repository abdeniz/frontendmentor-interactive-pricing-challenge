import React from 'react'
import styled from 'styled-components'
import sliderIcon from '../img/icon-slider.svg'
import { COLORS } from '../utils/colors'

const Slider = ({ setValue, value }) => {
  const handleOnChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <SliderWrapper>
      <StyledSlider min={0} max={4} value={value} onChange={handleOnChange} />
    </SliderWrapper>
  )
}

const SliderWrapper = styled.div`
  padding: 40px 0;
  width: 80%;
`

const StyledSlider = styled.input.attrs({
  type: 'range',
})`
  appearance: none;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background-color: ${COLORS.neutral.lightGrayBlue};
  position: relative;
  z-index: 0;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${COLORS.primary.softCyan};
    width: ${(props) => (100 / 4) * props.value}%;
    height: inherit;
    border-radius: inherit;
    z-index: -1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background: url(${sliderIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${COLORS.primary.strongCyan};
    cursor: pointer;
  }
`

export default Slider

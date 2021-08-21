import styled from 'styled-components'
import PricingCard from './components/PricingCard'
import patternCircles from './img/pattern-circles.svg'
import backgroundPattern from './img/bg-pattern.svg'
import { createGlobalStyle } from 'styled-components'
import { Fragment } from 'react'
import { COLORS } from './utils/colors'

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <BackgroundPattern src={backgroundPattern} alt='background_pattern' />

      <MainContentWrapper>
        <InfoWrapper>
          <PatternCircles src={patternCircles} alt='pattern_circles' />

          <h1>Simple, traffic-based pricing</h1>
          <div>
            <p>Sign-up for our 30-day trial.</p>
            <p>No credit card required.</p>
          </div>
        </InfoWrapper>

        <PricingCard />
      </MainContentWrapper>
    </Fragment>
  )
}

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
  }

  body {
    font-family: 'Manrope', sans-serif;
    font-size: 15px;
    color: ${COLORS.neutral.darkDesatBlue};
    height: 100vh;
    background: ${COLORS.neutral.veryPaleBlue};
  }

  h1 {
    font-size: 1.3rem;
    font-weight: 800;
  }

  h2 {
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${COLORS.neutral.grayBlue};
    font-weight: 600;
  }

  h4 {
    font-size: 15px;
    font-weight: 500;
    color: ${COLORS.neutral.grayBlue};
  }
  
  h5 {
    font-size: 32px;
    font-weight: 800;
  }

  p {
    font-weight: 500;
    color: ${COLORS.neutral.grayBlue};
    line-height: 175%;
  }  
`

const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InfoWrapper = styled.div`
  position: relative;
  text-align: center;
  padding: 80px 0 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100px;
`

const BackgroundPattern = styled.img`
  position: absolute;
  z-index: -2;
  height: 50%;
  width: 100%;
  object-position: left bottom;
  object-fit: cover;

  @media only screen and (min-width: 1600px) {
    width: 100vw;
  }
`

const PatternCircles = styled.img`
  position: absolute;
  left: 50%;
  top: 50;
  transform: translateX(-50%);
  z-index: -1;
`

export default App

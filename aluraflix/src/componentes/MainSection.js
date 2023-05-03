import React from 'react'
import Slider from './Carousel/Slider/Slider'
import fotos from '../mock'

import styled , {css} from "styled-components"






const MainSectionContainer = styled.div`
    background-color: #191919;
  
    
`







function MainSection() {
  return (

    <MainSectionContainer>
          <Slider slides={fotos}/>
  
    </MainSectionContainer>

  )
}

export default MainSection
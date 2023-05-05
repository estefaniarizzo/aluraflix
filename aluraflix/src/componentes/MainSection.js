import React from 'react'
import Slider from './Carousel/Slider/Slider'


import styled , {css} from "styled-components"






const MainSectionContainer = styled.div`
    background-color: #191919;
    padding-top:3rem;
    padding-bottom:3rem;
  
    
`







function MainSection({categorias , videos}) {

  return (

    <MainSectionContainer>
          <Slider categorias={categorias } videos={videos}/>
  
    </MainSectionContainer>

  )
}

export default MainSection
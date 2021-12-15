import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
                     <Section
             title="Model S"
             description="Oder Online for Touchless Delivery "
             backgroundImg="model-s.jpg"
             LeftButtonText="Custom Oder"
             RightButtonText="Existing inventory"
             
             />
             <Section
             title="Model Y"
             description="Oder Online for Touchless Delivery"
             backgroundImg="model-y.jpg"
             LeftButtonText="Custom Oder"
             RightButtonText="Existing inventory"
             />
             <Section
             title="Model 3"
             description="Oder Online for Touchless Delivery"
             backgroundImg="model-3.jpg"
             LeftButtonText="Custom Oder"
             RightButtonText="Existing inventory"
             />
             <Section
             title="Model X"
             description="Oder Online for Touchles Delivery"
             backgroundImg="model-x.jpg"
             LeftButtonText="Custom Oder"
             RightButtonText="Existing inventory"
             />
             
             <Section
             title="Solar Panels"
             description="Lowest Cost Solar Panels in America"
             backgroundImg="solar-panel.jpg"
             LeftButtonText="Order Now"
             RightButtonText="Learn more"
             />
             <Section
             title="Solar Roof"
             description="Produce Clean Energy From Your Roof"
             backgroundImg="solar-roof.jpg"
             LeftButtonText="Order Now"
             RightButtonText="Learn more"
             />
             <Section
             title="Accessories"
             description=""
             backgroundImg="accessories.jpg"
             LeftButtonText="shop now"
             RightButtonText=""
             />
        </Container>
    )
}

export default Home

const Container = styled.div`
height:100vh;
z-index:10;
`
import React from 'react'
import { Container, Box } from '@mui/material'
import Brands from './Brands'
import Accordion from './Accordion'
import SpaSlider from './SpaSlider'
import OtherSlider from './OtherSlider'

function CustomContainer() {
  return (
    <Container maxWidth="lg">
      <Box>
        <Brands />
      </Box>
      <Box>
        <Accordion />
      </Box>
      <Box>
        <SpaSlider title="SPA" tags={['Spa', 'Hotell']} />
      </Box>
      <Box>
        <OtherSlider title="KITCHEN" tags={['kitchen']} />
      </Box>
      <Box>
        <OtherSlider title="INTERIOR DESIGN" tags={['Interior design']} />
      </Box>
      <Box>
        <OtherSlider title="GIFTCARDS" tags={['Giftcard']} />
      </Box>
      <Box sx={{ marginBottom: '40px' }}>
        <OtherSlider title="OTHER" tags={['Spa', 'Hotell']} />
      </Box>
    </Container>
  )
}

export default CustomContainer

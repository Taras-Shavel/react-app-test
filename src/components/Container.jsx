import React, { useState, useEffect } from 'react'
import { Container, Box } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import Brands from './Brands'
import AccordionUsage from './Accordion'
import SliderComponent from './Slider'

function CustomContainer() {
  const navigate = useNavigate()
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const categoryFromQuery = params.get('category')
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    if (categoryFromQuery) {
      setSelectedCategory(categoryFromQuery)
    } else {
      setSelectedCategory(null)
    }
  }, [categoryFromQuery])

  const handleCategorySelect = (category) => {
    navigate(`/?category=${category}`)
  }

  return (
    <Container maxWidth="lg">
      <Box>
        <Brands />
      </Box>
      <Box>
        <AccordionUsage onCategorySelect={handleCategorySelect} />
      </Box>

      <Box sx={{ marginBottom: '40px' }}>
        {selectedCategory ? (
          <SliderComponent category={selectedCategory} />
        ) : (
          <>
            <SliderComponent category="spa" />
            <SliderComponent category="kitchen" />
            <SliderComponent category="interior design" />
            <SliderComponent category="giftcards" />
            <SliderComponent category="other" />
          </>
        )}
      </Box>
    </Container>
  )
}

export default CustomContainer

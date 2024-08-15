import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Avatar from '@mui/material/Avatar'
import accordionData from '../data/accordion.json'

function AccordionUsage({ onCategorySelect }) {
  const [expanded, setExpanded] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('')
  const location = useLocation()
  const [categoryTwo, setCategoryTwo] = useState(null)

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const categoryFromQuery = params.get('category')
    setCategoryTwo(categoryFromQuery)
  }, [location.search])

  const handleItemClick = (item) => {
    const category = item.title.toLowerCase()
    onCategorySelect(category)
    setSelectedCategory(category)
    setExpanded(false)
  }

  return (
    <Box sx={{ width: '100%', p: 2, bgcolor: '#F5DACC' }}>
      <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{ fontWeight: 700 }}>
            {categoryTwo ? categoryTwo.toUpperCase() : 'CATEGORY'}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            height: 372,
            p: 1.5,
            bgcolor: '#FDF8F5',
            overflowY: 'scroll',
          }}
        >
          <List>
            {accordionData.map((item) => (
              <ListItem
                key={item.id}
                button
                sx={{
                  mb: 1,
                  p: 1.5,
                  borderRadius: 1,
                  bgcolor: 'white',
                  border: 0,
                  '&:hover': {
                    bgcolor: '#FAEBE3',
                  },
                }}
                onClick={() => handleItemClick(item)}
              >
                <ListItemIcon sx={{ minWidth: '24px', marginRight: '16px' }}>
                  <Avatar
                    src={item.icon}
                    alt={item.title}
                    sx={{ width: 24, height: 24 }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: 'medium',
                  }}
                />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default AccordionUsage

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Paper from '@mui/material/Paper'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Avatar from '@mui/material/Avatar'
import accordionData from '../data/accordion.json'

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
}

function AccordionUsage() {
  const [open, setOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  const handleOpen = (item) => {
    setSelectedItem(item)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedItem(null)
  }

  return (
    <Box sx={{ width: '100%', p: 2, bgcolor: '#F5DACC' }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{ fontWeight: 700 }}>CATEGORY</Typography>
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
                // component={Paper}
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
                onClick={() => handleOpen(item)}
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

      {selectedItem && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box sx={modalStyle}>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'grey',
              }}
            >
              <CloseIcon />
            </IconButton>
            <Typography id="modal-title" variant="h6" component="h2">
              {selectedItem.title}
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              Details about element:
            </Typography>
          </Box>
        </Modal>
      )}
    </Box>
  )
}

export default AccordionUsage

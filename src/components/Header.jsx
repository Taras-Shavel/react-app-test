import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        width: '100%',
        height: '90px',
        bgcolor: 'white',
        mt: 2.5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            height: '45px',
            display: 'flex',
            justifyContent: 'space-between',
            px: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '30%',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/')}
          >
            <img
              className="w-[26px] h-[23px] mr-2.5"
              src="./Engagement.png"
              alt="Engagement"
            />
            <Typography component="h4" fontWeight="bold">
              GREATESTDAY
            </Typography>
          </Box>
          <Box
            sx={{
              width: 300,
              height: 1,
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Button
              sx={{
                height: '100%',
                width: '130px',
                bgcolor: 'black',
                border: 0,
                borderRadius: '5px',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '14px',
                marginRight: '30px',
                textTransform: 'none',
                '&:hover': {
                  bgcolor: 'black',
                },
              }}
            >
              Our wedding
            </Button>
            <Button
              sx={{
                height: '100%',
                width: '146px',
                bgcolor: '#FAEBE3',
                border: 0,
                borderRadius: '5px',
                fontWeight: 'bold',
                fontSize: '14px',
                textTransform: 'none',
                color: 'black',
                '&:hover': {
                  bgcolor: '#FAEBE3',
                },
              }}
            >
              Sign out
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Header

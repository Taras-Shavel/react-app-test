import React from 'react'
import { Box } from '@mui/material'

function Brands() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mt={2.5}
      height={140}
      width="100%"
    >
      <img
        className="w-[300px] h-[21px]"
        src="./brands/Svenkts.png"
        alt="Swenkts"
      />
      <img
        className="w-[137px] h-[120px]"
        src="./brands/YasuragiLogo.png"
        alt="YasuragiLogo"
      />
      <img
        className="w-[163px] h-[19px]"
        src="./brands/Marimekko.png"
        alt="Marimekko"
      />
      <img
        className="w-[120px] h-[61px]"
        src="./brands/Louis.png"
        alt="Louis"
      />
      <img
        className="w-[173px] h-[22px]"
        src="./brands/Global.png"
        alt="Global"
      />
    </Box>
  )
}

export default Brands

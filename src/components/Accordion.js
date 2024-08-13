import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import accordion from '../data/accordion.json'

export default function AccordionUsage() {
  return (
    <div className="w-full bg-[#F5DACC] p-4 box-border">
      <Accordion className="w-full h-full flex flex-col justify-center">
        <AccordionSummary
          className="flex"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          GATEGORY
        </AccordionSummary>
        <AccordionDetails className="h-[372px] p-[12px] bg-[#FDF8F5] box-border overflow-y-auto">
          {accordion.map((acc) => (
            <div
              key={acc.id}
              className="h-12 bg-white px-4 py-3 rounded mb-2.5 flex items-center"
            >
              <img
                className="w-6 h-6 mr-[16px]"
                src={acc.icon}
                alt={acc.title}
              />
              <h3 className="text-sm font-medium">{acc.title}</h3>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

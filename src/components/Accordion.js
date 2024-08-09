import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import css from "../styles/Accordion.module.css"
import accordion from "../data/accordion.json"

export default function AccordionUsage() {
  return (
    <div className={css.container}>
      <Accordion className={css.accordion}>
        <AccordionSummary
          className={css.accordionCategory}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          GATEGORY
        </AccordionSummary>
        <AccordionDetails className={css.details}>
            {
                accordion.map((acc) => (
                    <div key={acc.id} className={css.detailsItem}>
                        <img style={{width: "24px", height: "24px"}} src={acc.icon} alt={acc.title}/>
                        <h3>{acc.title}</h3>
                    </div>
                ))
            }
          
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

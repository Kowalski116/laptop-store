import React from 'react';
import { borders } from '@material-ui/system';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const Category = () => {
    return ( 
        <Accordion borderTop={1}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Danh mục</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
                <li>Laptop Asus</li>
                <li>Laptop Dell</li>
                <li>Laptop HP</li>
                <li>Laptop Lenovo</li>
                <li>Laptop Acer</li>
                <li>Laptop MSI</li>
                <li>Laptop Apple</li>
                <li>Laptop LG</li>
                <li>Microsoft Surface</li>
                <li>Laptop FUJITSU</li>
                <li>Máy Tính Bảng</li>
                <li>Laptop VGS</li>
                <li>Laptop AVITA</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
     );
}
 
export default Category;
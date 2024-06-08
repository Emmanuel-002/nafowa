import { Card, Container, List, ListItem, Typography } from '@mui/material'
import React from 'react'

function Achievements() {
  return (
    <Container maxWidth='xl' style={{marginTop:'1rem'}}>
        <Typography variant='h4'><span style={{backgroundColor:'#EA5C30', padding:'5px', borderRadius:'5px', color:'#fff'}}>Achievements</span></Typography>
        <Card style={{padding:'5px'}}>
        <Typography sx={{marginTop:'0.5rem'}}>
        NAFOWA has embarked specifically on activities that promote the welfare of the “Air Force Family” and the public in general.
        The Association has reached out to the less fortunate and less privileged members of the society.  Notable among NAFOWA activities are:
        <ul style={{listStyleType:'disc'}}>
            <li>
                Promoting family values.
            </li>
            <li>
                Provision of foundational education through the building and equipping of nursery, primary and secondary schools tagged “The NAFOWA Little Angels Schools” 
            </li>
            <li>
                Establishment of vocational/ICT centres and cyber cafes.  
            </li>
            <li>
                Promoting health awareness programmes.
            </li>
            <li>
            	Established Cancer Screening Centre.
            </li>
            <li>
            	Provision of medical equipment to hospitals.
            </li>
            <li>
            	Provision of foods items to prison and help to inmates.
            </li>
            <li>
            	Setting up of recreational facilities, like the NAFOWA Children’s Parks. 
            </li>
            <li>
            	Educational sponsorship and support to the disabled and less fortunate in society, which are not limited to the “Air Force Family”.
            </li>
            <li>
            	Promoting the intellectual capacity of members and assisting them to empower themselves financially.
            </li>
            <li>
            	Provision of aid materials to those who are internally displaced by disasters.
            </li>
            <li>
            	Organising lectures, seminars and workshop in capacity building for its members and the general public.
            </li>
            <li>
            	Organising forums for peace advocacy.
            </li>
        </ul>        
        </Typography>
        </Card>
    </Container>
  )
}

export default Achievements
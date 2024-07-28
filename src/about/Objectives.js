import { Card, Container, List, ListItem, Typography } from '@mui/material'
import React from 'react'

function Objectives() {
  return (
    <Container maxWidth='xl' style={{marginTop:'1rem'}}>
        <Card style={{padding:'5px'}}>
        <Typography variant='h5'>Goals and Objectives</Typography>
        <Typography sx={{marginTop:'0.5rem'}}>
        <p><strong>Goal</strong>:   Giving hope and meaningful life to Women, children and youth.</p>
        <p><strong>Objectives</strong>:</p>
        <ul style={{listStyleType:'disc'}}>
            <li>
            	Promoting the social, intellectual and moral well-being of women and youth.
            </li>
            <li>
            	Contributing to the efforts of charitable/humanitarian organizations in and outside Nigeria. 
            </li>
            <li>
            	Liaising with organizations with similar aspirations for the purpose of furthering the objectives of the Association.
            </li>
            <li>
            	Organizing social, cultural and educational activities for the benefit of members of the association and the public.
            </li>
            <li>
            	Promoting solidarity and harmony among members of the Association and providing a forum for officers’ wives to meet regularly. 
            </li>
        </ul>        
        </Typography>
        </Card>
    </Container>
  )
}

export default Objectives
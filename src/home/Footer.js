import { Typography, Grid, Container, FormControl, InputLabel, TextField, Box, FormHelperText } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import * as React from 'react';


const year = new Date().getFullYear();

const Footer = () => {
    return(
        <Container  maxWidth="xl" id='services' style={{ backgroundColor:'#000', color:'#ffffff',marginTop:'20px'}}>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4} style={{textAlign:'center'}}>
            <h2>Quick Links</h2>
            <a href={`#services`} style={{textDecoration:'none',color:'#1565c0'}}>Services</a><br />
            <a href={`#news`} style={{textDecoration:'none',color:'#1565c0'}}>News</a><br/>
            <a href={`#about`} style={{textDecoration:'none',color:'#1565c0'}}>About</a>
        </Grid>
        <Grid item xs={12} md={6} lg={4} style={{textAlign:'center'}}>
            <h2>Social Media</h2>
            <a target='_blank' href={`https://wa.me/+2348060515523`} style={{textDecoration:'none',color:'#1565c0',padding:'10px'}}><WhatsAppIcon/></a>
            <a target='_blank' href={`https://facebook.com/araoye.emmanueloluwasegun`} style={{textDecoration:'none',color:'#1565c0',padding:'10px'}}><FacebookIcon /></a>
            <a target='_blank' href={`https://facebook.com/araoye.emmanueloluwasegun`} style={{textDecoration:'none',color:'#1565c0',padding:'10px'}}><XIcon /></a>
            <a target='_blank' href={`https://facebook.com/araoye.emmanueloluwasegun`} style={{textDecoration:'none',color:'#1565c0',padding:'10px'}}><InstagramIcon /></a><br/>
            <a target='_blank' href='tel:08060515523:' style={{textDecoration:'none',color:'#1565c0',padding:'10px'}}><PhoneIcon /> +234-908-859-6289</a><br/>
            <a target='_blank' href="mailto:segseyman@gmail.com" style={{textDecoration:'none',color:'#1565c0',padding:'10px'}}> <MailIcon /> office@nafowa.org</a><br/>

        </Grid>
        <Grid item xs={12} md={6} lg={4} style={{textAlign:'center',padding:'10px'}}>
        <form action="https://public.herotofu.com/v1/ab6ca490-1d5e-11ef-90b8-b52fc5a15495" method="post" accept-charset="UTF-8">
            <h2>Contact Us</h2>
                <input name="Name" placeholder='Your name' id="name" type="text" required style={{marginBottom:'10px',width:'100%',height:'30px'}} /><br />
                <input name="Email" placeholder='Your email' place id="email" type="email" required style={{marginBottom:'10px',width:'100%',height:'30px'}}  />
                <textarea name='Message' rows={3} className="registerInput" placeholder='Your Message...' style={{ marginBottom:'10px', width:'100%'}}
                required></textarea><br/>
                <input type="submit" value="SEND" style={{width:'100%',height:'30px', backgroundColor:'#1565c0', border:'1px solid #1565c0'}} />
        </form>
        </Grid>
      </Grid>
    </Box>
        <Typography style={{textAlign:'center',marginTop:'50px'}}>
           <p> Designed By NAF Alpha Devs <br /> Copyright &#169; {year} NAFOWA</p>
        </Typography>
    </Container>
    )
}

export default Footer;
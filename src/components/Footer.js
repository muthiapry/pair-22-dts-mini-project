import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Pair 22
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const footers = [
    {
      description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
      description: [
        'Cool stuff',
        'Random feature',
        'Team feature',
        'Developer stuff',
        'Another one',
      ],
    },
    {
      description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
      description: ['Privacy policy', 'Terms of use'],
    },
  ];
  
const Footer = () => {
  return (
    <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <ul style={{listStyleType: "none", paddingLeft: 0}}>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary" underline="none">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Button variant="outlined">Source Code</Button>
        <Copyright sx={{ mt: 3 }} />
      </Container>
  );
};
export default Footer;
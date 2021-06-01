import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
// import Typography from '@material-ui/core/Typography';
// import MenuElem from './MenuElem';
import logo from './../../assets/images/logo-brp.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    linkLogo: {
      flexGrow: 1,
    },
    logo: {
      maxWidth: 40,
      marginRight: '10px'
    }
  }),
);
// const AtvElements: string[] = [
//   'Side-By-Side',
//   'All-Terrain-Vehicle'
// ];
// const SnowmobileElements: string[] = [
//   'Ski-Doo',
//   'Lynx',
// ];
// const JetSkisElements: string[] = [
//   'Pleasure jet skis',
//   'Recreational jet skis',
//   'Super powerful jet skis',
//   'Jet ski berths'
// ]

const Navbar:React.FC = () => {
  const classes = useStyles();
  const logoClickHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
  }
 
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          {/* <MenuElem title={'Can-Am Off-road'} elementsMenu={AtvElements} />
          <Typography className={classes.root}>
            <Link 
                component="button"
                variant="body2"
                onClick={() => {
                  console.log("Can-Am Off-road - Clicked");
                }}
            >
                Can-Am On-road
            </Link>
          </Typography>
          <MenuElem title={'Snowmobile'} elementsMenu={SnowmobileElements} />
          <MenuElem title={'Jet skis'} elementsMenu={JetSkisElements} />

           */}
          <Link href="#" onClick={logoClickHandler} className={classes.linkLogo}>
            <img src={logo} alt="logo" className={classes.logo} />
          </Link>

          <Button color="inherit">Login</Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navbar;
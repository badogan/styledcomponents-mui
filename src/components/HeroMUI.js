import React from "react";
import { HeroContent } from "../APIsHelpers/HelperContent";

import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  mainHeroMUI: {
    // position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundImage: '',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

const HeroMUI = () => {
  const content = HeroContent;
  const logos = content.logos;
  const stayintouchLogos = content.stayintouchLogos;
  const classes = useStyles();

  return (
    <Paper className={classes.mainHeroMUI}>
      <div className="hero-main-container wrapper2">
        <div className="hero-name-title">
          <h1>
            {content.name} {content.title}
          </h1>
        </div>

        <div className="hero-buttons">
          <a className="btn btn-full" href="#projects">
            {content.button1Content}
          </a>
          <a className="btn btn-ghost" href="#blogposts">
            {content.button2Content}
          </a>
        </div>

        <div className="hero-mystack">
          <h3>My stack:</h3>
          <div className="hero-logos-div">
            {Object.keys(logos).map((logokey, index) => (
              <h6 key={index}>
                {" "}
                <i className={logos[logokey]}></i>
              </h6>
            ))}
          </div>
        </div>
        <div className="hero-stayintouch">
          <h3>Stay in touch:</h3>

          <div className="hero-stayintouch-logos-div">
            {stayintouchLogos.map((stayintouchLogo, index) => (
              <h5 key={index}>
                <i
                  className={stayintouchLogo.fontLink}
                  onClick={() => window.open(`${stayintouchLogo.externalLink}`)}
                ></i>
              </h5>
            ))}
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default HeroMUI;

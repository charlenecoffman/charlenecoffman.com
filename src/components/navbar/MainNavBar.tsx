import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { MenuItem, AppBar, Toolbar, Button, Grid, Grow, MenuList, Popper, Typography } from "@material-ui/core";
import MobileMenu from "./MobileMenu";
import MobileMenuItem from "./MobileMenuItem";
import { Link } from "react-router-dom";
import HideOnScroll from "./HideOnScroll";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    linkNoStyle: {
      textDecoration: "none",
      color: "inherit",
    },
    link: {
      cursor: "pointer",
    },
    hideOnMobile: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    hideOnNotMobile: {
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    appBarStyle: {
      background: "transparent",
      boxShadow: "none",
      textAlign: "center",
    },
    homeButton: {
      textAlign: "left",
    },
    buttons: {
      textAlign: "center",
      textTransform: "uppercase",
      "&:hover": {
        color: "#56AED4",
      },
    },
    largeFont: {
      fontSize: 26,
    },
    smallFont: {
      fontSize: 14,
      fontFamily: ["Roboto", "sans-serif"].join(","),
    },
    subMenuItem: {
      fontSize: 14,
      fontFamily: ["Roboto", "sans-serif"].join(","),
      color: "#FFFAFA",
    },
    paper: {
      backgroundColor: `rgba(0,0,0, 0.5)`,
      textTransform: "uppercase",
    },
    subMenuOptions: {
      "&:hover": {
        backgroundColor: "#56AED4",
      },
    },
  }),
);

export default function Navbar() {
  const classes = useStyles();
  let codeExamplesSubMenu: MobileMenuItem[] = [];
  codeExamplesSubMenu.push({ name: "FizzBuzz", link: "fizzbuzz" } as MobileMenuItem);
  codeExamplesSubMenu.push({ name: "Palindrome", link: "palindrome" } as MobileMenuItem);
  codeExamplesSubMenu.push({ name: "Count Occurances In String", link: "countocc" } as MobileMenuItem);
  let menuItems: MobileMenuItem[] = [];
  menuItems.push({ name: "Charlene Coffman", link: "/", hideOnMobile: true, homeButton: true } as MobileMenuItem);
  menuItems.push({ name: "Home", link: "/" } as MobileMenuItem);
  menuItems.push({ name: "Resume", link: "resume" } as MobileMenuItem);
  menuItems.push({ name: "Code Examples", subMenu: codeExamplesSubMenu, hasSubMenu: true } as MobileMenuItem);
  menuItems.push({ name: "Blog", link: "blog" } as MobileMenuItem);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getClass = (name: string) => {
    switch (name) {
      case "Charlene Coffman":
        return classes.homeButton;
      default:
        return classes.buttons;
    }
  };

  return (
    <Grid container>
      <Grid item>
        <HideOnScroll>
          <AppBar position="absolute" className={classes.appBarStyle}>
            <Toolbar id="back-to-top-anchor">
              <MobileMenu className={classes.hideOnNotMobile} menuItems={menuItems} />
              <Grid container alignItems="center" className={classes.hideOnMobile}>
                <Grid item xs={12}>
                  <Grid container justifyContent="center" alignItems="center">
                    {menuItems.map((menuItem) => {
                      if (menuItem.homeButton) {
                        return (
                          <Grid item key={menuItem.name} className={getClass(menuItem.name)} xs={5}>
                            <Grid container justifyContent="center" alignItems="center">
                              <Grid item>
                                <Link to={menuItem.link ?? ""} className={classes.linkNoStyle}>
                                  <Button className={classes.largeFont} color="inherit">
                                    {menuItem.name}
                                  </Button>
                                </Link>
                              </Grid>
                            </Grid>
                          </Grid>
                        );
                      } else if (menuItem.hasSubMenu) {
                        return (
                          <Grid item key={menuItem.name} xs={1} onMouseLeave={handleClose} className={getClass(menuItem.name)}>
                            <Grid item onMouseEnter={handleClick}>
                              <Typography align="center" className={classes.smallFont + " " + classes.link}>
                                {menuItem.name}
                              </Typography>
                            </Grid>
                            <Popper anchorEl={anchorEl} open={open} onMouseLeave={handleClose} role={undefined} transition disablePortal>
                              {({ TransitionProps, placement }) => (
                                <Grow {...TransitionProps} style={{ transformOrigin: placement === "bottom" ? "center top" : "center bottom" }}>
                                  <Grid container>
                                    <Grid item className={classes.paper}>
                                      <MenuList>
                                        {menuItem.subMenu?.map((m) => {
                                          return (
                                            <MenuItem onClick={handleClose} className={classes.subMenuOptions}>
                                              <Link to={m.link ?? ""} className={classes.linkNoStyle}>
                                                <Typography className={classes.subMenuItem}>{m.name}</Typography>
                                              </Link>
                                            </MenuItem>
                                          );
                                        })}
                                      </MenuList>
                                    </Grid>
                                  </Grid>
                                </Grow>
                              )}
                            </Popper>
                          </Grid>
                        );
                      } else {
                        return (
                          <Grid item key={menuItem.name} className={getClass(menuItem.name)} xs={1}>
                            <Link to={menuItem.link ?? ""} className={classes.linkNoStyle}>
                              <Typography align="center" className={classes.smallFont}>
                                {menuItem.name}
                              </Typography>
                            </Link>
                          </Grid>
                        );
                      }
                    })}
                  </Grid>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </Grid>
    </Grid>
  );
}

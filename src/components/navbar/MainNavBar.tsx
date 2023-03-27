import React from "react";
import { useTheme } from "@mui/material";
import { MenuItem, AppBar, Toolbar, Button, Grid, Grow, MenuList, Popper, Typography, useMediaQuery } from "@mui/material";
import MobileMenu from "./MobileMenu";
import MobileMenuItem from "./MobileMenuItem";
import { Link } from "react-router-dom";

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  let codeExamplesSubMenu: MobileMenuItem[] = [];
  codeExamplesSubMenu.push({ name: "FizzBuzz", link: "fizzbuzz" } as MobileMenuItem);
  codeExamplesSubMenu.push({ name: "Palindrome", link: "palindrome" } as MobileMenuItem);
  codeExamplesSubMenu.push({ name: "Count Occurances In String", link: "countoccur" } as MobileMenuItem);

  let menuItems: MobileMenuItem[] = [];
  menuItems.push({ name: "Charlene Coffman", link: "/", hideOnMobile: true, homeButton: true } as MobileMenuItem);
  menuItems.push({ name: "Home", link: "/" } as MobileMenuItem);
  menuItems.push({ name: "Resume", link: "resume" } as MobileMenuItem);
  menuItems.push({ name: "Code Examples", subMenu: codeExamplesSubMenu, hasSubMenu: true } as MobileMenuItem);
  menuItems.push({ name: "Pet Projects", link: "projects" } as MobileMenuItem);

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
        return "homeButton";
      default:
        return "otherButtons";
    }
  };

  return (
    <Grid container>
      <Grid item>
        <AppBar>
          <Toolbar id="back-to-top-anchor">
            {isMobile && <MobileMenu className="hideOnNotMobile" menuItems={menuItems} />}
            {!isMobile && (
              <Grid container alignItems="center" className="hideOnMobile">
                <Grid item xs={12}>
                  <Grid container justifyContent="center" alignItems="center">
                    {menuItems.map((menuItem) => {
                      if (menuItem.homeButton) {
                        return (
                          <Grid item key={menuItem.name} className={"navBarButtons largeFont " + getClass(menuItem.name)} xs={5}>
                            <Link to={menuItem.link ?? ""} className="linkNoStyle">
                              <Button className="largeFont" color="inherit">
                                {menuItem.name}
                              </Button>
                            </Link>
                          </Grid>
                        );
                      } else if (menuItem.hasSubMenu) {
                        return (
                          <Grid item key={menuItem.name} xs={1} onMouseLeave={handleClose} className={"navBarButtons smallFont " + getClass(menuItem.name)}>
                            <Grid item onMouseEnter={handleClick}>
                              <Typography align="center" >
                                {menuItem.name}
                              </Typography>
                            </Grid>
                            <Popper anchorEl={anchorEl} open={open} onMouseLeave={handleClose} role={undefined} transition disablePortal>
                              {({ TransitionProps, placement }) => (
                                <Grow
                                  {...TransitionProps}
                                  timeout={500}
                                  style={{ transformOrigin: placement === "bottom" ? "center top" : "center bottom" }}
                                >
                                  <Grid container>
                                    <Grid item className="paper">
                                      <MenuList>
                                        {menuItem.subMenu?.map((m) => {
                                          return (
                                            <Link to={m.link ?? ""} className="subMenuItem linkNoStyle">
                                              <MenuItem onClick={handleClose} className="subMenuOptions">
                                                <Typography>{m.name}</Typography>
                                              </MenuItem>
                                            </Link>
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
                          <Grid item key={menuItem.name} className={"navBarButtons largeFont " + getClass(menuItem.name)} xs={1}>
                            <Link to={menuItem.link ?? ""} className="linkNoStyle">
                              <Typography align="center">
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
            )}
          </Toolbar>
        </AppBar>
      </Grid>
    </Grid>
  );
}

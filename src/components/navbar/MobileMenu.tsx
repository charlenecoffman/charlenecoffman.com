import React from "react";
import { createStyles, IconButton, makeStyles, Theme, Typography, Grid } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MobileMenuItem from "./MobileMenuItem";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    linkNoStyle: {
      textDecoration: "none",
      color: "inherit",
    },
  }),
);

export interface IMobileMenuProps {
  className: string;
  menuItems: MobileMenuItem[];
}

export const MobileMenu: React.FC<IMobileMenuProps> = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [submenuanchor, setsubmenuanchor] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setsubmenuanchor(null);
  };

  const openSubMenu = (event: any) => {
    setsubmenuanchor(event.currentTarget);
  };

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={props.className}
      >
        <MenuIcon />
      </IconButton>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        {props.menuItems
          .filter((m) => !m.hideOnMobile)
          .map((mi) => {
            if (!mi.hasSubMenu) {
              return (
                <MenuItem onClick={handleClose} key={mi.name}>
                  <Link to={mi.link!} className={classes.linkNoStyle}>
                    {mi.name}
                  </Link>
                </MenuItem>
              );
            } else {
              return (
                <MenuItem key={mi.name}>
                  <Typography onClick={openSubMenu}>{mi.name}</Typography>
                  <Menu
                    id="simple-sub-menu"
                    anchorEl={submenuanchor}
                    keepMounted
                    open={Boolean(submenuanchor)}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    transformOrigin={{ vertical: "top", horizontal: "left" }}
                  >
                    <MenuItem onClick={handleClose} key={mi.name}>
                      <Grid container>
                        {mi.subMenu?.map((smi) => {
                          return (
                            <Grid item xs={12}>
                              <MenuItem onClick={handleClose} key={smi.name}>
                                <Link to={smi.link!} className={classes.linkNoStyle}>
                                  {smi.name}
                                </Link>
                              </MenuItem>
                            </Grid>
                          );
                        })}
                      </Grid>
                    </MenuItem>
                  </Menu>
                </MenuItem>
              );
            }
          })}
      </Menu>
    </div>
  );
};

export default MobileMenu;

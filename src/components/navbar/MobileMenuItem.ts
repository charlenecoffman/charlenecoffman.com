export default class MobileMenuItem {
  name: string = "";
  link: string | undefined;
  subMenu: MobileMenuItem[] | undefined;
  hideOnMobile: boolean = false;
  homeButton: boolean = false;
  hasSubMenu: boolean = false;
}

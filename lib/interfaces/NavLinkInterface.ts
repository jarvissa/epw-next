import { IconType } from "react-icons";

export default interface NavLinkInterface {
  key: string;
  title: string;
  to: string;
  icon: IconType;
}

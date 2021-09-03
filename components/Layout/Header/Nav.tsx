import Image from "next/image";
import NavLinkInterface from "../../../lib/interfaces/NavLinkInterface";
import NextLink from "next/link";
import { ComponentProps } from "react";
import { Icon, IconProps, Link, LinkProps, Text } from "@chakra-ui/react";
import { MotionLi, MotionUl } from "../../../lib/animation/components";
import { useRouter } from "next/router";
import { useState } from "react";

type NavProps = {
  links: NavLinkInterface[];
  hasIcon?: boolean;
  showTitle?: boolean;
  listProps?: ComponentProps<typeof MotionUl>;
  listItemProps?: ComponentProps<typeof MotionLi>;
  linkProps?: LinkProps;
  activeLinkProps?: LinkProps;
  iconProps?: IconProps;
};

const findActiveLink = (pathname: string) => {
  return pathname.split("/")[1] || "/";
};

const Nav = ({
  links,
  hasIcon,
  showTitle = true,
  listProps,
  listItemProps,
  linkProps,
  activeLinkProps,
  iconProps,
}: NavProps) => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(findActiveLink(router.pathname));

  return (
    <MotionUl {...listProps}>
      {links.map((link) => {
        if (activeLink === link.key) {
          return (
            <MotionLi key={link.key} {...listItemProps}>
              <NextLink href={link.to} passHref>
                <Link
                  {...linkProps}
                  {...activeLinkProps}
                  onClick={() => setActiveLink(link.key)}
                >
                  {showTitle && <Text>{link.title}</Text>}

                  {hasIcon && <Icon as={link.icon}></Icon>}
                </Link>
              </NextLink>
            </MotionLi>
          );
        }

        return (
          <MotionLi key={link.key} {...listItemProps}>
            <NextLink href={link.to} passHref>
              <Link {...linkProps} onClick={() => setActiveLink(link.key)}>
                {showTitle && link.title}

                {hasIcon && <Icon as={link.icon}></Icon>}
              </Link>
            </NextLink>
          </MotionLi>
        );
      })}
    </MotionUl>
  );
};

export default Nav;

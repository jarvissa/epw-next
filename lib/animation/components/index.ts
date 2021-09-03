import {
  Box,
  BoxProps,
  ListItem,
  ListItemProps,
  ListProps,
  UnorderedList,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export const MotionBox = motion<BoxProps>(Box);
export const MotionUl = motion<ListProps>(UnorderedList);
export const MotionLi = motion<ListItemProps>(ListItem);

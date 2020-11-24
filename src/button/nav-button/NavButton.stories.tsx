/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import NavButton from "./NavButton";
import Icon from "./../../Icon/Icon";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/Button/NavButton",
  component: NavButton,
};

export const defaultButton = () => {
  return (
    <NavButton width="200px">
      <Icon icon="community" />
      커뮤니티
    </NavButton>
  );
};

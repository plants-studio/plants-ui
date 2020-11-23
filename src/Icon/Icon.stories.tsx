/** @jsx jsx */
import { jsx } from "@emotion/core";
import Icon from "./Icon";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";

export default {
  title: "components/Icon",
  component: Icon,
  decorators: [withKnobs],
};

export const icon = () => {
  const iconType = select(
    "icon",
    ["community", "trophy", "gameController"],
    "community"
  );
  const size = text("size", "");
  const color = text("color", "");
  return <Icon color={color} size={size} icon={iconType} />;
};

icon.story = {
  name: "Default",
};

export const customSize = () => <Icon icon="trophy" size="4rem" />;

export const customColor = () => <Icon icon="gameController" color="red" />;

export const customizedWithStyle = () => (
  <Icon icon="community" css={{ color: "red", width: "4rem" }} />
);

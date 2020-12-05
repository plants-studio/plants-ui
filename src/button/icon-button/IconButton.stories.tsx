/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import IconButton from "./IconButton";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/Button/IconButton",
  component: IconButton,
  decorators: [withKnobs],
};

export const iconButton = () => {
  const iconType = select(
    "icon",
    ["community", "trophy", "gameController", "vialSolid"],
    "community"
  );
  const size = text("size", "");
  const margin = text("margin", "");
  return (
    <IconButton
      icon={iconType}
      size={size}
      margin={margin}
      onClick={action("onClick")}
    ></IconButton>
  );
};

iconButton.story = {
  name: "Default",
};

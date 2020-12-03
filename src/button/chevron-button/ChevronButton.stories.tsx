/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import ChevronButton from "./ChevronButton";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/Button/ChevronButton",
  component: ChevronButton,
  decorators: [withKnobs],
};

export const chevronButton = () => {
  const themeType = select(
    "theme",
    ["chevronLeft", "chevronRight"],
    "chevronLeft"
  );
  const width = text("size", "2rem");
  return (
    <ChevronButton
      themeType={themeType}
      size={width}
      onClick={action("onClick")}
    ></ChevronButton>
  );
};

chevronButton.story = {
  name: "Default",
};

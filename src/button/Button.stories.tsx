/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Button from "./Button";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/Button",
  component: Button,
  decorators: [withKnobs],
};

export const button = () => {
  const label = text("children", "BUTTON");
  const themeType = select(
    "theme",
    ["primary", "secondary", "tertiary"],
    "primary"
  );
  const isDisabled = boolean("disabled", false);
  const width = text("width", "");
  return (
    <Button
      themeType={themeType}
      isDisabled={isDisabled}
      width={width}
      onClick={action("onClick")}
    >
      {label}
    </Button>
  );
};

button.story = {
  name: "Default",
};

export const primaryButton = () => {
  return <Button themeType="primary">PRIMARY</Button>;
};

export const secondaryButton = () => {
  return <Button themeType="secondary">SECONDARY</Button>;
};

export const tertiaryButton = () => {
  return <Button themeType="tertiary">TERTIARY</Button>;
};

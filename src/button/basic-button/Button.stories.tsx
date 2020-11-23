/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Button from "./Button";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Icon from "../../Icon/Icon";

export default {
  title: "components/Button/BasicButton",
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

export const withIcon = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Button>
        <Icon icon="community" /> LIKE
      </Button>
      <Button>
        <Icon icon="trophy" /> LIKE
      </Button>
      <Button>
        <Icon icon="gameController" /> LIKE
      </Button>
    </div>
  );
};

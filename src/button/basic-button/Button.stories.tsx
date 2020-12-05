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
  const label = text("children", "대회 생성");
  const themeType = select(
    "theme",
    ["primary", "secondary", "tertiary"],
    "primary"
  );
  const isDisabled = boolean("disabled", false);
  const width = text("width", "");
  const margin = text("margin", "");
  return (
    <Button
      themeType={themeType}
      isDisabled={isDisabled}
      width={width}
      margin={margin}
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
  return <Button themeType="primary">팀 생성</Button>;
};

export const secondaryButton = () => {
  return <Button themeType="secondary">팀 참가</Button>;
};

export const tertiaryButton = () => {
  return <Button themeType="tertiary">TERTIARY</Button>;
};

export const withIcon = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Button themeType="primary">
        <Icon icon="community" /> LIKE
      </Button>
      <Button themeType="primary">
        <Icon icon="trophy" /> LIKE
      </Button>
      <Button themeType="primary">
        <Icon icon="gameController" /> LIKE
      </Button>
    </div>
  );
};

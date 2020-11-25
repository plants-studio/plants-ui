/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Header from "./Header";
import { withKnobs, text, select } from "@storybook/addon-knobs";

export default {
  title: "components/Text/BasicHeader",
  component: Header,
  decorators: [withKnobs],
};

export const header = () => {
  const content = text("children", "개리형배 제1회 천하제일 오른대회");
  const size = select("size", ["small", "medium", "large"], "medium");
  const width = text("width", "");
  return (
    <Header size={size} width={width}>
      {content}
    </Header>
  );
};

header.story = {
  name: "Default",
};

export const samllHeader = () => {
  return <Header size="small">개리형배 제1회 천하제일 오른대회</Header>;
};

export const mediumHeader = () => {
  return <Header size="medium">개리형배 제1회 천하제일 오른대회</Header>;
};

export const largeHeader = () => {
  return <Header size="large">개리형배 제1회 천하제일 오른대회</Header>;
};

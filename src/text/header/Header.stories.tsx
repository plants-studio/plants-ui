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

export const wordkeepMode = () => {
  return (
    <div style={{ width: "150px" }}>
      <Header size="small" isWordKeepMode={true}>
        제목으로 들어갈 예시 텍스트입니다. 이건 이렇게 칸이 너무 많아지면 잘리게
        되어있어요
      </Header>
    </div>
  );
};

export const overflowMode = () => {
  return (
    <div style={{ width: "300px" }}>
      <Header size="small" isOverflowMode={true}>
        제목으로 들어갈 예시 텍스트입니다. 이건 이렇게 칸이 너무 많아지면 잘리게
        되어있어요
      </Header>
    </div>
  );
};

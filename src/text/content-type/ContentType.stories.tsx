/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import ContentType from "./ContentType";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "components/Text/ContentType",
  component: ContentType,
  decorators: [withKnobs],
};

export const contentType = () => {
  const content = text("children", "대회 / 이벤트");
  const width = text("width", "");
  return <ContentType width={width}>{content}</ContentType>;
};

contentType.story = {
  name: "Default",
};

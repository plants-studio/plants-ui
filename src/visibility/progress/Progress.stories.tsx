/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Progress from "./Progress";
import { withKnobs, text, number } from "@storybook/addon-knobs";

export default {
  title: "components/Visibility/Progress",
  component: Progress,
  decorators: [withKnobs],
};

export const progress = () => {
  const percentage = number("percentage", 20);
  const width = text("width", "");
  const color = text("color", "green");
  return (
    <Progress percentage={percentage} width={width} color={color}></Progress>
  );
};

progress.story = {
  name: "Default",
};

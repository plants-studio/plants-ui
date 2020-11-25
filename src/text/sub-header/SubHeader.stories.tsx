/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import SubHeader from "./SubHeader";
import { withKnobs, text, select } from "@storybook/addon-knobs";

export default {
  title: "components/Text/SubHeader",
  component: SubHeader,
  decorators: [withKnobs],
};

export const subHeader = () => {
  const content = text(
    "children",
    "오른장인 개리형이 오픈리그에 나타났습니다. 경기는 탑라인에서 1:1 토너먼트 방식으로 진행되며, 대회날 당일 트위치 생방송을 통해 송출됩니다." +
      "총 10,000 RP 규모의 상금과 “고춘이 그자체” 칭호를 위해 도전하세요!"
  );
  const size = select("size", ["small"], "small");
  const width = text("width", "20%");
  return (
    <SubHeader size={size} width={width}>
      {content}
    </SubHeader>
  );
};

subHeader.story = {
  name: "Default",
};

export const textsubHeader = () => {
  return (
    <SubHeader size="small">
      오른장인 개리형이 오픈리그에 나타났습니다. 경기는 탑라인에서 1:1 토너먼트
      방식으로 진행되며, 대회날 당일 트위치 생방송을 통해 송출됩니다. <br /> 총
      10,000 RP 규모의 상금과 “고춘이 그자체” 칭호를 위해 도전하세요!
    </SubHeader>
  );
};

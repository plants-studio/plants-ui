/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Card from "./Card";
import { withKnobs } from "@storybook/addon-knobs";
import Button from "../button/basic-button/Button";

export default {
  title: "components/Card/Card",
  component: Card,
  decorators: [withKnobs],
};

export const DefaultCard = () => {
  return (
    <Card width={"400px"}>
      <div>
        <span>카드 입니다.</span>
      </div>
    </Card>
  );
};

export const withBackground = () => {
  return (
    <div
      style={{
        backgroundColor: "#EDF0F7",
        height: "500px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card width={"400px"} cardTitle="하하">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>안녕</span>
          <span>안녕</span>
          <span>안녕</span>
          <Button width="100%">검색하기</Button>
        </div>
      </Card>
    </div>
  );
};

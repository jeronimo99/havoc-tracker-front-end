import React from "react";
import Modal from "../../components/Modal";
import {
  Wrapper,
  Card,
  Title,
  Line,
  Label,
  Data,
  LoaderWrapper,
  Loader,
} from "./styles";

const Report = ({
  infected,
  nonInfected,
  inventory,
  infectedPoints,
  isLoading,
  modal,
  onCloseModal,
}) => {
  return (
    <>
      {isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <Wrapper>
          <Card>
            <Title>Reports</Title>
            <Line>
              <Label>Infected: </Label> <Data>{infected} %</Data>
            </Line>
            <Line>
              <Label>Non-infected: </Label> <Data>{nonInfected} %</Data>
            </Line>
            <Line>
              <Label>Average Fiji Water: </Label> <Data>{inventory.fijiWater} un</Data>
            </Line>
            <Line>
              <Label>Average Campbell Soup: </Label> <Data>{inventory.campbellSoup} un</Data>
            </Line>
            <Line>
              <Label>Average First Aid Pouch: </Label> <Data>{inventory.firstAidPouch} un</Data>
            </Line>
            <Line>
              <Label>Average AK-47: </Label> <Data>{inventory.ak47} un</Data>
            </Line>
            <Line>
              <Label>Infected Points Lost: </Label> <Data>{infectedPoints} points</Data>
            </Line>
          </Card>
          {modal.status && <Modal onCloseModal={onCloseModal} >{modal.message}</Modal>}
        </Wrapper>
      )}
    </>
  );
};

export default Report;

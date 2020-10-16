import React from "react";
import {
  Wrapper,
  Card,
  Name,
  Line,
  Age,
  Gender,
  Location,
  Infected,
  NotInfected,
  ItemLine,
  Item,
  LoaderWrapper,
  Loader,
} from "./styles";
import Modal from "../../components/Modal";

const Survivors = ({ survivors, isLoading, modal, onCloseModal }) => {
  return (
    <>
      {isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <Wrapper>
          {survivors.map((survivor) => (
            <Card key={survivor._id} to={`/survivors/${survivor._id}`}>
              <Name>{survivor.name}</Name>
              <Line>
                <Age>Age: {survivor.age}</Age>
                <Gender>
                  {survivor.gender.charAt(0).toUpperCase() +
                    survivor.gender.slice(1)}
                </Gender>
              </Line>
              <Line>
                <Location>
                  Last Location: ({survivor.lastLocation.lat},{" "}
                  {survivor.lastLocation.lng})
                </Location>
                {survivor.isInfected ? (
                  <Infected>Infected</Infected>
                ) : (
                  <NotInfected>Not infected</NotInfected>
                )}
              </Line>
              {!survivor.isInfected && (
                <ItemLine>
                  <Item>Water: {survivor.inventory.water}</Item>
                  <Item>Soup: {survivor.inventory.food}</Item>
                  <Item>First aid: {survivor.inventory.firstAid}</Item>
                  <Item>Guns: {survivor.inventory.gun}</Item>
                </ItemLine>
              )}
            </Card>
          ))}
          {modal.status && (
            <Modal onCloseModal={onCloseModal}>{modal.message}</Modal>
          )}
        </Wrapper>
      )}
    </>
  );
};

export default Survivors;

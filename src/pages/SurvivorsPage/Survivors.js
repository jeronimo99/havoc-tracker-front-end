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
} from "./styles";

const Survivors = ({ survivors }) => {
  return (
    <Wrapper>
      {survivors.map((survivor) => (
        <Card key={survivor._id} >
          <Name>{survivor.name}</Name>
          <Line>
            <Age>Age: {survivor.age}</Age>
            <Gender>{survivor.gender.charAt(0).toUpperCase() + survivor.gender.slice(1)}</Gender>
          </Line>
          <Line>
            <Location>Last Location: ({survivor.lastLocation.lat}, {survivor.lastLocation.lng})</Location>
            {survivor.isInfected ? <Infected>Infected</Infected> : <NotInfected>Not infected</NotInfected>}
          </Line>
          {!survivor.isInfected && <ItemLine>
            <Item>Water: {survivor.inventory.fijiWater}</Item>
            <Item>Soup: {survivor.inventory.campbellSoup}</Item>
            <Item>First aid: {survivor.inventory.firstAidPouch}</Item>
            <Item>ak47: {survivor.inventory.ak47}</Item>
          </ItemLine>}
        </Card>
      ))}
    </Wrapper>
  );
};

export default Survivors;

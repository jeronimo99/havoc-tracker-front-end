import React from "react";
import {
  Wrapper,
  Card,
  User,
  Line,
  Column,
  Title,
  Label,
  Input,
  EvaluateColumn,
  Result,
  Button,
  Loader,
  Text
} from "./styles";
import Modal from "../../../components/Modal";

const Trade = ({
  user1,
  user2,
  result,
  price,
  user1FijiWater,
  user1CampbellSoup,
  user1FirstAidPouch,
  user1Ak47,
  user2FijiWater,
  user2CampbellSoup,
  user2FirstAidPouch,
  user2Ak47,
  user1FijiWaterHandler,
  user1CampbellSoupHandler,
  user1FirstAidPouchHandler,
  user1Ak47Handler,
  user2FijiWaterHandler,
  user2CampbellSoupHandler,
  user2FirstAidPouchHandler,
  user2Ak47Handler,
  onSubmit,
  modal,
  onCloseModal,
  isLoading
}) => {
  return (
    <Wrapper>
      {isLoading ? <Loader/> : <><Card>
        <User>{user1.name}</User>
        <Line>
          <Column>
            <Title>Items (value)</Title>
            <Label>Fiji Water (x{price.fijiWater})</Label>
            <Label>Campbell Soup (x{price.campbellSoup})</Label>
            <Label>First Aid Pouch (x{price.firstAidPouch})</Label>
            <Label>AK-47 (x{price.ak47})</Label>
          </Column>
          <Column>
            <Title>Available</Title>
            <Label>{user1.inventory.fijiWater}</Label>
            <Label>{user1.inventory.campbellSoup}</Label>
            <Label>{user1.inventory.firstAidPouch}</Label>
            <Label>{user1.inventory.ak47}</Label>
          </Column>
          <Column>
            <Title>Trade</Title>
            <Input
              type="number"
              value={user1FijiWater}
              onChange={user1FijiWaterHandler}
            />
            <Input
              type="number"
              value={user1CampbellSoup}
              onChange={user1CampbellSoupHandler}
            />
            <Input
              type="number"
              value={user1FirstAidPouch}
              onChange={user1FirstAidPouchHandler}
            />
            <Input type="number" value={user1Ak47} onChange={user1Ak47Handler} />
          </Column>
        </Line>
      </Card>
      <EvaluateColumn>
        <Text>Balance</Text>
        <Result>{result}</Result>
        <Button onClick={onSubmit} >Trade</Button>
      </EvaluateColumn>
      <Card>
        <User>{user2.name}</User>
        <Line>
          <Column>
            <Title>Trade</Title>
            <Input
              type="number"
              value={user2FijiWater}
              onChange={user2FijiWaterHandler}
            />
            <Input
              type="number"
              value={user2CampbellSoup}
              onChange={user2CampbellSoupHandler}
            />
            <Input
              type="number"
              value={user2FirstAidPouch}
              onChange={user2FirstAidPouchHandler}
            />
            <Input type="number" value={user2Ak47} onChange={user2Ak47Handler} />
          </Column>
          <Column>
            <Title>Available</Title>
            <Label>{user2.inventory.fijiWater}</Label>
            <Label>{user2.inventory.campbellSoup}</Label>
            <Label>{user2.inventory.firstAidPouch}</Label>
            <Label>{user2.inventory.ak47}</Label>
          </Column>
          <Column>
            <Title>Items (value)</Title>
            <Label>Fiji Water (x{price.fijiWater})</Label>
            <Label>Campbell Soup (x{price.campbellSoup})</Label>
            <Label>First Aid Pouch (x{price.firstAidPouch})</Label>
            <Label>AK-47 (x{price.ak47})</Label>
          </Column>
        </Line>
      </Card>
      {modal.status && (
        <Modal onCloseModal={onCloseModal}>{modal.message}</Modal>
      )}</>}
    </Wrapper>
  );
};

export default Trade;

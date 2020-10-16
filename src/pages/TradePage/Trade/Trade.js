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
  Text,
} from "./styles";
import Modal from "../../../components/Modal";

const Trade = ({
  user1,
  user2,
  result,
  price,
  user1water,
  user1food,
  user1firstAid,
  user1gun,
  user2water,
  user2food,
  user2firstAid,
  user2gun,
  user1waterHandler,
  user1foodHandler,
  user1firstAidHandler,
  user1gunHandler,
  user2waterHandler,
  user2foodHandler,
  user2firstAidHandler,
  user2gunHandler,
  onSubmit,
  modal,
  onCloseModal,
  isLoading,
}) => {
  return (
    <Wrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Card>
            <User>{user1.name}</User>
            <Line>
              <Column>
                <Title>Items (value)</Title>
                <Label>Water (x{price.water})</Label>
                <Label>Food (x{price.food})</Label>
                <Label>First Aid (x{price.firstAid})</Label>
                <Label>Guns (x{price.gun})</Label>
              </Column>
              <Column>
                <Title>Available</Title>
                <Label>{user1.inventory.water}</Label>
                <Label>{user1.inventory.food}</Label>
                <Label>{user1.inventory.firstAid}</Label>
                <Label>{user1.inventory.gun}</Label>
              </Column>
              <Column>
                <Title>Trade</Title>
                <Input
                  type="number"
                  value={user1water}
                  onChange={user1waterHandler}
                />
                <Input
                  type="number"
                  value={user1food}
                  onChange={user1foodHandler}
                />
                <Input
                  type="number"
                  value={user1firstAid}
                  onChange={user1firstAidHandler}
                />
                <Input
                  type="number"
                  value={user1gun}
                  onChange={user1gunHandler}
                />
              </Column>
            </Line>
          </Card>
          <EvaluateColumn>
            <Text>Balance</Text>
            <Result>{result}</Result>
            <Button onClick={onSubmit}>Trade</Button>
          </EvaluateColumn>
          <Card>
            <User>{user2.name}</User>
            <Line>
              <Column>
                <Title>Trade</Title>
                <Input
                  type="number"
                  value={user2water}
                  onChange={user2waterHandler}
                />
                <Input
                  type="number"
                  value={user2food}
                  onChange={user2foodHandler}
                />
                <Input
                  type="number"
                  value={user2firstAid}
                  onChange={user2firstAidHandler}
                />
                <Input
                  type="number"
                  value={user2gun}
                  onChange={user2gunHandler}
                />
              </Column>
              <Column>
                <Title>Available</Title>
                <Label>{user2.inventory.water}</Label>
                <Label>{user2.inventory.food}</Label>
                <Label>{user2.inventory.firstAid}</Label>
                <Label>{user2.inventory.gun}</Label>
              </Column>
              <Column>
                <Title>Items (value)</Title>
                <Label>Water (x{price.water})</Label>
                <Label>Food (x{price.food})</Label>
                <Label>First Aid (x{price.firstAid})</Label>
                <Label>Guns (x{price.gun})</Label>
              </Column>
            </Line>
          </Card>
          {modal.status && (
            <Modal onCloseModal={onCloseModal}>{modal.message}</Modal>
          )}
        </>
      )}
    </Wrapper>
  );
};

export default Trade;

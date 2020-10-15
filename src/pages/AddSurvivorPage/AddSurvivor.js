import React from "react";
import {
  Wrapper,
  Form,
  InfoColumn,
  InventoryColumn,
  Title,
  Label,
  TextInput,
  SelectInput,
  Line,
  Column,
  CoordLabel,
  CoordInput,
  Error,
  Subtitle,
  Button,
  Loader,
} from "./styles";
import Modal from "../../components/Modal";

const AddSurvivor = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  modal,
  onCloseModal,
}) => {
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <InfoColumn>
          <Title>Add Survivor</Title>
          <Label htmlFor="name">Name</Label>
          <TextInput
            id="name"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          <Error>{touched.name && errors.name}</Error>

          <Label htmlFor="age">Age</Label>
          <TextInput
            id="age"
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.age}
          />
          <Error>{touched.age && errors.age}</Error>

          <Label htmlFor="gender">Gender</Label>
          <SelectInput
            id="gender"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.gender}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </SelectInput>
          <Error>{touched.gender && errors.gender}</Error>

          <Label>Location</Label>
          <Line>
            <Column>
              <Line>
                <CoordLabel htmlFor="lastLocationLat">Lat</CoordLabel>
                <CoordInput
                  htmlFor="lastLocationLat"
                  id="lastLocationLat"
                  type="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastLocationLat}
                />
              </Line>
              <Error>{touched.lastLocationLat && errors.lastLocationLat}</Error>
            </Column>
            <Column>
              <Line>
                <CoordLabel htmlFor="lastLocationLng">Long</CoordLabel>
                <CoordInput
                  htmlFor="lastLocationLng"
                  id="lastLocationLng"
                  type="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastLocationLng}
                />
              </Line>
              <Error>{touched.lastLocationLng && errors.lastLocationLng}</Error>
            </Column>
          </Line>
        </InfoColumn>

        <InventoryColumn>
          <Subtitle>Inventory</Subtitle>

          <Label htmlFor="water">Fiji water</Label>
          <TextInput
            id="water"
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.water}
          />
          <Error>{touched.water && errors.water}</Error>

          <Label htmlFor="food">Campbell soup</Label>
          <TextInput
            id="food"
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.food}
          />
          <Error>{touched.food && errors.food}</Error>

          <Label htmlFor="firstAid">First aid pouch</Label>
          <TextInput
            id="firstAid"
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstAid}
          />
          <Error>{touched.firstAid && errors.firstAid}</Error>

          <Label htmlFor="gun">gun</Label>
          <TextInput
            id="gun"
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.gun}
          />
          <Error>{touched.gun && errors.gun}</Error>

          {isSubmitting ? (
            <Loader />
          ) : (
            <Button
              type="submit"
              disabled={isSubmitting}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          )}
        </InventoryColumn>
      </Form>
      {modal.status && (
        <Modal onCloseModal={onCloseModal}>{modal.message}</Modal>
      )}
    </Wrapper>
  );
};

export default AddSurvivor;

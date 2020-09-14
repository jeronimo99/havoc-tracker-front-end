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
  Loader
} from "./styles";
import Modal from '../../components/Modal';

const AddSurvivor = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  modal,
  onCloseModal
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
          <Error>{errors.name && touched.name && errors.name}</Error>

          <Label htmlFor="age">Age</Label>
          <TextInput
            id="age"
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.age}
          />
          <Error>{errors.age && touched.age && errors.age}</Error>

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
          <Error>{errors.gender && touched.gender && errors.gender}</Error>

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
              <Error>
                {errors.lastLocationLat &&
                  touched.lastLocationLat &&
                  errors.lastLocationLat}
              </Error>
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
              <Error>
                {errors.lastLocationLng &&
                  touched.lastLocationLng &&
                  errors.lastLocationLng}
              </Error>
            </Column>
          </Line>
        </InfoColumn>

        <InventoryColumn>
          <Subtitle>Inventory</Subtitle>

          <Label htmlFor="fijiWater">Fiji water</Label>
          <TextInput
            id="fijiWater"
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fijiWater}
          />
          <Error>
            {errors.fijiWater && touched.fijiWater && errors.fijiWater}
          </Error>

          <Label htmlFor="campbellSoup">Campbell soup</Label>
          <TextInput
            id="campbellSoup"
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.campbellSoup}
          />
          <Error>
            {errors.campbellSoup && touched.campbellSoup && errors.campbellSoup}
          </Error>

          <Label htmlFor="firstAidPouch">First aid pouch</Label>
          <TextInput
            id="firstAidPouch"
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstAidPouch}
          />
          <Error>
            {errors.firstAidPouch &&
              touched.firstAidPouch &&
              errors.firstAidPouch}
          </Error>

          <Label htmlFor="ak47">AK47</Label>
          <TextInput
            id="ak47"
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.ak47}
          />
          <Error>{errors.ak47 && touched.ak47 && errors.ak47}</Error>

          {isSubmitting ? <Loader/> : <Button type="submit" disabled={isSubmitting} onClick={handleSubmit}>
            Submit
          </Button>}
        </InventoryColumn>
      </Form>
      {modal.status && <Modal onCloseModal={onCloseModal} >{modal.message}</Modal>}
    </Wrapper>
  );
};

export default AddSurvivor;

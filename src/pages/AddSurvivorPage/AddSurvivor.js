import React from "react";
import {
  Wrapper,
  Form,
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
} from "./styles";

const AddSurvivor = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmiting,
}) => {
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
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
              <CoordLabel htmlFor="lastLocationX">X</CoordLabel>
              <CoordInput
                htmlFor="lastLocationX"
                id="lastLocationX"
                type="number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastLocationX}
              />
            </Line>
            <Error>
              {errors.lastLocationX &&
                touched.lastLocationX &&
                errors.lastLocationX}
            </Error>
          </Column>
          <Column>
            <Line>
              <CoordLabel htmlFor="lastLocationY">Y</CoordLabel>
              <CoordInput
                htmlFor="lastLocationY"
                id="lastLocationY"
                type="number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastLocationY}
              />
            </Line>
            <Error>
              {errors.lastLocationY &&
                touched.lastLocationY &&
                errors.lastLocationY}
            </Error>
          </Column>
        </Line>

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

        <Button type="submit" disabled={isSubmiting} onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Wrapper>
  );
};

export default AddSurvivor;

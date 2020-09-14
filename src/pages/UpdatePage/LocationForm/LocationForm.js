import React from "react";
import {
  Wrapper,
  Form,
  Title,
  InputGroup,
  InputColumn,
  Input,
  Button,
  Greetings,
  CoordLabel,
  Loader,
  Error,
} from "./styles";
import Modal from "../../../components/Modal";

const LocationForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  modal,
  onCloseModal,
  username,
}) => {
  return (
    <Wrapper>
      {isSubmitting ? (
        <Loader />
      ) : (
        <Form>
          <Greetings>Welcome {username}</Greetings>
          <Title>Enter your location coords</Title>
          <InputGroup>
            <CoordLabel htmlFor="lastLocationLat">Lat: </CoordLabel>
            <InputColumn>
              <Input
                id="lastLocationLat"
                type="number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastLocationLat}
              />
              <Error>{touched.lastLocationLat && errors.lastLocationLat}</Error>
            </InputColumn>
          </InputGroup>
          <InputGroup>
            <CoordLabel htmlFor="lastLocationLng">Long: </CoordLabel>
            <InputColumn>
              <Input
                id="lastLocationLng"
                type="number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastLocationLng}
              />
              <Error>{touched.lastLocationLng && errors.lastLocationLng}</Error>
            </InputColumn>
          </InputGroup>
          <Button type="submit" disabled={isSubmitting} onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      )}
      {modal.status && (
        <Modal onCloseModal={onCloseModal}>{modal.message}</Modal>
      )}
    </Wrapper>
  );
};

export default LocationForm;

import React from "react";
import {
  Wrapper,
  Form,
  Title,
  InputGroup,
  Input,
  Button,
  Loader,
  Error,
} from "./styles";
import Modal from "../../../components/Modal";

const IdForm = ({
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
      {isSubmitting ? (
        <Loader />
      ) : (
        <Form>
          <Title htmlFor="infected">Enter the name of the infected</Title>
          <InputGroup>
            <Input
              id="infected"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.infected}
            />
            <Error>{touched.infected && errors.infected}</Error>
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

export default IdForm;

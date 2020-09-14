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
          <Title htmlFor="id">Insira seu número de identificação</Title>
          <InputGroup>
            <Input
              id="id"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.id}
            />
            <Error>{touched.id && errors.id}</Error>
          </InputGroup>
          <Button type="submit" disabled={isSubmitting} onClick={handleSubmit}>
            Connect
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

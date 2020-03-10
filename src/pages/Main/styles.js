import styled from 'styled-components';

// COMPONENT CONTAINER
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  background: #024384;
  justify-content: center;
  margin: 80px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  h1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #ffffff;

    svg {
      margin-right: 10px;
    }
  }
`;

// COMPONENT FORM
export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    /* flex: 1 = Ocupa o máximo de espaço */
    flex: 1;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 16px;
    /* 10 vertical e 15 horizontal */
    padding: 10px 15px;
  }
`;

// COMPONENT SUBMIT BUTTON
export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  background: #ffffff;
  border: 0;
  padding: 0 15px;
  border-radius: 4px;
  margin-left: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

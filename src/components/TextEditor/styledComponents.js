import styled from 'styled-components'

export const TextArea = styled.textarea`
  background-color: transparent;
  margin-top: 10px;
  width: 100%;
  height: 60vh;
  padding: 20px;
  text-decoration: ${props =>
    props.underLine === true ? 'underline' : 'normal'};
  font-weight: ${props => (props.bold === true ? 'bold' : 'normal')};
  font-style: ${props => (props.italic === true ? 'italic' : 'normal')};
  border: none;
  color: #f1f5f9;
  border-top: 1px solid #334155;
  outline: none;
  font-size: 18px;
`

export const Button = styled.button`
  background-color: transparent;
  color: ${props => props.color};
  cursor: pointer;
  outline: none;
  margin-right: 15px;
  border: none;
  font-size: 20px;
  font-weight: bold;
`

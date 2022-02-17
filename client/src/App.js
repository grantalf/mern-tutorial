import Landing from './pages/Landing';
import styled from 'styled-components';

const Button = styled.button`
  background: red;
  color: white;
  font-size: 1rem;
`

const ButtonSecond = styled.button`
  background: blue;
  color: white;
  font-size: 1rem;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

function App() {
  return (
    <div>
      <Button>Click Me</Button>
      <ButtonSecond>Click Me</ButtonSecond>
      <h1>Promontory</h1>
      <Landing />
    </div>
  );
}

export default App;

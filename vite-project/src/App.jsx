import { useState } from 'react';
import SignUpForm from './components/SignUpForm';
import Authenticate from './components/Authenticate';

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} />
    </div>
  );
}

export default App;

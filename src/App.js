import './App.css';

import {useLocation} from 'react-router-dom';

export default function App() {
  const location = useLocation();

  const handleClick = () => {
    console.log(location);
  };

  return (
    <div>
      <button onClick={handleClick}>Log location</button>
    </div>
  );
}

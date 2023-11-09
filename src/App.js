import HomePage from './components/pages/HomePage/HomePage';

import './App.css';

function App() {
  const onChangeInput = (e) => {
    alert(e.target.value);
  }


  return (
      <HomePage />
  );
}

export default App;

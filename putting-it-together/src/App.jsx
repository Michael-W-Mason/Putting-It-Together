import logo from './logo.svg';
import './App.css';
import PersonCard from './PersonCard';

function App() {
  return (
    <div>
      <PersonCard firstName={ 'Jane' } lastName='Doe' age = { 45 } hairColor = 'Black'/>
      <PersonCard firstName={ 'John' } lastName='Smith' age = { 88 } hairColor = 'Brown'/>
    </div>
  );
}

export default App;

import { useNavigate } from 'react-router-dom';
import buttons from "./buttons";
import Header from './components/Header';
import Button from './components/Button';

// Stylesheets
import './stylesheets/App.scss';

function App() {
  const navigate = useNavigate();

  const handleClick = (action) => {
    navigate(action);
  }

  const buttonsDisplay = buttons.map(button => (
    <Button
      key={button.action}
      name={button.name}
      description={button.description}
      icon={button.icon}
      bgColor={button.bgColor}
      action={() => handleClick(button.action)} />
  ));

  return (
    <div className="App">
      <Header isHome={true} />
      <div className="btn-wrapper">
        {buttonsDisplay}
      </div>
    </div>
  );
}

export default App;

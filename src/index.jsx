import { createRoot } from 'react-dom/client';


// Import statement to indicate that you need to bundle `./index.scss`
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import { MainView } from './components/main-view/main-view';

// Main component (will eventually use all the others)
const MyFlixApplication = () => {
  return <MainView className="my-flix"/>;
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MyFlixApplication />);
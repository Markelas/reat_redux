import './App.css';
import Likes from "./likes"
import Title from "./Title";
import Comments from "./Comments"
import Spin from "./spin";

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <Spin />
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing"/>
              <Title/>
              <Likes />
          </div>
          <Comments/>
        </div>
      </div>
    </div>
  );
}

export default App;

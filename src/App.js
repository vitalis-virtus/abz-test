import "./sass/main.scss";

//components
import Header from "./components/Header";
import MainHero from "./components/MainHero";
import GetBlock from "./components/GetBlock";
import PostBlock from "./components/PostBlock";

function App() {
  return (
    <div>
      <Header />
      <MainHero />
      <GetBlock />
      <PostBlock />
    </div>
  );
}

export default App;

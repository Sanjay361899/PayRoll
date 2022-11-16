import Main from "../../../component/maindashboard/Main";
import Navigation from "../../../component/templatedashboard/Navigation";
import SideBar from "../../../component/templatedashboard/SideBar";
import "./index.css";
const Home = () => {
  return (
    <div class="grid-container">
      <div class="item1">
        <Navigation />
      </div>
      <div class="item2">
        <SideBar />
      </div>
      <div class="item3">
        <Main />
      </div>
    </div>
  );
};

export default Home;

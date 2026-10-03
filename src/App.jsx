import Carousel from "./components/Carousel";
import SideList from "./components/SideList";

function App() {
  return (
    <div className="grid grid-cols-12">
      <div className="hidden md:block col-span-3 pr-4">
        <SideList/>
      </div>
      <div className="col-span-12 md:col-span-9">
        <Carousel/>
      </div>

    </div>
  );
}

export default App;

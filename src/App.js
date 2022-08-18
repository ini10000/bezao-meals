import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Menu from "./components/Menu";
import Testimonies from "./components/Testimonies";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import FullMenu from "./components/FullMenu";
import Jollof from "./assets/images/Chicken.png";
import Draw from "./assets/images/Draw.png";
import Fries from "./assets/images/Fries.png";
import Egusi from "./assets/images/Egusi.png";
import Beans from "./assets/images/Beans.png";
import Fried from "./assets/images/Fried.png";


let menu = [
  {
    image: Jollof,
    name: "Jollof Rice and Chicken",
    price: "₦ 1,500",
  },
  {
    image: Draw,
    name: "Swallow with Draw Soup",
    price: "₦ 1,000",
  },
  {
    image: Fries,
    name: "Fries with Egg Sauce",
    price: "₦ 1,500",
  },
  {
    image: Egusi,
    name: "Swallow with Egusi Soup",
    price: "₦ 1,500",
  },
  {
    image: Beans,
    name: "Beans",
    price: "₦ 700",
  },
  {
    image: Fried,
    name: "Fried Rice",
    price: "₦ 600",
  },
];

const filter = (name) => {
  const filtered = menu.filter(item => item.name !== name)
  menu = filtered;
  console.log(filtered); // ['Apple', 'Cherry', 'Banana']
}


function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Navbar open={open} setOpen={setOpen} />
      {open === false ? <div>
        <Landing />
        <Menu menu={menu} filter={filter} open={open} setOpen={setOpen} />
        <Testimonies />
        <Blog />
      </div>: <div><FullMenu menu={menu} filter={filter} /></div>}
      <Footer />
    </div>
  );
}

export default App;

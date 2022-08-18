import React from "react";
import Better from "../assets/images/Better.png";
import Broccoli from "../assets/images/Broccoli.png";
import Kung from "../assets/images/Kung.png";
import BlogItem from "./BlogItem";

const BlogItems = [
  {
    image: Better,
    name: "Better Than Takeout Kung Pao Chicken",
    description:
      "This spicy, tangy, and sweet better than takeout no peanut kung pao chicken stir fry recipe",
  },
  {
    image: Broccoli,
    name: "The Best Sesame Soy Broccoli Salad",
    description:
      "Hello broccoli salad! Broccoli salad with a sweet and tangy dressing is my new go to for summer parties. ",
  },
  {
    image: Kung,
    name: "Better Than Takeout Kung Pao Chicken",
    description:
      "This super easy version of dan dan noodles is fast, flavorful, and vegetarian to boot. It's definitely ",
  },
];

function Blog() {
  return (
    <div className="my-[120px] flex items-center flex-col">
      <p className="font-[Lato-Bold] text-[38px] mb-[20px] text-[#030303] leading-[120%]">
        Blog Our Latest News
      </p>
      <p className="text-[16px] w-[420px] text-center text-[#0A244E] opacity-70 leading-[160%] mb-[45px]">
        Have you ever browsed food blogs like mine and wondered how to start a
        food blog of your very own?
      </p>
      <div className="flex flex-wrap justify-center">
        {BlogItems.map((item, index) => (
          <BlogItem
            key={index}
            name={item.name}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;

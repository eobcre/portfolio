import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Image from "../assets/bg-image-01.png";

const About = () => {
  return (
    <div className="grid grid-cols-4 text-main font-custom h-screen">
      {/* left */}
      <div className="flex flex-col gap-4 col-span-2 px-8 py-10">
        {/* back button */}
        <Link to="/" className="self-start">
          <Icon icon="ic:baseline-arrow-back-ios-new" width="30" height="30" className="cursor-pointer hover:opacity-70" />
        </Link>
        {/* page title */}
        <div className="relative flex flex-col flex-1 justify-center items-center gap-6 font-semibold">
          <img src={Image} alt="Image" width={600} height={600} className="absolute inset-0 object-cover opacity-10" />
          <p className="text-9xl">Hello!</p>
          <p className="text-9xl">I'm Emmy.</p>
        </div>
      </div>
      {/* right */}
      <div className="col-span-2 overflow-y-auto px-8 py-30">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus quidem soluta cumque illum vero fuga officiis nulla! Fugiat aliquam ullam omnis sunt ratione, earum quisquam optio
          est esse sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus quidem soluta cumque illum vero fuga officiis nulla! Fugiat aliquam ullam omnis sunt ratione, earum
          quisquam optio est esse sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus quidem soluta cumque illum vero fuga officiis nulla! Fugiat aliquam ullam omnis sunt
          ratione, earum quisquam optio est esse sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus quidem soluta cumque illum vero fuga officiis nulla! Fugiat aliquam
          ullam omnis sunt ratione, earum quisquam optio est esse sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus quidem soluta cumque illum vero fuga officiis nulla!
          Fugiat aliquam ullam omnis sunt ratione, earum quisquam optio est esse sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus quidem soluta cumque illum vero fuga
          officiis nulla! Fugiat aliquam ullam omnis sunt ratione, earum quisquam optio est esse sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus quidem soluta cumque
          illum vero fuga officiis nulla! Fugiat aliquam ullam omnis sunt ratione, earum quisquam optio est esse sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus quidem
          soluta cumque illum vero fuga officiis nulla! Fugiat aliquam ullam omnis sunt ratione, earum quisquam optio est esse sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
          voluptatibus quidem soluta cumque illum vero fuga officiis nulla! Fugiat aliquam ullam omnis sunt ratione, earum quisquam optio est esse sit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quam, voluptatibus quidem soluta cumque illum vero fuga officiis nulla! Fugiat aliquam ullam omnis sunt ratione, earum quisquam optio est esse sit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quam, voluptatibus quidem soluta cumque illum vero fuga officiis nulla! Fugiat aliquam ullam omnis sunt ratione, earum quisquam optio est esse sit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus quidem soluta cumque illum vero fuga officiis nulla! Fugiat aliquam ullam omnis sunt ratione, earum quisquam optio est
          esse sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus quidem soluta cumque illum vero fuga officiis nulla! Fugiat aliquam ullam omnis sunt ratione, earum
          quisquam optio est esse sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus quidem soluta cumque illum vero fuga officiis nulla! Fugiat aliquam ullam omnis sunt
          ratione, earum quisquam optio est esse sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus quidem soluta cumque illum vero fuga officiis nulla! Fugiat aliquam
          ullam omnis sunt ratione, earum quisquam optio est esse sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus quidem soluta cumque illum vero fuga officiis nulla!
          Fugiat aliquam ullam omnis sunt ratione, earum quisquam optio est esse sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus quidem soluta cumque illum vero fuga
          officiis nulla! Fugiat aliquam ullam omnis sunt ratione, earum quisquam optio est esse sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus quidem soluta cumque
          illum vero fuga officiis nulla! Fugiat aliquam ullam omnis sunt ratione, earum quisquam optio est esse sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus quidem
          soluta cumque illum vero fuga officiis nulla! Fugiat aliquam ullam omnis sunt ratione, earum quisquam optio est esse sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
          voluptatibus quidem soluta cumque illum vero fuga officiis nulla! Fugiat aliquam ullam omnis sunt ratione, earum quisquam optio est esse sit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quam, voluptatibus quidem soluta cumque illum vero fuga officiis nulla! Fugiat aliquam ullam omnis sunt ratione, earum quisquam optio est esse sit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quam, voluptatibus quidem soluta cumque illum vero fuga officiis nulla! Fugiat aliquam ullam omnis sunt ratione, earum quisquam optio est esse sit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus quidem soluta cumque illum vero fuga officiis nulla! Fugiat aliquam ullam omnis sunt ratione, earum quisquam optio est
          esse sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus quidem soluta cumque illum vero fuga officiis nulla! Fugiat aliquam ullam omnis sunt ratione, earum
          quisquam optio est esse sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus quidem soluta cumque illum vero fuga officiis nulla! Fugiat aliquam ullam omnis sunt
          ratione, earum quisquam optio est esse sit.
        </p>
      </div>
    </div>
  );
};

export default About;

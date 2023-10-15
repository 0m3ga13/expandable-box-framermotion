import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

const boxes = [
  {
    title: "Box 1",
    bgColor: "bg-red-500",
    colStart: 5,
    colEnd: 7,
    rowStart: 1,
    rowEnd: 4,
    pathname: "/box1",
  },
  {
    title: "Box 2",
    bgColor: "bg-blue-500",
    colStart: 5,
    colEnd: 7,
    rowStart: 4,
    rowEnd: 6,
    pathname: "/box2",
  },
  {
    title: "Box 3",
    bgColor: "bg-green-500",
    colStart: 1,
    colEnd: 5,
    rowStart: 4,
    rowEnd: 5,
    pathname: "/box3",
  },
  {
    title: "Box 4",
    bgColor: "bg-yellow-500",
    colStart: 1,
    colEnd: 5,
    rowStart: 1,
    rowEnd: 4,
    pathname: "/box4",
  },
  {
    title: "Box 5",
    bgColor: "bg-purple-500",
    colStart: 1,
    colEnd: 3,
    rowStart: 5,
    rowEnd: 6,
    pathname: "/box5",
  },
  {
    title: "Box 6",
    bgColor: "bg-pink-500",
    colStart: 3,
    colEnd: 5,
    rowStart: 5,
    rowEnd: 6,
    pathname: "/box6",
  },
];

const Index = () => {
  const router = useRouter();
  const [boxPosition, setBoxPosition] = useState({ x: 0, y: 0 });

  const handleClick = (event, box) => {
    const boxRect = event.currentTarget.getBoundingClientRect();
    const x = boxRect.left + boxRect.width / 2;
    const y = boxRect.top + boxRect.height / 2;

    setBoxPosition({ x, y });

    router.push({
      pathname: box.pathname,
      query: { x, y },
    });
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-full max-w-screen-xl'>
        <div className='grid grid-cols-6 grid-rows-5 gap-1 '>
          {boxes.map((box, index) => (
            <div
              key={index}
              onClick={(event) => handleClick(event, box)}
              className={`col-start-${box.colStart} col-end-${box.colEnd} row-start-${box.rowStart} row-end-${box.rowEnd} p-4 rounded-md ${box.bgColor} cursor-pointer transition-transform hover:scale-105`}
            >
              <p className='text-white'>{box.title}</p>
              <p className='text-white'>Lorem ipsum dolor sit amet.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;

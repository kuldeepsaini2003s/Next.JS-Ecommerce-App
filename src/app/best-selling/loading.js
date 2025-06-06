"use client";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";

export const Loader = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/loading-animation.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  if (!animationData) return null;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="fixed inset-0 z-50 bg-white w-full h-screen flex items-center justify-center">
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  );
};

export default Loader;

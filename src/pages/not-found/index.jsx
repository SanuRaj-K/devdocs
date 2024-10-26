import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/home");
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);
  return (
    <div className=" h-screen w-full flex items-center justify-center content-center">
      <span className="text-2xl">
        Wait <span className="  font-bold">{count}</span> seconds for redirect to Home
      </span>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import Button from "./Button";
import Image from "next/image";

type TimerProps = {
  duration: number;
};

const Timer = () => {
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [remainingTime]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return (
      <p>
        <span>{minutes}</span>
        <span className="text-[1rem]">m</span>{" "}
        <span>{seconds.toString().padStart(2, "0")}</span>
        <span className="text-[1rem]">s</span>
      </p>
    );
  };

  return (
    <div className="border border-light-secondary dark:border-secondary p-3 flex flex-col gap-2 relative">
      <h2 className="text-xl font-semibold">Timer</h2>
      <div className="text-xl">{formatTime(remainingTime)}</div>
      <div className="flex gap-3 flex-wrap">
        <Button onClick={() => setRemainingTime(5 * 60)}>5 Minute</Button>
        {/* start button */}
        <Button
          onClick={() => {
            setRemainingTime(10 * 60);
          }}
        >
          10 Minute
        </Button>
        <Button
          onClick={() => {
            setRemainingTime(30 * 60);
          }}
        >
          30 Minute
        </Button>
      </div>
      <Image
        className="absolute right-0 bottom-0 pointer-events-none"
        src="/girl.gif"
        alt=""
        width={300}
        height={300}
      />
    </div>
  );
};

export default Timer;

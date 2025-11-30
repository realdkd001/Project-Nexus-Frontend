"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Button } from "../ui/button";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function ActiveElectionCard() {
  const calculateTimeLeft = useCallback((): TimeLeft => {
    const endDate = new Date("2025-11-17T23:56:00");
    const now = new Date();
    const diff = endDate.getTime() - now.getTime();

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }, []);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [calculateTimeLeft]);

  const boxes = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full rounded-lg shadow-md p-6 bg-white container">
      <div className="w-full flex flex-col gap-1 mb-6">
        <p className="text-text-primary text-xl font-bold leading-tight tracking-[-0.015em]">
          Presidential Election 2024
        </p>
        <p className="text-text-secondary text-base font-normal leading-normal">
          Vote for the next president. Your vote matters in shaping the future of our nation.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 justify-between">
        <div>
          <p className="text-text-secondary text-sm font-medium leading-normal mb-2">
            Ends in:
          </p>

          <div className="flex gap-2 sm:gap-4">
            {boxes.map((item) => (
              <div key={item.label} className="flex basis-0 flex-col items-stretch gap-2 flex-1">
                <div className="flex h-16 w-16 grow items-center justify-center rounded-lg bg-background-light">
                  <p className="text-text-primary text-2xl font-bold leading-tight tracking-[-0.015em]">
                    {String(item.value).padStart(2, "0")}
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-text-secondary text-xs font-normal leading-normal">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button className="flex min-w-[120px] w-full sm:w-auto cursor-pointer 
          items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-action-blue 
          hover:bg-primary text-slate-50 text-base font-medium leading-normal transition-colors">
          <span className="truncate">Vote Now</span>
        </Button>
      </div>
    </div>
  );
}

export default ActiveElectionCard;

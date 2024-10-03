import { useEffect, useRef, useState } from "react";

export const getReturnValues = (countDown: number) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

export const useCountdown = (targetDate: string) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(Math.max(countDownDate - new Date().getTime(), 0));
  const interval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const newCountDown = Math.max(countDownDate - now, 0);

      setCountDown(newCountDown);

      // Clear interval if countdown reaches zero
      if (newCountDown <= 0) {
        if (interval.current !== null) {
          clearInterval(interval.current);
        }
      }
    }, 1000);

    // Cleanup interval on unmount
    return () => {
      if (interval.current !== null) {
        clearInterval(interval.current);
      }
    };
  }, [countDownDate]);

  return getReturnValues(countDown);
};

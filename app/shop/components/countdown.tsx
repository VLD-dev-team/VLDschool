"use client";

import { useEffect, useState } from "react";

export default function Countdown({ remainingTime }: { remainingTime: number }) {
    const [time, setTime] = useState(remainingTime);

    useEffect(() => {
        let timer = setInterval(() => {
            setTime((time) => {
                if (time <= 0) {
                    clearInterval(timer);
                    return 0;
                } else {
                    return time - 1;
                }
            });
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(timer);
    }, []);

    const days = Math.floor(time / (24 * 3600));
    const hours = Math.floor((time % (24 * 3600)) / 3600).toString().padStart(2, "0");
    const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, "0");
    const seconds = (time % 60).toString().split(".")[0].padStart(2, "0");

    return (
        <p className="text-white md:text-3xl font-mono flex items-center md:justify-end gap-2">
            <span className="bg-white text-black rounded-lg p-3">{days}J</span> ; <span className="bg-white text-black rounded-lg p-3">{hours}h</span> : <span className="bg-white text-black rounded-lg p-3">{minutes}min</span> : <span className="bg-white text-black rounded-lg p-3">{seconds}s</span>
        </p>
    );
}
'use client'

import { startCelebration } from "./celebration";
import { useEffect } from "react";

// TODO: Redux edit props
export default function ProgressionBar({ totalTasks, completedTasks}): {totalTasks: number, completedTasks: number} {
    const completionPercentage: number = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

    useEffect(() => {
        if (completionPercentage === 100) {
          startCelebration();
        }
      }, [completionPercentage]);
// TODO: Replace this class toggling logic with clsx package implementation
    let barColorClass: string;
    if (completionPercentage === 0) {
        barColorClass = '';
    } else if (completionPercentage < 30) {
        barColorClass = 'bg-gradient-to-r from-red-500 to-red-700';
    } else if (completionPercentage < 50) {
        barColorClass = 'bg-gradient-to-r from-orange-500 to-orange-700';
    } else if (completionPercentage < 70) {
        barColorClass = 'bg-gradient-to-r from-yellow-500 to-yellow-700';
    } else if (completionPercentage < 100) {
        barColorClass = 'bg-gradient-to-r from-lime-500 to-lime-700';
    } else {
        barColorClass = 'bg-gradient-to-r from-green-500 to-green-700';
    }

    return (
        <div className="relative w-3/5 mx-auto ">
            <span className="absolute -top-6 left-0 text-gray-700 text-md font-bold">Progress</span>
            <div className="bg-white rounded-full overflow-hidden shadow">
                <div className={`transition-all duration-1000 ease-in-out ${barColorClass} text-black text-sm font-semibold text-center p-1 leading-none rounded-full`}
                     style={{ width: `${completionPercentage}%` }}>
                    {completionPercentage.toFixed(0)}%
                </div>
            </div>
        </div>
    );
}

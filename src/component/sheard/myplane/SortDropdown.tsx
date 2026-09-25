"use client";

import React, { useState } from "react";
import {
  IoIosArrowDown,
  IoIosArrowUp,
} from "react-icons/io";

const SortDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Duration");

  const options = ["Duration", "Calories", "Rating"];

  return (
    <div className="flex items-center gap-2">
      <p className="text-secondary">Sort By</p>

      <div className="relative w-30">
        {/* Dropdown Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between rounded-xl border-2 border-[#252A35] bg-secondary p-2"
        >
          <span>{selected}</span>

          {isOpen ? (
            <IoIosArrowUp size={20} />
          ) : (
            <IoIosArrowDown size={20} />
          )}
        </button>

        {/* Dropdown Options */}
        {isOpen && (
          <div className="absolute z-10 mt-2 w-full rounded-xl border-2 border-[#252A35] bg-secondary p-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                className="block w-full rounded-lg p-2 text-left hover:bg-[#252A35] hover:font-bold"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SortDropdown;
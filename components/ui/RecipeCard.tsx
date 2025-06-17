'use client'
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import { RecipeCardProps } from "@/lib/types";

export default function RecipeCard({ 
  id, 
  title, 
  image, 
  time, 
  category, 
  status, 
  transparent = false, 
  heading = 'h3',
  onFavoriteToggle,
  isFavorite,
  className
}: RecipeCardProps) {
  const handleFavorite = () => {
    if (onFavoriteToggle) {
      onFavoriteToggle(id);
    }
  };

  return (
    <div
      className={ ` ${className} ${
        transparent 
          ? "bg-transparent" 
          : "bg-gradient-to-b from-[#e7f9fd00] to-[#E7F9FD]"
      } rounded-[30px] overflow-hidden hover:shadow-md transition-all relative p-4`}
    >
      <div className="relative mb-2">
        <Image
          src={image || "/placeholder.svg"}
          alt={title || "food"}
          width={400}
          height={300}
          className="w-full h-[250px]  max-h-64 overflow-hidden object-cover rounded-3xl"
        />
        <button
          className="absolute top-4 right-4 
          cursor-pointer bg-white p-2 min-w-10 min-h-10 md:min-w-12 md:min-h-12 flex justify-center items-center rounded-full hover:bg-gray-50 transition-colors"
          onClick={handleFavorite}
        >
          <Heart
            className={`w-5 h-6 md:w-6 md:h-6 ${
              isFavorite || status ? "fill-red-400 text-red-400" : "text-[#DBE2E5] fill-[#DBE2E5]"
            }`}
          />
        </button>
        <div className="pt-4 px-2 typography">
          <Link href="/">
            {React.createElement(heading, {
              className: "mb-3 sm:mb-5"
            }, title)}
          </Link>
          <div className="flex items-center space-x-2">
            <div className="flex items-center pt-2  rounded-full text-sm text-black/60 min-w-[120px] text-center justify-start ">
              <Image
                src="/images/Timer.svg"
                alt="Time Icon"
                width={20}
                height={20}
                className="mr-2"
              />
              <span>{time}</span>
            </div>
            <div className="flex items-center pt-2 rounded-full text-sm text-black/60 min-w-[120px] text-center justify-end ">
              <Image
                src="/images/ForkKnife.svg"
                alt="Chicken Icon"
                width={20}
                height={20}
                className="mr-2"
              />
              <span>{category}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 

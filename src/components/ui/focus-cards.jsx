"use client";;
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(({
  card,
  index,
  link,
  hovered,
  setHovered
}) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-80 w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}>
    <Image
      src={card.src}
      alt={card.title}
      fill
      className="object-cover absolute inset-0 border-[1px] border-neutral-800 rounded-lg" />
    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
        hovered === index ? "opacity-100 cursor-pointer" : "opacity-0"
      )}>
      <div
        className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
        {card.title}
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({
  cards
}) {
  const [hovered, setHovered] = useState(null);

  return (
    (<div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
          <Link key={card.title} href={card.link}>
                <Card
                  key={card.title}
                  card={card}
                  index={index}
                  hovered={hovered}
                  setHovered={setHovered} />
          </Link>
      ))}
    </div>)
  );
}

import React from "react";
import Image from "next/image";
import { Star } from "@mui/icons-material";

interface TestimonyCardProps {
  name: string;
  image: string;
  rating: number;
  testimony: string;
}

const TestimonyCard: React.FC<TestimonyCardProps> = ({
  name,
  image,
  rating,
  testimony,
}) => {
  return (
    <div className="bg-stone-600 rounded-lg p-6 shadow-md max-w-[40ch]">
      <div className="flex items-center mb-4">
        <Image
          src={image}
          alt={`${name}'s profile picture`}
          width={60}
          height={60}
          className="rounded-full mr-4"
        />
        <div>
          <h3 className="font-bold text-lg text-stone-100">{name}</h3>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={i < rating ? "text-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-stone-100">{testimony}</p>
    </div>
  );
};

export default TestimonyCard;

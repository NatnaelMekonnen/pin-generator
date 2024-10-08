import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";

interface SectionCardProps {
  title: string;
  bulletPoints: string[];
  imageSrc?: string;
  imageAlt?: string;
  isComponent?: boolean;
  component?: React.ReactElement;
}

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  bulletPoints,
  imageSrc,
  imageAlt,
  isComponent,
  component,
}) => {
  return (
    <section className="w-full px-10 py-12 bg-stone-100 rounded-lg">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="flex flex-col w-full justify-center items-center md:w-1/2 pr-0 md:pr-8">
          <Typography
            variant="h4"
            className="font-bold mb-4 pb-2 border-b-2 border-gray-700 inline-block"
          >
            {title}
          </Typography>
          <ul className="list-disc pl-5 space-y-2">
            {bulletPoints.map((point, index) => (
              <li key={index} className="font-semibold text-2xl">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          {!isComponent ? (
            <Image
              src={imageSrc || ""}
              alt={imageAlt || ""}
              width={500}
              height={300}
              layout="responsive"
              objectFit="cover"
              className="rounded-lg"
            />
          ) : (
            component
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionCard;

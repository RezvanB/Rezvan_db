"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ImageModalProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, caption, className }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`cursor-pointer inline-block ${className || ''}`} onClick={() => setOpen(true)}>
        <Image
          src={src}
          alt={alt}
          width={640}
          height={400}
          quality={95}
          className="rounded-lg shadow-md object-cover w-full max-w-[220px] h-auto max-h-[140px] sm:max-w-[320px] sm:max-h-[200px] transition-transform duration-200 hover:scale-105"
        />
        {caption && <div className="text-xs text-center text-gray-500 mt-1">{caption}</div>}
      </div>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-2 sm:p-8"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-white rounded-lg shadow-lg max-w-full max-h-full flex flex-col items-center"
            style={{ minWidth: 0 }}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-2xl text-gray-400 hover:text-gray-700 font-bold z-10"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <Image
              src={src}
              alt={alt}
              width={2400}
              height={1600}
              quality={95}
              className="rounded-lg object-contain max-w-[90vw] max-h-[80vh]"
            />
            {caption && <div className="text-sm text-center text-gray-700 mt-2 mb-2 px-2">{caption}</div>}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModal; 
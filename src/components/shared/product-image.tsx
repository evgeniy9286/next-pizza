import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Props{
  className?: string;
  imageUrl: string;
  size: number;
  name: string;
}

export const ProductImage: React.FC<Props> = ({imageUrl, size, name, className}) => {
  return (
    <div className={cn('flex items-center justify-center flex-1 relative w-full', className)}>
      <Image
        src={imageUrl}
        alt={name}
        width={500}
        height={500}
        className={cn("relative left-2 transition-all z-10 duration-300", {
          "w-[300px] h-[300px]": size === 20,
          "w-[400px] h-[400px]": size === 30,
          "w-[500px] h-[500px]": size === 40,
        })}
      />
    </div>
  );
}

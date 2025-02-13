import React from "react";
import Link from 'next/link'
import Image from 'next/image';
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';


interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  className,
}) => {
  return (
    <div className={className}>
      <Link href="/product/1">
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <Image
            width={215}
            height={215}
            src={imageUrl}
            alt={name}
          />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">Ципленок, моцарелла, пармезан</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            {new Intl.NumberFormat("ru-RU", {
              style: "currency",
              currency: "RUB",
              useGrouping: false,
            }).format(price).split(',').join(' ')}
          </span>
          <Button variant="secondary">
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};

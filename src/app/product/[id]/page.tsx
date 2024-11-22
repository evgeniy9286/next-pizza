import { notFound } from 'next/navigation';
import { prisma } from '../../../../prisma/prisma-client'
import { ProductImage, Title } from '@/components/shared';


export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
  
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) {
    return notFound();
  }

  return (
    <div className="container flex my-10">
      <div className='flex flex-1'>
        <ProductImage imageUrl={product.imageUrl} name={product.name} className="" size={40} />
      </div>
      <div className='w-[490px] bg-[#f7f6f5] p-7'>
        <Title text={product.name} size='md' className='font-extrabold mb-1' />
        <p className='text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium repellat in, at nisi consequatur corrupti tempore cum fugit ipsa distinctio? Exercitationem a dolorem excepturi ea quasi nostrum delectus, accusamus laboriosam.</p>
      </div>
    </div>
  );
}
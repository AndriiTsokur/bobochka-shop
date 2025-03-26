import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Fact } from './';
import heroPicture from '/public/images/tshirt-01@2x.webp';

export default function FactSheet() {
	return (
		<div className='flex gap-5'>
			<div className='py-10 w-175'>
				<h1 className='font-black text-5xl uppercase mb-7 select-none'>
					Find a unique print that matches your style and mood
				</h1>

				<p className='mb-2 text-sm font-light select-none'>
					Once upon a time, in a country that no longer exists, in the wonderful
					city of Odesa, there were no words for “T-shirt”, “polo”, “tennis
					shirt”, as there are elsewhere in this fortunately vanished country.
				</p>
				<p className='mb-7 text-sm font-light select-none'>
					In Odesa, they used to say <span className='font-bold'>Bobochka</span>
					! Even my dad... That&apos;s how we named our project. This is a
					project of original prints on very high-quality T-shirts and shoppers.
					Enjoy!
				</p>

				<Button asChild className='w-52 h-13 rounded-full mb-7'>
					<Link href='/shop' className='font-medium select-none'>
						Shop Now
					</Link>
				</Button>

				<div className='flex gap-10'>
					<Fact
						figure={10}
						text='Famous Artists'
						className='flex gap-10 after:content-[""] after:block after:w-[1px] after:h-full after:bg-black select-none'
					/>
					<Fact
						figure={200}
						text='Unique Prints'
						className='flex gap-10 after:content-[""] after:block after:w-[1px] after:h-full after:bg-black select-none'
					/>
					<Fact figure={1000} text='Happy Customers' className='select-none' />
				</div>
			</div>
			<div className='p-5'>
				<Image src={heroPicture} alt='Hero Picture' className='w-150' />
			</div>
		</div>
	);
}

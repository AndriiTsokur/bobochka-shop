import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ShoppingCart, CircleUserRound } from 'lucide-react';

export default function SearchBar() {
	return (
		<div className='flex items-center gap-4 w-full max-w-sm relative'>
			<form action='#' method='post' className='w-full'>
				<Input
					type='text'
					placeholder='Search for products...'
					className='rounded-full pl-10 bg-[#f0f0f0]'
				/>
				<Button
					type='submit'
					variant='ghost'
					size='icon'
					className='rounded-full absolute top-0 left-0'
				>
					<Search className='opacity-40' />
				</Button>
			</form>

			<Link href='/cart'>
				<ShoppingCart className='size-5 link' />
			</Link>
			<Link href='/auth'>
				<CircleUserRound className='size-5 link' />
			</Link>
		</div>
	);
}

import { type CarouselApi } from '@/components/ui/carousel';

interface CarouselDotsProps {
	count: number;
	current: number;
	api?: CarouselApi;
}

export default function CarouselDots({
	count,
	current,
	api,
}: CarouselDotsProps) {
	return (
		<div className='flex justify-center gap-2 mt-4'>
			{Array.from({ length: count }).map((_, idx) => (
				<button
					type='button'
					key={idx}
					className={`w-3 h-3 rounded-full ${
						idx === current ? 'bg-gray-800' : 'bg-gray-400'
					}`}
					onClick={() => api?.scrollTo(idx)}
				/>
			))}
		</div>
	);
}

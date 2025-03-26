'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from '@/components/ui/carousel';
import { Container } from '@/components/shared';
import { FactSheet, CarouselDots } from './';

import banner01 from '/public/images/hero/banner-01.jpg';
import banner02 from '/public/images/hero/banner-02.jpg';
import banner03 from '/public/images/hero/banner-03.jpg';

const banners = [banner01, banner02, banner03];

export default function Hero() {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!api) return;

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap());

		api.on('select', () => {
			setCurrent(api.selectedScrollSnap());
		});
	}, [api]);

	return (
		<>
			<section className='bg-[#f2f0f1] hover:cursor-grab active:cursor-grabbing'>
				<Container>
					<Carousel opts={{ loop: true }} setApi={setApi}>
						<CarouselContent>
							<CarouselItem>
								<FactSheet />
							</CarouselItem>

							{banners.map((banner, idx) => (
								<CarouselItem key={idx}>
									<Image
										src={banner}
										alt={`Banner ${idx + 1}`}
										className='w-full h-full'
									/>
								</CarouselItem>
							))}
						</CarouselContent>

						<CarouselPrevious className='absolute left-10 top-(100%)' />
						<CarouselNext className='absolute right-10 top-(100%)' />
					</Carousel>
				</Container>
			</section>

			<CarouselDots count={count} current={current} api={api} />
		</>
	);
}

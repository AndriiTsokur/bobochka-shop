'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

export default function SignUpNow() {
	const [isVisible, setIsVisible] = useState(true);

	return (
		<>
			{isVisible && (
				<div className='text-white bg-black py-2.5'>
					<p className='text-sm px-5 text-center max-w-7xl mx-auto relative'>
						Sign up and get 20% off to your first order.&nbsp;
						<Link href='/signup' className='link font-semibold underline'>
							Sign Up Now
						</Link>
						<X
							onClick={() => setIsVisible(false)}
							className='link absolute top-1/2 right-5 transform -translate-y-1/2 cursor-pointer w-4 h-4'
						/>
					</p>
				</div>
			)}
		</>
	);
}

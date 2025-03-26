import Image from 'next/image';
import Link from 'next/link';
import { $APP_TITLE } from '@/lib/constants';
import { Container } from '@/components/shared';
import { MenuDesktop, SearchBar } from './';
import logo from '/public/images/logo-full-eng@2x.webp';

export default function NavBar() {
	return (
		<Container>
			<nav className='flex items-center gap-10 justify-between mt-6'>
				<Link href='/'>
					<Image src={logo} alt={`${$APP_TITLE} logo`} className='w-30' />
				</Link>

				<MenuDesktop />
				<SearchBar />
			</nav>
		</Container>
	);
}

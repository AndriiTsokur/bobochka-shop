import Image from 'next/image';
import MenuDesktop from './MenuDesktop';
import SearchBar from './SearchBar';
import { $APP_TITLE } from '@/lib/constants';
import logo from '/public/images/logo-full-eng@2x.webp';
import Link from 'next/link';

export default function NavBar() {
	return (
		<nav className='px-5 max-w-7xl mx-auto flex items-center gap-10 justify-between mt-6'>
			<Link href='/'>
				<Image src={logo} alt={`${$APP_TITLE} logo`} className='w-30' />
			</Link>

			<MenuDesktop />
			<SearchBar />
		</nav>
	);
}

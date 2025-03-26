import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '@/assets/globals.css';
import { $APP_URL, $APP_TITLE, $APP_DESCRIPTION } from '@/lib/constants';
import { Header } from '@/components/shared';

const roboto = Roboto({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	metadataBase: new URL($APP_URL),
	title: { default: $APP_TITLE, template: `%s | ${$APP_TITLE}` },
	description: $APP_DESCRIPTION,
	alternates: {
		canonical: $APP_URL,
		languages: {
			'en-US': `${$APP_URL}/en-US`,
			'de-DE': `${$APP_URL}/de-DE`,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${roboto.className} subpixel-antialiased`}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}

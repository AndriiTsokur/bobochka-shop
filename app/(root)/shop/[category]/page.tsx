import { notFound } from 'next/navigation';
import { $VALID_CATEGORIES } from '@/lib/constants';
import { Container } from '@/components/shared';

interface Props {
	params: {
		category: string;
	};
}

export default async function CategoryPage({ params }: Props) {
	const { category } = await params;

	if (!$VALID_CATEGORIES.includes(category)) {
		notFound();
	}

	return (
		<Container>
			<h1>Category: {category}</h1>
		</Container>
	);
}

// Генерация статических параметров (опционально, для SSG)
export async function generateStaticParams() {
	return [
		{ category: 't-shirts' },
		{ category: 'hoodies' },
		{ category: 'sweatshirts' },
		{ category: 'shopper-bags' },
		{ category: 'collections' },
	];
}

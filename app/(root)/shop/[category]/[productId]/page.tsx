import { Container } from '@/components/shared';

interface Props {
	params: Promise<{
		category: string;
		productId: string;
	}>;
}

export default async function ProductPage({ params }: Props) {
	const { category, productId } = await params;

	return (
		<Container>
			<h1>
				Product ID: {productId} in Category: {category}
			</h1>
		</Container>
	);
}

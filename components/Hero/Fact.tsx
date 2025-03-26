import { Plus } from 'lucide-react';

interface Props {
	figure: number;
	text: string;
	[key: string]: any;
}

export default function Fact({ figure, text, ...rest }: Props) {
	const formattedFigure = figure.toLocaleString('en-US');

	return (
		<div {...rest}>
			<div>
				<p className='font-bold text-4xl flex items-center'>
					{formattedFigure}
					<Plus className='inline-block stroke-3 -ml-0.5' />
				</p>
				<p className='text-xs font-light'>{text}</p>
			</div>
		</div>
	);
}

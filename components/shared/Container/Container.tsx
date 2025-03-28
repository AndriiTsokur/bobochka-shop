interface Props {
	children: React.ReactNode;
}

export default function Container({ children }: Props) {
	return <div className='max-w-7xl mx-auto px-5'>{children}</div>;
}

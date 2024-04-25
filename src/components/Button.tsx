interface ButtonProps {
	text: string; 
	type: 'primary' | 'secondary';
}

const Button = ({ text, type }: ButtonProps) => {
	return (
		<>
			{type === 'primary' ? (
				<button className="bg-[#212806] text-white rounded-full px-8 py-4 flex gap-4 hover:bg-slate-900">
					{text}
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
					</svg>
				</button>
			) : (
				<button className="rounded-full px-8 py-4 flex gap-4 border border-[#212806]">
					{text}
				</button>
			)}
		</>
	)

}

export default Button;
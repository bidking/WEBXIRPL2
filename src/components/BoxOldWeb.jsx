const BoxOldWeb = () => {
	return (
		<div id="BoxOldWeb" className="glass-card">
			<a href="https://drive.google.com/drive/folders/1-8ZaWx3xY5T3Q9FZj59P9LePUm2bYrkf" className="block relative h-full">
				<div className="flex justify-between relative">
					<div className="relative">
						<img src="/link.png" alt="" className="w-auto h-6" />
						<div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary-light animate-ping opacity-60"></div>
					</div>
					<img src="/next.png" alt="" className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
				</div>
				<h1 className="text-gradient-primary text-base font-semibold pr-0 mt-4">Foto di Drive</h1>
				<div className="text-white flex py-2 opacity-60 absolute bottom-3 text-xs items-center">
					Open Drive
					<svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
					</svg>
				</div>
			</a>
		</div>
	)
}

export default BoxOldWeb
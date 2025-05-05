const BoxClassIg = () => {
	return (
		<div id="BoxClassIg" className="glass-card">
		<a href="https://www.instagram.com/exierpeel.two/" className="block relative h-full">
				<div className="flex justify-between relative">
					<div className="relative">
						<img src="/Instagram.svg" alt="" className="w-auto h-10" />
						<div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-tertiary-light animate-ping"></div>
					</div>
					<img src="/next.png" alt="" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
				</div>
				<h1 className="text-gradient-tertiary text-lg font-semibold pr-3 mt-5 absolute bottom-10">
					Class Instagram
				</h1>
				<div className="text-white flex py-2 opacity-60 absolute bottom-3 text-xs items-center">
					View More
					<svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
					</svg>
				</div>
			</a>
		</div>
	)
}

export default BoxClassIg
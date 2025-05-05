import BoxClassIg from "../components/BoxClassIg"
import BoxOldWeb from "../components/BoxOldWeb"
import BoxTextAnonim from "../components/BoxTextAnonim"
import Navbar from "../components/Navbar"

const Home = () => {
	return (
		<div className="text-white px-4 md:px-[8%] lg:px-[10%]" id="Home">
			<Navbar />
			
			{/* Mobile & Tablet */}
			<div className="lg:hidden">
				<div className="font-bold text-4xl md:text-5xl text-center py-12 md:py-20">
					<span className="text-gradient-primary">EX RPL 2</span>
				</div>
				
				<div className="stats-container mb-10 md:mb-16">
					<div className="font-medium text-sm mb-3 text-primary-light uppercase tracking-widest">CLASS STATISTICS</div>
					<div className="glass-card flex justify-between px-8 md:px-10 text-3xl md:text-4xl font-bold py-5 relative">
						<div className="floating text-gradient-tertiary flex items-center justify-center">
							EX
						</div>
						<div className="flex items-center">
							<span className="text-gradient-primary text-4xl md:text-5xl">RPL</span>
							<span className="text-gradient-accent text-4xl md:text-5xl ml-1">2</span>
						</div>
						<div className="floating text-gradient-accent flex items-center justify-center" style={{animationDelay: "1.5s"}}>
							02
						</div>
                        
                        {/* Decorative elements */}
                        <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent-color opacity-50 pulsing"></div>
                        <div className="absolute -bottom-1 -left-1 w-5 h-5 rounded-full bg-primary-color opacity-50 pulsing" style={{animationDelay: "1.5s"}}></div>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
					<BoxClassIg />
					<div className="grid gap-6 md:gap-8">
						<BoxOldWeb />
						<BoxTextAnonim />
					</div>
				</div>
			</div>

			{/* Desktop */}
			<div className="hidden lg:block">
				<div className="flex justify-center items-center flex-col h-screen relative">
                    {/* Decorative elements */}
                    <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-tertiary-dark opacity-10 blur-3xl"></div>
                    <div className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full bg-primary-dark opacity-10 blur-3xl"></div>
                    
					<h5 className="text-xl font-medium mb-4 text-white/90 tracking-wide">
                        <span className="opacity-60">// </span>
                        Hi, ALUMI,KANGEN YA??!
                        <span className="opacity-60"> //</span>
                    </h5>
					<h1 className="text-7xl font-extrabold mb-3 tracking-tight hero-text" data-text="WELCOME">
						WELCOME
					</h1>
					<h6 className="text-base tracking-[8px] text-white/90 mb-2">
						TO <span className="text-gradient-primary">EX RPL 2</span>
					</h6>
                    
                    {/* Cyberpunk-style decorative line */}
                    <div className="relative w-60 h-px bg-gradient-to-r from-transparent via-primary-light to-transparent my-8">
                        <div className="absolute -top-1 left-1/2 w-4 h-2 bg-primary-light rounded-full transform -translate-x-1/2"></div>
                    </div>
                    
					<div className="mt-4 flex space-x-6">
  <a href="https://www.instagram.com/exierpeel.two/" target="_blank" rel="noopener noreferrer" className="btn-primary">
    About Us
  </a>
  <a href="https://drive.google.com/drive/folders/1-8ZaWx3xY5T3Q9FZj59P9LePUm2bYrkf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
  Explore
  </a>
</div>

				</div>
			</div>
		</div>
	)
}

export default Home
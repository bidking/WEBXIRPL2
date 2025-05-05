import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ButtonSend from "../components/ButtonSend"
import ButtonRequest from "../components/ButtonRequest"
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage"
import Modal from "@mui/material/Modal"
import { Box, IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { useSpring, animated } from "@react-spring/web"

const Gallery = () => {
	const [images, setImages] = useState([])
	const [open, setOpen] = useState(false)
	const [selectedImage, setSelectedImage] = useState(null)

	// Animation for modal fade effect
	const modalFade = useSpring({
		opacity: open ? 1 : 0,
		transform: open ? "translateY(0)" : "translateY(-20px)",
		config: { tension: 280, friction: 60 },
	})

	// Fetch images from Firebase Storage
	const fetchImagesFromFirebase = async () => {
		try {
			const storage = getStorage()
			const storageRef = ref(storage, "/GambarAman")

			const imagesList = await listAll(storageRef)

			const imageURLs = await Promise.all(
				imagesList.items.map(async (item) => {
					const url = await getDownloadURL(item)
					return url
				}),
			)

			setImages(imageURLs)
		} catch (error) {
			console.error("Error fetching images from Firebase Storage:", error)
		}
	}

	useEffect(() => {
		fetchImagesFromFirebase()
	}, [])

	// Slider settings
	const settings = {
		centerMode: true,
		centerPadding: "30px",
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: "50px",
					slidesToShow: 1,
					dots: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: "70px",
					slidesToShow: 1,
					dots: false,
				},
			},
		],
	}

	const handleImageClick = (imageUrl) => {
		setSelectedImage(imageUrl)
		setOpen(true)
	}

	const handleCloseModal = () => {
		setOpen(false)
		setSelectedImage(null)
	}

	return (
		<div className="relative z-10 pt-10 pb-16">
			{/* Background gradient effect */}
			<div className="absolute inset-0 z-[-1] bg-gradient-to-b from-transparent via-[rgba(0,247,255,0.05)] to-transparent"></div>
			
			<div className="text-white text-base font-semibold mb-4 mx-[10%] mt-10 lg:text-center lg:text-3xl lg:mb-8" id="Gallery">
				<span className="text-gradient-primary">Class Gallery</span>
			</div>
			
			<div id="Carousel" className="glass-card mx-[5%] p-4 mb-8">
			<Slider {...settings}>
    {images.map((imageUrl, index) => (
        <div key={index} className="p-2">
            <div 
                className="overflow-hidden rounded-lg border border-[rgba(0,247,255,0.2)] shadow-lg relative cursor-pointer"
                onClick={() => handleImageClick(imageUrl)} // Pindahkan onClick ke div parent
            >
                <img
                    src={imageUrl}
                    alt={`Image ${index + 1}`}
                    className="w-full h-56 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,11,19,0.6)] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end pointer-events-none">
                    <span className="text-white p-3 text-sm">Gallery Item {index + 1}</span>
                </div>
            </div>
        </div>
    ))}
</Slider>
			</div>

			<div className="flex justify-center items-center gap-6 text-base mt-5 lg:mt-8">
				<ButtonSend />
				<ButtonRequest />
			</div>

			<Modal
				open={open}
				onClose={handleCloseModal}
				aria-labelledby="image-modal"
				aria-describedby="image-modal-description"
				className="flex justify-center items-center">
				<animated.div
					style={modalFade}
					className="bg-[rgba(18,18,30,0.85)] backdrop-blur-xl p-4 rounded-2xl border border-[rgba(0,247,255,0.12)] max-w-[90vw] relative">
					<IconButton
						edge="end"
						onClick={handleCloseModal}
						aria-label="close"
						sx={{
							position: "absolute",
							top: "12px",
							right: "12px",
							backgroundColor: "rgba(255,255,255,0.1)",
							color: "#fff",
							'&:hover': {
								backgroundColor: "rgba(255,255,255,0.2)",
							}
						}}>
						<CloseIcon />
					</IconButton>
					<div className="pt-8 pb-2">
						<img
							src={selectedImage}
							alt="Selected Image"
							className="max-w-full max-h-[80vh] rounded-lg shadow-xl"
						/>
					</div>
				</animated.div>
			</Modal>
		</div>
	)
}

export default Gallery
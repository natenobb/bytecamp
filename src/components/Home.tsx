import homeBannerBackground from "../images/home-banner-background.png"
import homeBannerImage from "../images/home-banner-image.png"
import { ArrowRight } from "lucide-react"
import Navbar from "./Navbar"

const Home = () => {
    return (
        <div className="relative">
            <Navbar />

            <div className="relative">
                <img className="absolute right-0 w-[70%] z-0" src={homeBannerBackground} alt="home banner background" />

                <div className="flex items-center gap-10 justify-around relative w-full min-h-screen p-10">
                    <div className="w-[30%] mt-[100px]">
                        <p className="font-bold text-[#4C4C4C] text-6xl">Your Favourite Food Delivered Hot & Fresh</p>

                        <p className="mt-10 text-[#4C4C4C] text-lg font-semibold">Healthy Switchers chefs do all the prep work, like peeding, chopping, & marinating, so you can cook a fresh food.</p>

                        <button className="flex items-center gap-3 px-5 py-3 font-semibold rounded-full bg-yellow-500 text-white mt-10">
                            <p>Order Now</p>

                            <ArrowRight />
                        </button>
                    </div>

                    <img src={homeBannerImage} alt="home banner image" />
                </div>
            </div>
        </div>
    )
}

export default Home
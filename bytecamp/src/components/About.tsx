import { Play } from "lucide-react";
import aboutBackgroundImage from "../images/about-background-image.png";
import aboutBackground from "../images/about-background.png";

const About = () => {
    return (
        <div id="about" className="mt-[200px] ming-h-screen relative flex items-center">
            <img src={aboutBackground} alt="about background" />

            <div className="absolute flex items-center justify-around gap-10">
                <img src={aboutBackgroundImage} alt="about background image" />

                <div>
                    <p className="text-4xl font-bold text-[#4C4C4C]">Food Is An Important Part Of A Balanced Diet</p>

                    <p className="text-lg text-[#4C4C4C] mt-5 font-semibold">You can choose menus that are rich in nutriens and have special benefits, such as dieting.</p>

                    <p className="text-lg text-[#4C4C4C] mt-5 font-semibold">Just tell us what you want to eat, and we'll make it for you with balanced nutrition</p>

                    <div className="mt-5 flex items-center gap-5">
                        <button className="px-5 py-3 rounded-full bg-yellow-500 text-white font-semibold">Learn More</button>

                        <button className="flex items-center gap-3">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white">
                                <Play className="fill-white" />
                            </div>

                            <p>Watch Video</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
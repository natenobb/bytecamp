import { ShoppingCart } from "lucide-react"
import logo from "../images/Logo.png"

const Navbar = () => {
    return (
        <div className="fixed z-20 top-0 left-0 right-0 flex items-center gap-5 justify-between p-5 w-full bg-transparent">
            <div className="w-full">
                <img className="w-[100px]" src={logo} alt="" />
            </div>

            <div className="flex items-center gap-10 w-full justify-center">
                <a href="#" className="font-semibold">Home</a>

                <a href="#about" className="font-semibold">About</a>

                <a href="#" className="font-semibold">Testimonials</a>

                <a href="#" className="font-semibold">Contact</a>
            </div>

            <div className="flex items-center gap-5 w-full justify-end">
                <button className="cursor-pointer">
                    <ShoppingCart />
                </button>

                <button className="px-5 py-3 bg-white rounded-full cursor-pointer font-semibold">
                    Booking Now
                </button>
            </div>
        </div>
    )
}

export default Navbar
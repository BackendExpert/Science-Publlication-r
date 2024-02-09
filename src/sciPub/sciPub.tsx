import { Link } from "react-router-dom"
import ViewMore from "./viewMore"



const sciPub = () => {
  return (
    <div className="container mx-auto px-10">
        <h1 className="text-center my-8 text-3xl font-semibold">Recent Scientific Publication</h1>
        <div className="md:grid grid-cols-3 gap-4 mt-4 mb-12">
            <div className="md:my-0 mt-8 mb-12">
                <Link to={'/viewMore'}>
                    <img src="https://images.wallpaperscraft.com/image/single/car_red_sports_car_142598_300x168.jpg" alt="" className="rounded w-screen" />
                    <p className="mt-[-40px] ml-8 text-white font-semibold">Awareness</p>
                    <p className="mt-8 text-md font-300">Stop the next pandemic? Stop illegal wildlife trade!</p>
                </Link>
            </div>
            <div className="md:my-0 my-12">
                <a href="" className="">
                    <img src="https://images.wallpaperscraft.com/image/single/car_red_sports_car_142598_300x168.jpg" alt="" className="rounded w-screen" />
                    <p className="mt-[-40px] ml-8 text-white font-semibold">Awareness</p>
                    <p className="mt-8 text-md font-300">Stop the next pandemic? Stop illegal wildlife trade!</p>
                </a>
            </div>
            <div className="md:my-0 my-12">
                <a href="" className="">
                    <img src="https://images.wallpaperscraft.com/image/single/car_red_sports_car_142598_300x168.jpg" alt="" className="rounded w-screen" />
                    <p className="mt-[-40px] ml-8 text-white font-semibold">Awareness</p>
                    <p className="mt-8 text-md font-300">Stop the next pandemic? Stop illegal wildlife trade!</p>
                </a>
            </div>
        </div>
    </div>
  )
}

export default sciPub
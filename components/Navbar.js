import data from '../utils/menus.json';
import { BsFillBellFill, BsSearch } from 'react-icons/bs'
import Image from 'next/image';

const Navbar = ({ setFilters, filters }) => {
    return (
        <div className="w-full bg-primary m-h-['100px'] py-4 px-2 md:px-16">
            <div className="flex items-center justify-between">
                <div>
                    <p className="font-righteous font-normal text-xl md:text-3xl text-white">MyProperty</p>
                </div>
                <div className="relative hidden md:block">
                    <input type="text" placeholder="Search Location..." className="py-3 px-2 rounded-md text-red w-full text-xs min-w-[300px] outline-none"
                    />
                    <button className="absolute flex items-center justify-center right-2 top-1 bg-primary w-8 h-8 rounded-md py-2 px-2">
                        <BsSearch color="white" />
                    </button>
                </div>
                <div className="flex items-center gap-8">
                    <ul className="flex items-center gap-8 text-white font-poppins">
                        {data.menuData.map((item, index) => (
                            <li key={index} className="relative">
                                <a className={`${item.purpose === filters.purpose && 'after:!opacity-[1]'} cursor-pointer hover:after:opacity-[1] after:opacity-0 after:bg-second
                                after:w-full after:h-1 after:absolute after:-bottom-6 after:left-0 after:transition-all after:duration-500 capitalize`}
                                    onClick={() => {
                                        setFilters({
                                            ...filters,
                                            purpose: item.purpose,
                                        })
                                    }}>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a className="relative after:bg-red-500 after:w-2 after:h-2 after:absolute after:top-0 after:right-0 after:rounded-xl cursor-pointer">
                        <BsFillBellFill color="white" />
                    </a>
                    <Image src="/images/profile.jpg" width={38} height={38} className="rounded-full" alt="Profile image" />
                </div>
            </div>
        </div>
    )
}

export default Navbar;
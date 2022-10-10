import Image from 'next/image'
import { FaMapPin, FaHeart } from 'react-icons/fa';
import { BiBed, BiRectangle } from 'react-icons/bi';
import { TbBath } from 'react-icons/tb';
const Card = ({ item, view, setPosition }) => {

    //if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return (
        <div className="bg-white w-full mt-4 rounded-md py-2 px-4 cursor-pointer" onClick={() => setPosition({
            lat: item.geography.lat,
            lng: item.geography.lng
        })}>
            <div className="flex justify-between gap-2">
                <div className={`flex items-center gap-4 flex-[4] ${view === 'grid' && 'flex-col'}`}>
                    <div className={`${view === 'grid' ? '!max-w-full' : ''} max-w-[160px] w-full !max-h-[110px] h-full relative flex-1`}>
                        <Image src={item.coverPhoto.url} objectFit="cover" layout='fill'
                            className="rounded-md" quality={50} alt="Cover image"/>
                    </div>
                    <div className="flex flex-col gap-2 flex-1 my-2">
                        <div className="flex items-center gap-1 flex-grow-0 flex-shrink-0">
                            <h4 className="font-poppins font-semibold text-sm">
                                {item.title}
                            </h4>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaMapPin color="#00B97C" />
                            <span>{item.title_l1}</span>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="flex items-center gap-1 mt-1">
                                <BiBed color="#899494" size={30} />
                                <span className="font-righteous font-bold text-[#899494] text-lg">{item.rooms}</span>
                            </div>

                            <div className="flex items-center gap-1 mt-1">
                                <TbBath color="#899494" size={30} />
                                <span className="font-righteous font-bold text-[#899494] text-lg">{item.baths}</span>
                            </div>
                            <div className="flex items-center gap-1 mt-1">
                                <BiRectangle color="#899494" size={30} />
                                <span className="font-righteous  text-[#899494] text-lg">{item.area.toFixed()}</span>
                            </div>
                            <div className="w-[100px] h-[16px]  relative">
                                <Image src="/icons/review-icon.png" layout='fill' objectFit="contain" alt="Cover image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 flex-1 flex justify-end ">
                    <div className="flex flex-col justify-between items-end mt-4">
                        <FaHeart color="#00B97C" />
                        <h4 className="font-poppins font-bold text-primary text-lg">
                            ${item.price}
                        </h4>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Card;
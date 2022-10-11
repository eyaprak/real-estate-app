import React from "react";
import GoogleMapReact from 'google-map-react'
import Image from "next/image";



const Map = ({ houses, setChildClicked, position }) => {
    return (
        <div className="w-full h-[500px] min-h-[500px] flex-1 order-2">
            {position && (
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: 'AIzaSyBpcAu4qH5-YlUROHKdbaUiPJh3asV21DA',
                    }}
                    className="m-h-[1200px]"
                    style={{
                        width: '100%', minHeight: '700px', position: 'relative'
                    }}
                    center={position}
                    zoom={12}
                    onChildClick={(child) => setChildClicked(child)}
                >
                    {houses.hits.map((house, i) => (
                        <div
                            className="bg-white shadow-lg w-[100px] border-2 border-primary"
                            lat={Number(house.geography.lat)}
                            lng={Number(house.geography.lng)}
                            key={i}>
                            <div className="flex flex-col items-center justify-center gap-2 !bg-white shadow-2xl">
                                <div className="w-[100px] h-[50px] relative" >
                                    <Image src={house.coverPhoto.url} layout="fill" objectFit="cover" className="w-full h-full" alt="Cover image" />
                                </div>
                                <span className="text-center">
                                    {house.title}
                                </span>
                            </div>
                        </div>
                    ))}
                </GoogleMapReact >
            )
            }
        </div >

    );
}
export default Map;
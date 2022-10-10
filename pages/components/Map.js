import React, { useState, createRef, useEffect } from "react";
import GoogleMapReact from 'google-map-react'
import Image from "next/image";


const Map = ({ houses, setChildClicked, position }) => {
    return (
        <div className="w-full min-h-[500px] flex-1">
            {position && (
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: 'AIzaSyBpcAu4qH5-YlUROHKdbaUiPJh3asV21DA'
                    }}
                    center={position}
                    zoom={12}
                    onChildClick={(child) => setChildClicked(child)}
                >
                    {houses.hits.map((house, i) => (
                        <div
                            className="bg-white shadow-lg w-[100px] h-full border-4 border-primary"
                            lat={Number(house.geography.lat)}
                            lng={Number(house.geography.lng)}
                            key={i}>
                            <div className="flex flex-col items-center justify-center gap-2 !bg-white shadow-lg">
                                <div className="w-[100px] h-[50px] relative" >
                                    <Image src={house.coverPhoto.url} layout="fill" objectFit="cover" alt="Cover image" />
                                </div>
                                <span className="text-center">
                                    {house.title}
                                </span>
                            </div>
                        </div>
                    ))}
                </GoogleMapReact >
            )}
        </div>

    );
}
export default Map;
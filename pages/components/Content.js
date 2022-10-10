import { useEffect, useState } from 'react';
import HouseList from './HouseList/HouseList';
import Map from './Map';
import { options, getData } from '../../utils/getData'
import { InfinitySpin } from "react-loader-spinner";
import Navbar from './Navbar';

const Content = () => {
    const [position, setPosition] = useState({
        lat: 25.186663,
        lng: 55.273898
    });
    const [houses, setHouses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState({
        minPrice: '',
        maxPrice: '',
        bed: '',
        bath: '',
        page: 0,
        purpose: 'for-rent',
    });

    useEffect(() => {
        if (filters.bed) {
            options.params.roomsMin = filters.bed;

        }
        if (filters.bath) {
            options.params.bathsMin = filters.bath;
        }
        if (filters.minPrice) {
            options.params.priceMin = filters.minPrice;
        }
        if (filters.maxPrice) {
            options.params.priceMax = filters.maxPrice;
        }
        if (filters.purpose) {
            options.params.purpose = filters.purpose;
        }
        options.params.page = 0;
        if (filters.page > 0) {
            options.params.page = filters.page;
        }
        const fetchData = async () => {
            setLoading(true);
            const response = await getData('https://bayut.p.rapidapi.com/properties/list', options);
            setHouses(response);
            setLoading(false);
        }
        fetchData();
    }, [filters])


    useEffect(() => {
        if (houses.length > 0) {
            setPosition({
                lat: houses[0].geography.lat,
                lng: houses[0].geography.lng
            })
        }
    }, [houses])


    if (houses.length === 0) return (
        <div className="flex items-center justify-center">
            <InfinitySpin
                width='200'
                color="#4fa94d"
            />
        </div>
    );


    return (
        <>
            <Navbar setFilters={setFilters} filters={filters} />
            <div className="px-16 py-10 flex gap-10 mx-auto">
                <Map houses={houses} position={position} />
                <HouseList loading={loading} filters={filters} houses={houses} setFilters={setFilters} setPosition={setPosition} />

            </div>
        </>
    )
}

export default Content;
import Card from "./Card";
import Filters from "./Filters";
import Button from "./Button";
import { useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
const HouseList = ({ loading, houses, filters, setFilters, setPosition }) => {
    const [view, setView] = useState("list");
    return (
        <div className="flex-1 order-1">
            <Filters setView={setView} view={view} setFilters={setFilters} filters={filters} itemLimit={houses?.nbHits} />
            {houses.hits.length > 0 ?
                <div className="flex flex-col items-center ">
                    {loading && <InfinitySpin
                        width="200"
                        color="#4fa94d"
                    />}
                    <div className={`${view === "list" ? "grid grid-cols-1 md:flex md:flex-col md:items-center w-full" : "grid grid-cols-1 md:grid-cols-2 gap-4 "}`}>

                        {houses?.hits.map((item, index) => (
                            <Card key={index} item={item} view={view} loading={loading} setPosition={setPosition}
                            />
                        ))}
                    </div>
                    <Button filters={filters} setFilters={setFilters} itemLimit={houses?.nbPages} />
                </div>
                : <div className="flex-1 flex justify-center mt-6 font-poppins font-bold">We couldn&apos;t find any data😔</div>
            }
        </div>
    )
}

export default HouseList;
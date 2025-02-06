import React from 'react'

const LocationSearchPanel = (props) => {
    console.log(props);

    //sample array for locations
    const locations = [
        "24B, Near Kapoor's cafe , Shreyians Coding School , Kanpur",
        "22C, Near Sharma's cafe , Shreyians Coding School , Kanpur",
        "20B, Near Awasthi's cafe , Shreyians Coding School , Kanpur",
        "28B, Near Malhotra's cafe , Shreyians Coding School , Kanpur"

    ]
    return (
        <div>
            {/* this is just a sample data */}
            {
                locations.map(function (elem, idx) {
                    return <div  key = {idx} onClick={() => {
                        props.setvehiclePanel(true)
                        props.setpanelOpen(false)
                    }}
                        className='flex  gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
                        <h2 className='bg-[#eee] h-8 w-12 flex items-center justify-center  rounded-full'><i className="ri-map-pin-line"></i></h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </div>
                })
            }
        </div>
    )
}

export default LocationSearchPanel
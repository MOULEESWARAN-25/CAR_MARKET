import React from "react";
import { Card } from "flowbite-react";
import Car from "../Carcard/images/car.svg";
import Heart from "../Carcard/images/heart.svg";
import Dot from "../Carcard/images/dot.svg";
import Location from "../Carcard/images/location.svg";  
export default function Carcard() {
  return (
    <div>
      <Card className="max-w-sm">
        <img src={Car} alt="Car" width={290} />
        <div className="flex justify-between items-center font-medium ml-2 mr-2">
          <p>Mercedes</p>
          <img src={Heart} />
        </div>
        <div className="flex gap-3 text-sm bg-[#FFE5C6] rounded-lg justify-center items-center p-1 pr-3 pl-3">
          <p>30,895 km</p>
          <img src={Dot} />
          <p>Diesel</p>
          <img src={Dot} />
          <p>Manual</p>
          <img src={Dot} />
          <p>2nd Owner</p>
        </div>
        <div className="flex gap-1 justify-between ml-2">
          <p className="font-medium">Rs. 5.2L</p>
          <div className="flex gap-2 items-center mr-2">
            <p>City, Location</p>
            <img src = {Location} width={22}/>
          </div>
        </div>
        <button className="border-2 rounded-xl border-[#FF9E0C] bg-[#FF9E0C] text-white p-3 font-medium">View Details</button>
      </Card>
    </div>
  );
}
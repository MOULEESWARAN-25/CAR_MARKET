import React, { useRef } from 'react';
import Header from '../Header/header';
import { Card, Button, Label, Select } from "flowbite-react";
import { ReactComponent as ChevronLeft } from './image/chevron_left.svg';
import { ReactComponent as ChevronRight } from './image/chevron_right.svg';
import Maruti from './image/maruti.png';
import Ford from './image/ford.png';
import Honda from './image/honda.png';
import Hyundai from './image/hyundai.png';
import Mahindra from './image/mahindra.png';
import Tata from './image/tata.png';
import MercedesBenz from './image/mercedes_benz.png';
import Nissan from './image/nissan.png';
import Volkswagen from './image/volkswagen.png';
import BMW from './image/bmw.png'; 
import Model1 from './image/model1.png';
import Model2 from './image/model2.png';
import Model3 from './image/model3.png';
import Model4 from './image/model4.png';
import Model5 from './image/model5.png';

const SellCarOne = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center mt-6">
        <h1 className="text-3xl font-semibold">Sell{" "}<span className="text-orange-400">Car</span> Online</h1>
        <Card className="w-full max-w-3xl mt-6 shadow-md">
          <div className="space-y-4">
            {/* Car Brand Selection */}
            <div> 
              <Label htmlFor="brand" className="text-xl p-6">Select your car{" "}<span className="text-orange-400">Brand</span></Label>
              <div className="grid grid-cols-5 gap-4 p-6">
                <Button color="light" className="hover:border-orange-400  hover:border-2 focus:border-2  focus:border-orange-400 focus:outline-none focus:ring-0 flex flex-col items-center justify-center h-24 w-24">
                  <img src={Maruti} alt="Car 1" className="h-19 w-19" />
                </Button>
                <Button color="light" className="hover:border-orange-400 hover:border-2 focus:border-2  focus:border-orange-400 focus:outline-none focus:ring-0 flex flex-col items-center justify-center h-24 w-24">
                  <img src={Ford} alt="Car 2" className="h-19 w-19" />
                </Button>
                <Button color="light" className="hover:border-orange-400 hover:border-2 focus:border-2  focus:border-orange-400 focus:outline-none focus:ring-0 flex flex-col items-center justify-center h-24 w-24">
                  <img src={Mahindra} alt="Car 3" className="h-19 w-19" />
                </Button> 
                <Button color="light" className="hover:border-orange-400 hover:border-2 focus:border-2  focus:border-orange-400 focus:outline-none focus:ring-0 flex flex-col items-center justify-center h-24 w-24">
                  <img src={MercedesBenz} alt="Car 4" className="h-19 w-19" />
                </Button>
                <Button color="light" className="hover:border-orange-400 hover:border-2 focus:border-2  focus:border-orange-400 focus:outline-none focus:ring-0 flex flex-col items-center justify-center h-24 w-24">
                  <img src={Nissan} alt="Car 5" className="h-19 w-19" />
                </Button>
                <Button color="light" className="hover:border-orange-400 hover:border-2 focus:border-2 focus:border-orange-400 focus:outline-none focus:ring-0 flex flex-col items-center justify-center h-24 w-24">
                  <img src={Tata} alt="Car 6" className="h-19 w-19" />
                </Button>
                <Button color="light" className= " hover:border-2 focus:border-2 hover:border-orange-400 focus:border-orange-400 focus:outline-none focus:ring-0 flex flex-col items-center justify-center h-24 w-24">
                  <img src={Volkswagen} alt="Car 7" className="h-19 w-19" />
                </Button>
                <Button color="light" className=" hover:border-2 focus:border-2 hover:border-orange-400 focus:border-orange-400 focus:outline-none focus:ring-0 flex flex-col items-center justify-center h-24 w-24">
                  <img src={BMW} alt="Car 8" className="h-19 w-19" />
                </Button>
                <Button color="light" className=" hover:border-2 focus:border-2 hover:border-orange-400 focus:border-orange-400 focus:outline-none focus:ring-0 flex flex-col items-center justify-center h-24 w-24">
                  <img src={Honda} alt="Car 9" className="h-19 w-19" />
                </Button>
                <Button color="light" className="hover:border-2 focus:border-2 hover:border-orange-400 focus:border-orange-400 focus:outline-none focus:ring-0 flex flex-col items-center justify-center h-24 w-24">
                  <img src={Hyundai} alt="Car 10" className="h-19 w-19" />
                </Button>
              </div>
            </div>
            {/* Car Model Selection */}
            <div>
              <Label htmlFor="brand" className="text-xl p-6">Select <span className="text-orange-400">Model</span> of your car</Label>
              <div className="relative w-full p-6">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
                  <Button 
                    color="light" 
                    onClick={() => scroll(-300)}
                    className="p-2 bg-transparent hover:bg-white focus:outline-none focus:ring-0 border-none rounded-full w-8 h-8 flex items-center"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                </div>
                <div 
                  ref={scrollContainerRef}
                  className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar whitespace-nowrap pb-4 pl-12 pr-12"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch'
                  }}
                >
                  <Button color="light" className="hover:border-2 focus:border-2 hover:border-orange-400 focus:border-orange-400 focus:outline-none focus:ring-0 flex flex-col items-center justify-center flex-shrink-0 h-24 w-24">
                    <img 
                      src={Model1} 
                      alt="Car 1" 
                      className="h-19 w-19 object-cover" 
                    />
                  </Button>
                  <Button color="light" className="hover:border-2 focus:border-2 hover:border-orange-400 focus:border-orange-400 focus:outline-none focus:ring-0 flex flex-col items-center justify-center flex-shrink-0 h-24 w-24">
                    <img 
                      src={Model2} 
                      alt="Car 2" 
                      className="h-19 w-19 object-cover" 
                    />
                  </Button>
                  <Button color="light" className=" hover:border-2 focus:border-2 hover:border-orange-400 focus:border-orange-400 focus:outline-none focus:ring-0 flex flex-col items-center justify-center flex-shrink-0 h-24 w-24">
                    <img 
                      src={Model3} 
                      alt="Car 3" 
                      className="h-19 w-19 object-cover" 
                    />
                  </Button>
                  <Button color="light" className=" hover:border-2 focus:border-2 hover:border-orange-400 focus:border-orange-400 focus:outline-none focus:ring-0 flex flex-col items-center justify-center flex-shrink-0 h-24 w-24">
                    <img 
                      src={Model4} 
                      alt="Car 4" 
                      className="h-19 w-19 object-cover" 
                    />
                  </Button>
                  <Button color="light" className="hover:border-2 focus:border-2 hover:border-orange-400 focus:border-orange-400 focus:outline-none focus:ring-0 flex flex-col items-center justify-center flex-shrink-0 h-24 w-24">
                    <img 
                      src={Model5} 
                      alt="Car 5" 
                      className="h-19 w-19 object-cover" 
                    />
                  </Button>
                  <Button color="light" className="hover:border-2 focus:border-2 hover:border-orange-400 focus:border-orange-400 focus:outline-none focus:ring-0 flex flex-col items-center justify-center flex-shrink-0 h-24 w-24">
                    <img 
                      src={Model1} 
                      alt="Car 6" 
                      className="h-19 w-19 object-cover" 
                    />
                  </Button>
                  <Button color="light" className="hover:border-2 focus:border-2  hover:border-orange-400 focus:border-orange-400 focus:outline-none focus:ring-0 flex flex-col items-center justify-center flex-shrink-0 h-24 w-24">
                    <img 
                      src={Model2} 
                      alt="Car 7" 
                      className="h-19 w-19 object-cover" 
                    />
                  </Button>

                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
                  <Button 
                    color="light" 
                    onClick={() => scroll(300)}
                    className="p-2 bg-transparent hover:bg-white focus:outline-none focus:ring-0 border-none rounded-full w-8 h-8 flex items-center"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex justify-end ">
              <Button className="text-white bg-orange-400 focus:ring-1 focus:ring-orange-400 px-3 py-2 text-lg font-semibold rounded-md h-10 w-50 items-center ">
                Submit
              </Button>
            </div>

          </div>
        </Card>
      </div>
    </div>
  );
};

export default SellCarOne;

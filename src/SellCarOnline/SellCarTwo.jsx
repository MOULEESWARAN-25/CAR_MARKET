import React from 'react';
import Header from '../Header/header';
import { Card, Button } from 'flowbite-react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function SellCarOnline() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center mt-6">
        <h1 className="text-3xl font-semibold text-center">
          <span className="text-orange-400">Sell</span> Car Online
        </h1>
        <div className="w-full max-w-3xl mt-6 shadow-lg bg-white rounded-lg">
          <div className="rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-medium p-6">Please Enter Your Car Details</h2>
            <form className="space-y-4 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <label htmlFor="registration-year" className="block text-sm font-medium text-gray-700">
                    Registration Year
                  </label>
                  <div className="relative">
                    <input
                      id="registration-year"
                      type="date"
                      className="mt-1 block text-gray-400 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-400 focus:ring-orange-400 sm:text-sm pr-8"
                      placeholder="dd-mm-yyyy"
                    />
                    <ChevronDownIcon className="h-5 w-5 absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label htmlFor="year-of-manufacture" className="block text-sm font-medium text-gray-700">
                    Year of Manufacture
                  </label>
                  <div className="relative">
                    <input
                      id="year-of-manufacture"
                      type="date"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-400 focus:ring-orange-400 sm:text-sm text-gray-400 pr-8"
                      placeholder="dd-mm-yyyy"
                    />
                    <ChevronDownIcon className="h-5 w-5 absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label htmlFor="ownership" className="block text-sm font-medium text-gray-700">
                    Ownership
                  </label>
                  <div className="relative">
                    <select
                      id="ownership"
                      className="mt-1 block w-full rounded-md text-gray-500 border-gray-300 bg-white shadow-sm focus:border-orange-400 focus:ring-orange-400 sm:text-sm pr-8"
                    >
                      <option className="text-gray-500">Select One</option>
                      <option className="text-gray-500">First Owner</option>
                      <option className="text-gray-500">Second Owner</option>
                      <option className="text-gray-500">Third Owner</option>
                    </select>
                    <ChevronDownIcon className="h-5 w-5 absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label htmlFor="rto-location" className="block text-sm font-medium text-gray-700">
                    RTO Location
                  </label>
                  <div className="relative">
                    <select
                      id="rto-location"
                      className="mt-1 text-gray-500 block w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-orange-400 focus:ring-orange-400 sm:text-sm pr-8"
                    >
                      <option>City</option>
                    </select>
                    <ChevronDownIcon className="h-5 w-5 absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label htmlFor="kms-driven" className="block text-sm font-medium text-gray-700">
                    Kms Driven
                  </label>
                  <div className="relative">
                    <select
                      id="kms-driven"
                      className="mt-1 block text-gray-500 w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-orange-400 focus:ring-orange-400 sm:text-sm pr-8"
                    >
                      <option>--Select Range--</option>
                    </select>
                    <ChevronDownIcon className="h-5 w-5 absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label htmlFor="engine-displacement" className="block text-sm font-medium text-gray-700">
                    Engine Displacement
                  </label>
                  <input
                    id="engine-displacement"
                    type="text"
                    placeholder="------"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-400 focus:ring-orange-400 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="no-of-seats" className="block text-sm font-medium text-gray-700">
                    No. of Seats
                  </label>
                  <input
                    id="no-of-seats"
                    type="number"
                    placeholder="0"
                    min="0"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-400 focus:ring-orange-400 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="fuel-type" className="block text-sm font-medium text-gray-700">
                    Fuel Type
                  </label>
                  <div className="relative">
                    <select
                      id="fuel-type"
                      className="mt-1 text-gray-500 block w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-orange-400 focus:ring-orange-400 sm:text-sm pr-8"
                    >
                      <option className="text-gray-500">--Select Type--</option>
                    </select>
                    <ChevronDownIcon className="h-5 w-5 absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label htmlFor="transmission" className="block text-sm font-medium text-gray-700">
                    Transmission
                  </label>
                  <div className="relative">
                    <select
                      id="transmission"
                      className="mt-1 text-gray-500 block w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-orange-400 focus:ring-orange-400 sm:text-sm pr-8"
                    >
                      <option>--Select One--</option>
                    </select>
                    <ChevronDownIcon className="h-5 w-5 absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-400" />
                  </div>
                </div>
              </div>
              <div className="flex justify-end pt-6">
                <Button className="text-white bg-orange-400 focus:ring-1 focus:ring-orange-400 px-3 py-2 text-lg font-semibold rounded-md h-10 w-50 items-center">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
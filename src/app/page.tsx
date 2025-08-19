"use client"

import { useEffect, useState } from "react";
import React from 'react'
import CategoryBadge from '../components/CategoryBadge';
import { HiSortAscending, HiSortDescending } from "react-icons/hi";
import ContactHeader from "@/components/ContactHeader";


type Spot = {
  categoryName: string;
  code: string;
  fullName: string;
  categoryId: number;
  price: number;
};

type groupedSpots = {
  [category: string]: Spot[];
};
  
  export default function Page() {
    const [groupedSpots, setGroupedSpots] = useState<groupedSpots>({});
    const [sortBy, setSortBy] = useState<string | null>(null);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  
  
  useEffect(() => {
    console.log("testing");
    
    const fetchData = async () => {
      const response = await fetch("https://api.sharenet.co.za/api/v1/px2/spots");
      const data = await response.json();

      const grouped: groupedSpots = {};
      data.spots.forEach((spot: Spot) => {
        if (!grouped[spot.categoryName]) {
          grouped[spot.categoryName] = [];
        }
        if (grouped[spot.categoryName].length < 5) {
          grouped[spot.categoryName].push(spot);
        }
      });
      setGroupedSpots(grouped);
    };
    fetchData();
  }, []);

  console.log(groupedSpots);


  const flatSpots = Object.values(groupedSpots).flat();

  const handleSort = (category: string) => {
    if (sortBy === category) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(category);
      setSortOrder('asc');
    }
  };

  const sortedSpots = [...flatSpots].sort((a, b) => {
    if (!sortBy) return 0;
    if (sortBy === 'categoryId') {
      return sortOrder === 'asc'
        ? a.categoryId - b.categoryId
        : b.categoryId - a.categoryId;
    }
    if (sortBy === 'categoryName') {
      return sortOrder === 'asc'
        ? a.categoryName.localeCompare(b.categoryName)
        : b.categoryName.localeCompare(a.categoryName);
    }
    return 0;
  });
  
  return (
    <>
    <ContactHeader />
  <div className="min-h-screen p-2 sm:p-8 flex items-center justify-center">
  <div className="w-full max-w-5xl overflow-x-auto">
  <table className="w-full bg-[#181818] text-white rounded-xl overflow-hidden shadow-lg">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm"> 
                <div className="flex items-center">
                  <span className="hidden sm:block">Category ID</span>
                  <span className=" sm:hidden">ID</span>
                  <button
                    type="button"
                    onClick={() => handleSort("categoryId")}
                    className="ml-2"
                  >
                    {sortBy === 'categoryId' && sortOrder === 'asc' ? (
                      <HiSortAscending className="inline w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
                    ) : (
                      <HiSortDescending className="inline w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
                    )}
                  </button>
                </div>
              </th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm">Full Name</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm hidden sm:table-cell">Code</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm">
                <div className="flex items-center">
                  Category Name
                  <button
                    type="button"
                    onClick={() => handleSort("categoryName")}
                    className="ml-2"
                  >
                    {sortBy === 'categoryName' && sortOrder === 'asc' ? (
                      <HiSortAscending className="inline w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
                    ) : (
                      <HiSortDescending className="inline w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
                    )}
                  </button>
                </div>
              </th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm">Price</th>
            </tr>
          </thead>
          <tbody>
            {sortedSpots.map((spot, idx) => (
              <tr key={spot.categoryName + idx} className="border-b border-gray-800 hover:bg-gray-900 transition">
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs  md:text-lg">{spot.categoryId}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs md:text-lg">{spot.fullName}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 hidden sm:table-cell">{spot.code}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3">
                  {(() => {
                    switch (spot.categoryName) {
                      case "COMMODOTIES":
                        return <CategoryBadge name={spot.categoryName} colour="#FF005C" className="text-xs sm:text-sm w-28 sm:w-40 h-7 sm:h-8" />;
                      case "CURRENCIES":
                        return <CategoryBadge name={spot.categoryName} colour="#FFC000" className="text-xs sm:text-sm w-28 sm:w-40 h-7 sm:h-8" />;
                      case "JSE INDICES":
                        return <CategoryBadge name={spot.categoryName} colour="#07B0D7" className="text-xs sm:text-sm w-28 sm:w-40 h-7 sm:h-8" />;
                      case "SA BONDS":
                        return <CategoryBadge name={spot.categoryName} colour="#f59e42" className="text-xs sm:text-sm w-28 sm:w-40 h-7 sm:h-8" />;
                      case "WORLD INDICES":
                        return <CategoryBadge name={spot.categoryName} colour="#009788" className="text-xs sm:text-sm w-28 sm:w-40 h-7 sm:h-8" />;
                      default:
                        return <CategoryBadge name={spot.categoryName} colour="#6B7280" className="text-xs sm:text-sm w-28 sm:w-40 h-7 sm:h-8" />; // gray
                    }
                  })()}
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">{spot.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

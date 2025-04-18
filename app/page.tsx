"use client";

// import Image from "next/image";
// import Est6 from "@/components/est6";
import React, { useState, useEffect } from "react";
import { UseState } from "@/components/useState";
// import { WeatherDashboard } from "@/components/RWD";

export default function Home() {
  const [data, setData] = useState<string[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const URL = `https://jsonplaceholder.typicode.com/users`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (response.status !== 200) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setData(data);
      } catch (error: any) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [URL]);

  return (
    <div>
      {/* Array Destructuring */}
      {/* <Est6
        brand={"hello"}
        model={"GH46"}
        type={"Ford"}
        year={2004}
        color={"Gray"} 
      /> */}
      <div>
        {data.map((item: any, index) => (
          <div className="text-center my-4" key={index}>
            <h1>Name: {item.name}</h1>
            <p> Email: {item.email}</p>
            <p> Phone: {item.phone}</p>
            <p> Website: {item.website}</p>
            <p> Address: {item.address.street}</p>
            <p> City: {item.address.city}</p>
          </div>
        ))}
      </div>
      <div>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error: {isError}</p>}
      </div>
      <UseState />
    </div>
  );
}

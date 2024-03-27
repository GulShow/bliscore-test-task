"use client";
import { useEffect, useState } from "react";
import data from "../utils/data.json";
import CityBlock from "../components/CityBlock";
import { ITreeData } from "../utils/interfaces";

export default function Home() {
  const [treeData, setTreeData] = useState<ITreeData[]>([]);
  useEffect(() => {
    setTreeData(data);
  }, []);
  return (
    <div>
      {treeData.map((city) => (
        <CityBlock key={city.cityId} name={city.name} shops={city.children} />
      ))}
    </div>
  );
}

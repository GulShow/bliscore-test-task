import { ICityBlock } from "@/src/utils/interfaces";
import React from "react";
import ShopBlock from "../ShopBlock";

const CityBlock = ({ name, shops }: ICityBlock) => {
  const allEmployees = shops?.flatMap((shop) => shop.children);
  const totalSalary = allEmployees?.reduce((acc, emp) => acc + emp.salary, 0);
  const averageAge =
    allEmployees?.reduce((acc, emp) => acc + emp.age, 0) / allEmployees?.length;

  return (
    <div>
      {name} Salary:{totalSalary} Age:{averageAge.toFixed(1)}
      {shops?.map((shop) => (
        <ShopBlock
          key={shop.shopId}
          name={shop.name}
          employees={shop.children}
        />
      ))}
    </div>
  );
};

export default CityBlock;

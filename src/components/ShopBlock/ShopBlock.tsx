import { IShopBlock } from "@/src/utils/interfaces";
import React from "react";
import EmployeeBlock from "../EmployeeBlock";

 const ShopBlock = ({ name, employees }: IShopBlock) => {
  const totalSalary = employees?.reduce((acc, emp) => acc + emp?.salary, 0);
  const averageAge =
    employees?.reduce((acc, emp) => acc + emp.age, 0) / employees?.length;

  return (
    <div className="pl-[20px]">
      {name} Salary:{totalSalary} Age:{averageAge.toFixed(1)}
      {employees?.map((emp, index) => (
        <EmployeeBlock key={index} {...emp} />
      ))}
    </div>
  );
};

export default ShopBlock

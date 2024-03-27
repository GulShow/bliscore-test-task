import { IEmployeeBlock } from "@/src/utils/interfaces";
import React from "react";

const EmployeeBlock = ({ name, salary, age }: IEmployeeBlock) => {
  return (
    <div className="pl-[40px]">
      {name} Salary:{salary} Age:{age}
    </div>
  );
};

export default EmployeeBlock

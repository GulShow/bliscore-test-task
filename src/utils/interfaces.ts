export interface IEmployeeBlock {
  name: string;
  salary: number;
  age: number;
}

interface IEmployee {
  name: string;
  age: number;
  salary: number;
  managerId: string;
}

export interface IShopBlock {
  name: string;
  employees: IEmployee[];
}

interface IShop {
  name: string;
  shopId: string;
  children: IEmployee[];
}

export interface ICityBlock {
  name: string;
  shops: IShop[];
}

export interface ITreeData {
  name: string;
  cityId: string;
  children: {
    name: string;
    shopId: string;
    children: {
      name: string;
      age: number;
      salary: number;
      managerId: string;
    }[];
  }[];
}

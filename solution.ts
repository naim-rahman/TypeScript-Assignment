const formatValue = (
  value: string | number | boolean ): string | number | boolean => {
  
  if (typeof value === "string") {
    return value.toUpperCase();
  } 
  else if (typeof value === "number") {
    return value * 10;
  } 
  else if (typeof value === "boolean") {
    return !value;
  }
  return value;
  
};




const getLength = (value: string | any[]): number => {

   if (Array.isArray(value)) {
    return value.length;
   } 
   else if (typeof value === "string") {
     return value.length;
   }
   return 0;
};




class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}



type Item = {
  title: string;
  rating: number;
};
const filterByRating = (items: Item[]): Item[] => {
  return items.filter((item) => item.rating >= 4);
};



type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};
const filterActiveUsers = (users: User[]): User[] => {
  return users.filter((item) => item.isActive === true);
};




interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
const printBookDetails = (book: Book) => {
  return `Title: ${book.title}, Author: ${book.author}, Publication: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`;
}





type Lookup = {
  [key: string]: boolean;
};

const getUniqueValues = (
  arr1: (number | string)[], 
  arr2: (number | string)[]): 
  (number | string)[] => {

  const lookup: Lookup = {};
  const result: (number | string)[] = [];

  for (let i = 0; i < arr1.length; i++) {
    const value = arr1[i];
    if (!lookup[value]) {
      lookup[value] = true;
      result.push(value);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    const value = arr2[i];
    if (!lookup[value]) {
      lookup[value] = true;
      result.push(value);
    }
  }
  return result;
};





type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]): number => {
  return products.map(product => {

      let productTotal = product.price * product.quantity;

      if (product.discount) {
        productTotal = productTotal * (1 - product.discount / 100);
      }
      return productTotal;
    })

    .reduce((sum, current) => sum + current, 0);
}

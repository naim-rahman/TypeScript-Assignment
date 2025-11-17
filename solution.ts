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

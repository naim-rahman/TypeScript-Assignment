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


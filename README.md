# TypeScript Interview Questions – Blog

## Interface vs Type - পার্থক্য কী?
TypeScript-এ **interface** এবং **type** দুইটাই object-এর structure define করতে ব্যবহার হয়। কিন্তু এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে—

### **1️ Declaration Merging**
- **interface** একাধিকবার declare করা যায়। পরে TypeScript এগুলো merge করে নেয়।
- **type** একাধিকবার declare করা যায় না। একই নামে দ্বিতীয়বার type লিখলে error দেয়।

### **2️ Extending**
- **interface** সহজেই অন্য interface বা type কে **extends** করতে পারে।
- **type** ও অন্য type/interface কে **extends** করতে পারে, তবে এটি সাধারণত **intersection (&)** দিয়ে কাজ করে।

### **3️ Use-cases**
- **interface** → object structure বা class contract define করতে বেশি ব্যবহৃত হয়।
- **type** → union, tuple, primitive aliases ইত্যাদি complex types define করার জন্য বেশি ব্যবহৃত হয়।

####  উদাহরণ
```ts
interface User {
  name: string;
}

interface User {
  age: number;
}
// Merged: { name: string; age: number }

// type

type Person = {
  name: string;
  age: number;
};

// ❌ পুনরায় type Person declare করা যাবে না।
```
---

## any vs unknown vs never – পার্থক্য কী?
TypeScript-এ তিনটি special type আছে – **any**, **unknown**, এবং **never**। এগুলো জানা খুবই জরুরি।

### **1️ Any **
- যে কোনো মান রাখা যায়।
- TypeScript কোনো checking করবে না।
- ভুল হওয়ার সম্ভাবনা বেশি।

```ts
let data: any;
data = 10;
data = "Hello";
data.toUpperCase(); // কোনো সমস্যা নেই
```

### **2️ Unknown **
- যে কোনো মান রাখা যায়, কিন্তু **ব্যবহারের আগে type check করতে হয়**।
- এটি `any` থেকে তুলনামুলক safer।

```ts
let info: unknown = "Hello";

info.toUpperCase(); // ❌ Error

if (typeof info === "string") {
  info.toUpperCase(); // ✔️ Safe
}
```

### **3️ Never – কখনো কিছু return করবে না**
- Never সাধারণত এমন function-এ use হয় যেটা সবসময় error throw করে।

```ts
function crash(): never {
  throw new Error("Something went wrong");
}
```

---

- `interface` structure define করার জন্য flexible, আর `type` আরও powerful কারণ এটি union/tuple ইত্যাদি handle করতে পারে।
- `any` হলো unsafe, `unknown` হলো safe alternative, আর `never` ব্যবহার হয় এমন function-এ যা কখনো return করে না।


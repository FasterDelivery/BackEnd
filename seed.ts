import User from "./models/User";
import Package from "./models/Package";
import { IPackage } from "./interfaces/IPackage";
import { IUser } from "./interfaces/IUser";
import db from "./config/db";

const packages: IPackage[] = [
  {
    clientname: "Juan",
    //   image:
    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIB3NY4W2KF4kREMY22TLKnaMvqRKHbTy4WA&usqp=CAU",
    quantity: 2,
    weight: 3,
    deliveryday: new Date(2023, 5, 19),
    address: "Amenabar 2356, CABA",
    status: "Entregado"
  },
  {
    clientname: "Pedro",
    //  image:
    //  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIB3NY4W2KF4kREMY22TLKnaMvqRKHbTy4WA&usqp=CAU",
    quantity: 8,
    weight: 1,
    deliveryday: new Date(2023, 6, 19),
    address: "Av. Carabobo y Rivadavia, CABA",
    status: "En curso"
  },
  {
    clientname: "Gerardo",
    //  image:
    //  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIB3NY4W2KF4kREMY22TLKnaMvqRKHbTy4WA&usqp=CAU",
    quantity: 2,
    weight: 3,
    deliveryday: new Date(2023, 6, 20),
    address: "Mendoza 1810, CABA",
    status: "Pendiente"
  },
  {
    clientname: "Mateo",
    // image:
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIB3NY4W2KF4kREMY22TLKnaMvqRKHbTy4WA&usqp=CAU",
    quantity: 4,
    weight: 5,
    deliveryday: new Date(2023, 6, 13),
    address: "Mitre 1500",
    status: "Entregado"
  },
  {
    clientname: "Alexis",
    //  image:
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIB3NY4W2KF4kREMY22TLKnaMvqRKHbTy4WA&usqp=CAU",
    quantity: 12,
    weight: 13,
    deliveryday: new Date(2023, 4, 21),
    address: "Avenida Santa Fe 65",
    status: "Pendiente"
  },
  {
    clientname: "Marcelo",
    //  image:
    //  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIB3NY4W2KF4kREMY22TLKnaMvqRKHbTy4WA&usqp=CAU",
    quantity: 2,
    weight: 3,
    deliveryday: new Date(2023, 5, 19),
    address: "Pellegrini 2055",
    status: "En curso"
  },
  {
    clientname: "Belen",
    // image:
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIB3NY4W2KF4kREMY22TLKnaMvqRKHbTy4WA&usqp=CAU",
    quantity: 7,
    weight: 6,
    deliveryday: new Date(2023, 2, 21),
    address: "Colon 50",
    status: "En curso"
  }
];
const users: IUser[] = [
  {
    name: "Farid",
    lastname: "Murzone",
    email: "farid@mail.com",
    address: "Calle 123",
    phone: "123456789",
    password: "123456789",
    isAdmin: false,
    status: "en progreso"
  },
  {
    name: "Pepito",
    lastname: "perez",
    email: "pepito@mail.com",
    address: "Mitre 1500",
    phone: "123456789",
    password: "123456789",
    isAdmin: true,
    status: "en progreso"
  }
];

async function createAllPackages() {
  try {
    await db.sync(); // Asegúrate de sincronizar el modelo con la base de datos antes de crear los paquetes
    await Package.bulkCreate(packages);
    console.log("Seedeo exitoso");
  } catch (error) {
    console.error("Error en el seedeo de paquetes:", error);
  }
}
async function createAllUsers() {
  try {
    await db.sync();
    for (const user of users) {
      await User.create(user);
    }
    console.log("Seedeo exitoso");
  } catch (error) {
    console.error("Error en el seedeo de usuarios:", error);
  }
}
// async function createAllUsers() {
//   try {
//     await db.sync();
//     await Promise.all(users.map((user) => User.create(user)));
//     console.log("seedeo exitoso");
//   } catch (error) {
//     console.error("error en el seedeo de usuarios", error);
//   }
// }

createAllPackages();
createAllUsers();

import {Point} from 'geojson';
import mongoose, {Document} from 'mongoose';

type Category = {
  _id: mongoose.Types.ObjectId;
  category_name: string;
};

type Species = Partial<Document> & {
  species_name: string;
  category: mongoose.Types.ObjectId;
  image: string;
  location: Point;
};

type Animal = Partial<Document> & {
  animal_name: string;
  species: mongoose.Types.ObjectId;
  birthdate: Date;
  gender: 'male' | 'female';
  owner: mongoose.Types.ObjectId;
};

type User = Partial<Document> & {
  user_name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
};

type UserWithoutPassword = Omit<User, 'password'>;

type UserWithoutPasswordRole = Omit<UserWithoutPassword, 'role'>;

export {
  Category,
  Species,
  Animal,
  User,
  UserWithoutPassword,
  UserWithoutPasswordRole,
};

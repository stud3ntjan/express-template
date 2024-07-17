// src/models/userModel.ts
import { User } from "../interfaces/user";

const users: User[] = [
  { userId: "1", name: "John Doe", email: "john.doe@example.com" },
  { userId: "2", name: "Jane Smith", email: "jane.smith@example.com" },
  // Weitere Benutzer hinzufügen
];

export const getUserById = (userId: string): User | undefined => {
  return users.find((user) => user.userId === userId);
};

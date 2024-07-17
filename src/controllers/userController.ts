// src/controllers/userController.ts
import { Controller, Get, Route, Tags, Path } from "tsoa";

interface User {
  userId: string;
  name: string;
  email: string;
}

@Route("user")
@Tags("User")
export class UserController extends Controller {
  @Get("{userId}")
  public async getUser(@Path() userId: string): Promise<User> {
    // Mock user data
    return {
      userId,
      name: "John Doe",
      email: "john.doe@example.com",
    };
  }
}

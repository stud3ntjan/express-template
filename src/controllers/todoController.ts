import { Controller, Get, Route } from "tsoa";
import { Todo } from "../models/todoModel";

@Route("todos")
export class TodoController extends Controller {
  @Get("/")
  public async getTodos(): Promise<Todo[]> {
    return [
      { id: 1, title: "Learn TypeScript", completed: false },
      { id: 2, title: "Integrate tsoa", completed: true },
    ];
  }
}

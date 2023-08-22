import { HttpException, Injectable } from "@nestjs/common";
// import { CommentCreateSchema } from "./dummyjson.zod";
import { CommentCreateSchema } from "@jlm/common";

@Injectable()
export class DummyjsonService {
  async getUser(id: number) {
    const abortController = new AbortController();
    return fetch(`https://dummyjson.com/users/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((json) => json)
      .catch((err) => console.log(err));
  }

  async createCommment<T>(newComment: T) {
    const abortController = new AbortController();
    const result = await fetch("https://dummyjson.com/comments/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((json) => json)
      .catch((err) => console.log(err));
    try {
      return CommentCreateSchema.parse(result);
    } catch (error) {
      throw new HttpException(
        "The response from DummyJSON doesn't match the expecting scheme",
        501,
      );
    }
  }
}

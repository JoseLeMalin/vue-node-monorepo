import { Injectable } from "@nestjs/common";
import { CommentContent } from "src/data-transfer-objects/dummyjson-dto";

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
    return fetch("https://dummyjson.com/comments/add", {
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
  }
}

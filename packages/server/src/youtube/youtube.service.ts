import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class YoutubeService {
  findUserPlaylists(): string {
    const result = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${youtubeChannelId}&key=${googleAPIKey}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        signal: abortController.signal,
      },
    )
      .then((res) => res.json())
      .then((json) => json)
      .catch((err) => console.log(err));

    return result;
  }
}

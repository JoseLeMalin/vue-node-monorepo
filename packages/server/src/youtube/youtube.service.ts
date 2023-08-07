import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

import { googleAPIKey } from "../../../common/secrets/secrets-constants";
@Injectable()
export class YoutubeService {
  async findUserPlaylists(): Promise<string> {
    const result = await fetch(
      // `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails%2Cstatistics&id=&key=`,
      `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC7pHR5LyVeteEis0n4-xdOw&maxResults=25&key=${googleAPIKey}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
      .then((res) => res.json())
      .then((json) => json)
      .catch((err) => console.log(err));

    return result;
  }
}

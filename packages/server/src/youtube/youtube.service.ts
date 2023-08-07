import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

import { googleAPIKey, youtubeChannelId } from "../../secrets/constants";
@Injectable()
export class YoutubeService {
  async findUserPlaylists(): Promise<any> {
    console.log("in findUserPlaylists");

    const result = await fetch(
      // `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails%2Cstatistics&id=&key=`,
      `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${youtubeChannelId}&maxResults=25&key=${googleAPIKey}`,
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
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

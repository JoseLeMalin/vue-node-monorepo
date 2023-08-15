import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from "@nestjs/common";
import { googleAPIKey, youtubeChannelId } from "../../secrets/constants";
import { YoutubePlaylist } from "src/data-transfer-objects/youtube";
import { ForbiddenException } from "../common/errors/error-class";
const youtubeGApiUrl = "https://youtube.googleapis.com/youtube/v3";
@Injectable()
export class YoutubeService {
  async findUserPlaylists(): Promise<any> {
    console.log("in findUserPlaylists");

    const result: YoutubePlaylist = await fetch(
      // `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails%2Cstatistics&id=&key=`,
      `${youtubeGApiUrl}/playlists?part=snippet%2CcontentDetails&channelId=${youtubeChannelId}&maxResults=25&key=${googleAPIKey}`,
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
      .catch((err) => {
        throw new ForbiddenException(err);
      });
    const playlistsNames = result?.items?.map(
      (item) => item.snippet.localized.title,
    );
    console.log(playlistsNames);

    return result;
  }
}

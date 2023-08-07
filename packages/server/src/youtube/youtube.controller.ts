import { Controller, Get, Post } from "@nestjs/common";
import { YoutubeService } from "./youtube.service";

@Controller("youtube")
export class YoutubeController {
  constructor(private readonly youtubeService: YoutubeService) {}
  @Get()
  async findUserPlaylists(): Promise<string> {
    console.log("in findUserPlaylists handler");
    const result = await this.youtubeService.findUserPlaylists();
    return result;
  }

  // @Post()
  // postYoutube(createCatDto: CreateCatDto): string {
  //   const test = createCatDto;
  //   return "Posted Hello World!";
  // }
}

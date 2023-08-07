import { Controller, Get, Post } from "@nestjs/common";
import { CreateCatDto } from "src/data-transfer-objects/test-SHE-dto";
import { YoutubeService } from "./youtube.service";

@Controller("youtube")
export class YoutubeController {
  constructor(private readonly youtubeService: YoutubeService) {}
  @Get()
  async findUserPlaylists(): Promise<string> {
    const result = await this.youtubeService.findUserPlaylists();
    return result;
  }

  // @Post()
  // postYoutube(createCatDto: CreateCatDto): string {
  //   const test = createCatDto;
  //   return "Posted Hello World!";
  // }
}

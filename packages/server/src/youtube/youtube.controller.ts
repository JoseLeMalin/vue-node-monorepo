import { Controller, Get, Post } from "@nestjs/common";
import { CreateCatDto } from "src/data-transfer-objects/test-SHE-dto";
import { YoutubeService } from "./youtube.service";

@Controller("youtube")
export class YoutubeController {
  constructor(private readonly youtubeService: YoutubeService) {}
  @Get()
  findUserPlaylists(): string {
    return this.youtubeService.findUserPlaylists();
  }

  // @Post()
  // postYoutube(createCatDto: CreateCatDto): string {
  //   const test = createCatDto;
  //   return "Posted Hello World!";
  // }
}

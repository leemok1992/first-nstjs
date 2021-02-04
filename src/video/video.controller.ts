import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { create } from 'domain';
import { CreatVideoDto } from './dto/create-video.dto';
import { Video } from './entitiese/video.entity';
import { VideoService } from './video.service';

@Controller('video')
export class VideoController {
    constructor(private readonly videoService: VideoService) { }
    
    @Get()
    getAll():Video[] {
        return this.videoService.getAllVideo();
    }

    @Get("/:id")
    getOne(@Param("id") videoId:number):Video {
        return this.videoService.getOneVideo(videoId)
        }      

    @Post()
    create(@Body() videoData:CreatVideoDto) {
        return this.videoService.createVideo(videoData)
    }

    @Patch("/:id")
    update(@Param("id") videoId: number, @Body() updateVideoData) {
        return this.videoService.update(videoId,updateVideoData)
            
        }
    

    @Delete("/:id")
    delete(@Param("id") videoId: number):boolean {
        return this.videoService.delete(videoId)
    }
}

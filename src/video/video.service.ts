import { Injectable } from '@nestjs/common';
import { Video } from './entitiese/video.entity';

@Injectable()
export class VideoService {
    private videos: Video[] = [];

    getAllVideo(): Video[]{
        return this.videos
    }
    getOneVideo(id:string): Video{
        return this.videos.find(video =>video.id === +id)
    }
    createVideo(videoData){
        this.videos.push(
            {
                id: this.videos.length + 1,
                ...videoData
            }
        )
        
    }
    delete(id:string):boolean {
        this.videos.filter(movie => movie.id !== +id)
        return true
    }
}

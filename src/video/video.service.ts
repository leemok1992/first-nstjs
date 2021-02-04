import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatVideoDto } from './dto/create-video.dto';
import { Video } from './entitiese/video.entity';

@Injectable()
export class VideoService {
    private videos: Video[] = [];
    //완료
    getAllVideo(): Video[]{
        return this.videos
    }
    //
    getOneVideo(id: number): Video{
        const movie = this.videos.find(video => video.id === id)
        if (!movie) {
            throw new NotFoundException(`not found video of ID:${id}`)
        }
        return movie;
    }
    //
    createVideo(videoData: CreatVideoDto) {
        
        if (this.videos.length !== 0) {
            
            this.videos.push(
                {
                    id: this.videos[this.videos.length -1].id + 1,
                    ...videoData
                }
            )
        } else if (this.videos.length === 0) {
            
            this.videos.push({
                id: 1,
                ...videoData
            })
        }
    }
    
    delete(id: number): boolean {
        this.getOneVideo(id)
        this.videos = this.videos.filter(movie => movie.id !== id)
        return true
    }

    update(id: number, updateVideoData) {
        const video = this.getOneVideo(id)
        this.delete(id)
        this.videos.push({...video,...updateVideoData})
    }
}

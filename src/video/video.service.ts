import { Injectable, NotFoundException } from '@nestjs/common';
import { Video } from './entitiese/video.entity';

@Injectable()
export class VideoService {
    private videos: Video[] = [];
    //완료
    getAllVideo(): Video[]{
        return this.videos
    }
    //
    getOneVideo(id: string): Video{
        const movie = this.videos.find(video => video.id === +id)
        if (!movie) {
            throw new NotFoundException(`not found video of ID:${id}`)
        }
        return movie;
    }
    //
    createVideo(videoData){
        this.videos.push(
            {
                id: this.videos.length + 1,
                ...videoData
            }
        )
        
    }
    // 삭제하면 id가 그대로 유지되서 새로 만들때 id가 겹치게 되어버림
    delete(id: string): boolean {
        this.getOneVideo(id)
        this.videos = this.videos.filter(movie => movie.id !== +id)
        return true
    }

    update(id: string, updateVideoData) {
        const video = this.getOneVideo(id)
        this.delete(id)
        this.videos.push({...video,...updateVideoData})
    }
}

import {Injectable} from "@angular/core"
import {HttpClient} from "@angular/common/http"
import {Track} from "../models/Track"

@Injectable()
export class TracksHttpService{
  private readonly API_URL = 'https://63681cabedc85dbc84e21479.mockapi.io/tracks';
  constructor(private http: HttpClient) {
  }

  create(track: Track){
    return  this.http.post<void>(this.API_URL, track)
  }
  update(track: Track){
    return  this.http.put<void>(`${this.API_URL}/${track.id}`, track)
  }
  getAll(){
    return this.http.get<Track[]>(this.API_URL)
  }
  get(id: number){
    return this.http.get<Track>(`${this.API_URL}/${id}`)
  }
  delete(id: number){
    return this.http.delete<void>(`${this.API_URL}/${id}`)
  }
}

import { ConfigService } from '@core/services/config/config.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRespMusicSearch } from '@core/interfaces/resp-music-search.interface';
import { IConfig } from '@core/interfaces/config.interface';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class MusicSearchService {

  constructor(
    private _http:HttpClient,
    private _configService:ConfigService
  ) { }

  getMusicSearchByName(name:string):Observable<IRespMusicSearch>{
    
    const _config:IConfig = this._configService.getConfigData();
    const url:string = `${_config.API_URL}/search?q=${name}`;
    
    return this._http.get<IRespMusicSearch>(url)
               .pipe(
                 map((resp) =>{
                   return resp;
                 }),
                 catchError((err:any) =>{
                   return throwError(err);
                 }) 
               );

  }

}

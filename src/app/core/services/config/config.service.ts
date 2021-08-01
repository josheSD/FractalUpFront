import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IConfig } from '@core/interfaces/config.interface';

@Injectable()
export class ConfigService {

  private configJson:IConfig;
  private readonly CONFIG_URL:string = 'assets/config-server/config.json';

  constructor(
    private _http:HttpClient
  ) { }

  public loadConfig(){

    this._http.get(this.CONFIG_URL)
        .toPromise()
        .then((config:IConfig) =>{
          this.configJson = config;
        })
        .catch((error) =>{
          console.log(`Hubo un Error INIT APP => ${error}`)
        })

  }

  public getConfigData():IConfig{
    return {...this.configJson};
  }

}

export function LoadConfiguration(configService:ConfigService){
  return () => configService.loadConfig();
}

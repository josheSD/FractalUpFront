import { Music } from "./resp-music-search.interface";

export interface ICPlayer{
    initializeVars():void;
    initializeForm():void;
    initializeSubscribe():void;
    initializeVolume():void;
    eventPlay():void;
}
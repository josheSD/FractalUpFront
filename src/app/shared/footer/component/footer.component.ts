import { Component, OnInit } from '@angular/core';
import { IConfig } from '@core/interfaces/config.interface';
import { ConfigService } from '@core/services/config/config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  public anoActual: number;
  public config:IConfig;

  constructor(
    private _config:ConfigService
  ) { }

  ngOnInit(): void {
    this.anoActual = new Date().getFullYear();
    this.config =  this._config.getConfigData();
  }

}

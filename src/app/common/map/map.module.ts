import { NgModule } from "@angular/core";
import { MapComponent } from "./map.component";
import { AgmCoreModule } from "@agm/core";
import { CamelizePipe } from "ngx-pipes";
import { BrowserModule } from "@angular/platform-browser";

import { MapService } from "./map.service";
import { config } from "./config";

@NgModule({
  declarations: [MapComponent],
  exports: [MapComponent],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: config.googleApiKey
    }),
    BrowserModule
  ],
  providers: [MapService, CamelizePipe]
})
export class MapModule {}

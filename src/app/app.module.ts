import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { App } from "./app";
import { PlusFivePipePipe } from "./plus-five-pipe-pipe";

@NgModule({
  declarations: [],
  imports: [BrowserModule, App, PlusFivePipePipe],
  providers: [],
  bootstrap: []
})
export class AppModule {}

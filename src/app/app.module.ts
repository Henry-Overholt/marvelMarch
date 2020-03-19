import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { AppComponent } from "./app.component";
import { CheckListComponent } from "./check-list/check-list.component";

@NgModule({
  declarations: [AppComponent, CheckListComponent],
  imports: [BrowserModule],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}

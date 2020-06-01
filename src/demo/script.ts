
import{ Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import{platformBrowserDynamic } from "@angular/platform-browser-dynamic";

@Component({
    selector:'joke',
    template:`<h1>My first angular code</h1>
              <p>How this</p>`
})

class JokeComponent{

}

@NgModule({
  imports:[BrowserModule],
  declarations:[JokeComponent],
  bootstrap:[JokeComponent]
})

class AppModule{

}

platformBrowserDynamic().bootstrapModule(AppModule);
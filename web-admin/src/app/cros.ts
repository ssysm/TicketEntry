import {Injectable} from "@angular/core";
import {BrowserXhr} from "@angular/http";
@Injectable()

export class Cros extends BrowserXhr {
  constructor() {
    super();
  }
  build(): any {
    let xhr = super.build();
    xhr.withCredentials = true;
    xhr.crossDomain = true;
    return <any>(xhr);
  }
}

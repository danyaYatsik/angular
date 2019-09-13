import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class NavService {

  private _activeItem: uri;

  onMenuItemSelected(id: uri) {
    this._activeItem = id;
  }


  get activeItem(): uri {
    return this._activeItem;
  }
}

type uri = "me" | "friends" | "todos" | "organizer";


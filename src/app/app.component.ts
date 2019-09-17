import { Component, OnInit } from "@angular/core";
import { Theme } from "./classes/theme";
import { Store, createSelector, select } from "@ngrx/store";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  selectedTheme: Theme;
  title = "angular-automation";

  constructor(private store: Store<Theme>) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.store
      .select("theme")
      .subscribe(val => {
        this.selectedTheme = val
      });
  }
}

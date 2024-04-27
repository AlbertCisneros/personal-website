import { Component } from "@angular/core";

@Component({
    selector: "ui-about-me",
    templateUrl:"./ui-about-me.component.html",
    styleUrls:["./ui-about-me.component.scss"]
})
export class UIAboutMeComponent{

    onClick(){
        console.log("click button ui")
    }
    
}
import { Component } from "@angular/core";

@Component({
    selector: "view-home",
    templateUrl: "./view-home.component.html",
    styleUrls: ["./view-home.component.scss"]
})
export class ViewHomeComponent {

    navMode: string = "dark-transparent";
    navShadow: boolean = false;

    ngOnInit() {
        window.addEventListener("scroll", () => {
            console.log("scroll", window.scrollY)
            if (window.scrollY >= 90) {
                this.navMode = "light";
                this.navShadow = true;
            } else {
                this.navMode = "dark-transparent";
                this.navShadow = false;
            }
        })
    }

    onBrandClicked(){
        console.log("click brand")
    }

}
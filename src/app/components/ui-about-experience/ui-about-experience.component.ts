import { EXPERIENCES, EDUCATIONS } from './ui-about-experience.constant';
import { Component } from "@angular/core";

@Component({
    selector: "ui-about-experience",
    templateUrl: "./ui-about-experience.component.html",
    styleUrls: ["./ui-about-experience.component.scss"]
})
export class UIAboutExperienceComponent {
    experiences: any[] = EXPERIENCES;
    studies: any[] = EDUCATIONS;
}
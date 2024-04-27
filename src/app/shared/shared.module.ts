import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIWhatsappComponent } from './components/ui-whatsapp/ui-whatsapp.component';
import { UIContactCallComponent } from './components/ui-contact-call/ui-contact-call.component';

@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        UIWhatsappComponent,
        UIContactCallComponent
    ],
    exports:[
        UIWhatsappComponent,
        UIContactCallComponent
    ]
})
export class SharedModule{}
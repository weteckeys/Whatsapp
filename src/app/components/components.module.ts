import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PopoverComponent } from '../components/popover/popover.component';
import { FormsModule } from '@angular/forms';


const components = [
    PopoverComponent
];

@NgModule({
    declarations: [
        components
    ],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule
    ],
    exports: [
        ...components,
    ]
})
export class ComponentsModule { }

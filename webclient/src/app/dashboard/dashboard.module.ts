import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatInputModule, MatSelectModule, MatCardModule, MatFormFieldModule,
    MatTabsModule, MatDatepickerModule, MatNativeDateModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatCardModule,
        MatTabsModule,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    providers: [],
    //If you are declaring any of the Component in Module and want to import in other module, make sure you are exporting your Component.
    exports: [DashboardComponent],
    bootstrap: [DashboardComponent]
})
export class DashboardModule { }

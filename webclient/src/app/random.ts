// <mat-toolbar color="primary" class="page-header mat-elevation-z6">
//   <span class="flex-spacer"></span>

//   <button id="send-for-approval" mat-raised-button color="accent">
//                   SEND FOR APPROVAL
//                 </button>

//   <a routerLink="../../search" mat-icon-button matTooltip="Search" id="search" name="search" aria-label="Search">
//     <mat-icon>search</mat-icon>
//   </a>

//   <button mat-icon-button matTooltip="Save" id="save" name="save" aria-label="Save" type="submit" (click)="save(createDrawing.form)">
//                 <mat-icon>save</mat-icon>
//               </button>

//   <a mat-icon-button matTooltip="Print" id="Print" name="Print" aria-label="Print">
//     <mat-icon>description</mat-icon>
//   </a>

//   <a mat-icon-button matTooltip="Download" id="download" name="download" aria-label="download">
//     <mat-icon>get_app</mat-icon>
//   </a>

// </mat-toolbar>
// <section>
//   <form #createDrawing="ngForm" enctype="multipart/form-data">
//     <div class="page-container-with-header">
//       <div class="main-content">

//         <mat-card>
//           <div id="core-drawing" class="card-header">
//             <div class="card-header-title">Core Drawing</div>
//           </div>
//           <mat-card-content fxLayout="column">
//             <div fxLayout="row wrap" fxLayout.lt-md="column" fxLayoutGap="20px" fxLayoutGap.lt-md="0px">
//               <img class ="image-allignment"  src="../../../assets/images/conformite-europenne-logo.jpg"  alt="logo" />
//               <mat-form-field color="accent" fxFlex fxFlex.lt-md="1 1 auto">
//                 <input matInput placeholder="Drawing Number" maxLength="80" id="drawing-number" name="drawing-number" required>
//               </mat-form-field>
//               <mat-form-field color="accent" fxFlex fxFlex.lt-md="1 1 auto">
//                 <input matInput placeholder="Revision" maxLength="20" id="dii" name="rev" value="-">
//               </mat-form-field>
//               <mat-form-field color="accent" fxFlex fxFlex.lt-md="1 1 auto">
//                 <mat-select [formControl]="model" multiple placeholder="Model" id="model" name="model" required>
//                   <mat-option *ngFor="let model of majorModelList" [value]="model">{{model.airplaneModel}}</mat-option>
//                 </mat-select>
//               </mat-form-field>
//               <mat-form-field color="accent" fxFlex fxFlex.lt-md="1 1 auto">
//                 <input matInput placeholder="Design Information Input (DII)" maxLength="20" id="dii" name="dii">
//               </mat-form-field>
//             </div>

//             <div fxLayout="row wrap" fxLayout.lt-md="column" fxLayoutGap="20px" fxLayoutGap.lt-md="0px">
//               <mat-form-field color="accent" fxFlex fxFlex.lt-md="1 1 auto">
//                 <input matInput placeholder="Title" maxLength="100" id="title" name="title" required>
//               </mat-form-field>
//             </div>
//             <div fxLayout="row wrap" fxLayout.lt-md="column" fxLayoutGap="20px" fxLayoutGap.lt-md="0px">
//               <mat-form-field hintLabel="Max 1000 characters" color="accent" fxFlex fxFlex.lt-md="1 1 auto">
//                 <input matInput #input maxlength="1000" placeholder="Tool Usage" id="toolUsage" name="toolUsage" required>
//                 <mat-hint align="end">{{input.value?.length || 0}}/1000</mat-hint>
//               </mat-form-field>
//             </div>
//           </mat-card-content>
//         </mat-card>
//         <p></p>
//         <mat-card>
//           <div id="sub-option" class="card-header">
//             <div class="card-header-title">Sub Options</div>
//           </div>
//           <mat-tab-group>
//             <div *ngFor="let os of optionType">
//               <mat-tab label={ {os.optionTypeOption}}>

//                 <ng-template [ngIf]="os.optionTypeOption=='STANDARD OPTIONS'" [ngIfElse]="otherOptions">
//                   <mat-accordion>
//                     <mat-expansion-panel *ngFor="let o of os.optionDetails">
//                       <mat-expansion-panel-header>
//                         <mat-panel-title>
//                           {{o.optionName}}
//                         </mat-panel-title>
//                       </mat-expansion-panel-header>
//                       <mat-panel-description>{{o.optionText}}
//                       </mat-panel-description>
//                     </mat-expansion-panel>
//                   </mat-accordion>

//                 </ng-template>

//                 <ng-template #otherOptions>
//                   <div *ngFor="let item of os.optionDetails; let i = index;">
//                     <br>
//                     <mat-checkbox [checked]="item.checked" (change)="onChange($event, i, item)">
//                       {{item.optionName}}
//                     </mat-checkbox>
//                     <div class="item-ifcondition" *ngIf="item.checked">
//                       <ng-template [ngIf]="item.optionSubType != null" [ngIfElse]="testingOptions">
//                         <br>
//                         <mat-accordion multi="true">
//                           <mat-expansion-panel>
//                             <mat-expansion-panel-header>
//                               <mat-panel-title>
//                                 {{item.optionSubType}}
//                               </mat-panel-title>
//                             </mat-expansion-panel-header>
//                             <mat-panel-description>{{item.optionText}}
//                             </mat-panel-description>
//                           </mat-expansion-panel>
//                         </mat-accordion>
//                       </ng-template>
//                       <ng-template #testingOptions>
//                         <form class="example-form">
//                           <mat-form-field class="example-testing-full-width">
//                             <textarea matInput cdkTextareaAutosize #autosize="cdkTextareaAutosize" value={{item.optionText}}></textarea>
//                           </mat-form-field>
//                         </form>
//                       </ng-template>
//                     </div>
//                     <br>
//                   </div>
//                 </ng-template>

//               </mat-tab>
//               <!-- <mat-tab label="TESTING OPTIONS">
//                           <br>
//                           <div *ngFor="let item of testingData; let i = index;">
//                             <br>
//                             <mat-checkbox [checked]="item.checked" (change)="onChange($event, i, item)">
//                               {{item.label}}
//                             </mat-checkbox>
//                             <div class="item-ifcondition" *ngIf="item.checked">
//                               <form class="example-form">
//                                 <mat-form-field class="example-testing-full-width">
//                                   <textarea matInput cdkTextareaAutosize #autosize="cdkTextareaAutosize"
//                                     value={{item.val}}></textarea>
//                                 </mat-form-field>
//                               </form>
//                             </div>
//                             <br>
//                           </div>
//                           <br><br>
//                         </mat-tab>
//                         <mat-tab label="MAINTENANCE & INSPECTION CRITERIA">
//                             <div *ngFor="let item of maintenanceData; let i = index;">
//                                 <br>
//                                 <mat-checkbox [checked]="item.checked" (change)="onChange($event, i, item)">
//                                   {{item.label}}
//                                 </mat-checkbox>
//                                 <div class="item-ifcondition" *ngIf="item.checked">
//                                   <br>
//                                     <mat-accordion multi="true">
//                                         <mat-expansion-panel>
//                                           <mat-expansion-panel-header>
//                                             <mat-panel-title>
//                                                 Maintenance
//                                             </mat-panel-title>
//                                           </mat-expansion-panel-header>
//                                           <mat-panel-description>Lubricate and clean appropriate parts of the hoists as stated in the maintenance service manual by the manufacturer. 
//                                             </mat-panel-description>
//                                         </mat-expansion-panel>

//                                         <mat-expansion-panel>
//                                             <mat-expansion-panel-header>
//                                               <mat-panel-title>
//                                                   Frequent Inspections
//                                               </mat-panel-title>
//                                             </mat-expansion-panel-header>
//                                             <mat-panel-description>1. Visually inspect the hardware for any physical damage, wear and corrosion.
//                                                 2. Missing or damaged parts should be replaced.
//                                                 3. If an inspection reveals a defect in the condition, remove the unit from service.
//                                                 4. See Standard EN 13157.  
//                                               </mat-panel-description>
//                                           </mat-expansion-panel>

//                                           <mat-expansion-panel>
//                                               <mat-expansion-panel-header>
//                                                 <mat-panel-title>
//                                                     Periodic Inspections
//                                                 </mat-panel-title>
//                                               </mat-expansion-panel-header>
//                                               <mat-panel-description>1. Periodic inspection shall be done as recommended by the manufacturer. See Standard EN 13157.  
//                                                 </mat-panel-description>
//                                             </mat-expansion-panel>
//                                       </mat-accordion>
                          
//                                 </div>
//                                 <br>
//                               </div> 
                        
                              
//                         </mat-tab> -->
//             </div>
//           </mat-tab-group>
//         </mat-card>
//       </div>
//     </div>
//   </form>
// </section>
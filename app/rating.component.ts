import { Component } from '@angular/core'

@Component({
    selector: 'rating',
    template: `  
        <ng-container *ngIf="rating < 1; else elseBlock"><star (click)="onClick(1)"></star></ng-container>
        <ng-template #elseBlock><starfill (click)="onClick(1)"></starfill></ng-template>
        <ng-container *ngIf="rating < 2; else elseBlock2"><star (click)="onClick(2)"></star></ng-container>
        <ng-template #elseBlock2><starfill (click)="onClick(2)"></starfill></ng-template>
        <ng-container *ngIf="rating < 3; else elseBlock3"><star (click)="onClick(3)"></star></ng-container>
        <ng-template #elseBlock3><starfill (click)="onClick(3)"></starfill></ng-template>
        <ng-container *ngIf="rating < 4; else elseBlock4"><star (click)="onClick(4)"></star></ng-container>
        <ng-template #elseBlock4><starfill (click)="onClick(4)"></starfill></ng-template>
        <ng-container *ngIf="rating < 5; else elseBlock5"><star (click)="onClick(5)"></star></ng-container>
        <ng-template #elseBlock5><starfill (click)="onClick(5)"></starfill></ng-template>        
        `
})
export class RatingComponent{
    rating = 0;

    onClick(ratingValue){
        this.rating = ratingValue;
    }    
} 

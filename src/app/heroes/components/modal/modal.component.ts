import { Component,Inject } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Hero} from "../../interfaces/hero.interface";

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hero,
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}

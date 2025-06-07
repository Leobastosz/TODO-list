import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
  standalone: false 
})
export class TaskDetailComponent  implements OnInit {
  @Input() task:any;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

   close () {
    this.modalController.dismiss(this.task)
  }

}

import { Component, Input, input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-form-new-task',
  templateUrl: './form-new-task.component.html',
  styleUrls: ['./form-new-task.component.scss'],
})
export class FormNewTaskComponent  implements OnInit {

  @Input() param:any; 

  task = {
    id: Math.floor(Math.random()*100),
    title: '', 
    subtitle:'',
    description: '',
    image: ''

  }

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    if (this.param) {
      this.task = this.param;
    }
  }

  close () {
    this.modalController.dismiss(this.task)
  }

}

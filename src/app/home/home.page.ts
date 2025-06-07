import { Component } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { FormNewTaskComponent } from '../components/form-new-task/form-new-task.component';
import { TaskDetailComponent } from '../components/task-detail/task-detail.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(
    private modalController: ModalController,
    private toastController: ToastController,
    private alertController: AlertController,

  ) { }

  tasks: Array<any> = [
    {
      id: 1,
      title: 'Entregar o trabalho',
      subtitle: 'Entregar o trabalho de Angular',
      description: 'Uma descrição completa',
      image: ""
    },


    {
      id: 2,
      title: 'Entregar a prova',
      subtitle: 'Entregar a prova de Angular',
      description: 'Uma descrição completa',
      image: ""
    },

    {
      id: 3,
      title: 'Entregar o programa',
      subtitle: 'Entregar o programa em Angular',
      description: 'Uma descrição completa',
      image: ""
    },
  ]

  async editTask(task: any) {
    const modal = await this.modalController.create({
      component: FormNewTaskComponent,
      componentProps: {
        param: task
      }
    })
    await modal.present()
    const editTask = await modal.onDidDismiss()
    this.showToast(' editada ')
  }


  deleteTask(id: number) {
    let index = this.tasks.findIndex(t => t.id == id);
    this.tasks.splice(index, 1);
    this.showToast(' excluída ')
  }

  async openDetail(task: any) {
    const modal = await this.modalController.create({
      component: TaskDetailComponent,
      componentProps: {
        task: task
      }
    })
    await modal.present()
  }


  async addNewTask() {

    const modal = await this.modalController.create({
      component: FormNewTaskComponent
    })
    await modal.present()
    const newTask = await modal.onDidDismiss()
    if (newTask.data.title != "" && newTask.data.subtitle != "") (this.tasks.push(newTask.data))
    this.showToast(' criada ')
  }
  async showToast(acao: string) {
    const toast = await this.toastController.create({
      message: 'Tarefa' + acao + 'com sucesso!',
      duration: 2000,
      position: 'bottom',
      color: 'success'
    })
    await toast.present()
  }

  async confirmDelete(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Tem certeza de que deseja excluir essa tarefa?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Sim',
          handler: () => {
            this.deleteTask(id)
          }
        }
      ]

    })
    await alert.present()
  }
}

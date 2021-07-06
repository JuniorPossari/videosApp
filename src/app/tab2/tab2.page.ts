import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public alertController: AlertController, public toastController: ToastController) {}

  async exibirAlertaNota(nota) {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      message: 'Realmente deseja dar nota ' + nota + ' a esse filme?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
        }, {
          text: 'Sim',
          handler: () => {
            this.apresentarToast(nota);
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast(nota) {
    const toast = await this.toastController.create({
      message: 'Você deu nota ' + nota + ' para esse filme!',
      duration: 2000,
      position: 'top',
      color: 'success'
    });
    toast.present();
  }


}

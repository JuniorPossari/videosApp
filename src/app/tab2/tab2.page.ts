import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public alertController: AlertController) {}

  async exibirAlertaNota() {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      message: 'Realmente deseja dar essa nota a esse filme?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: (blah) => {
            console.log('Você cancelou essa nota!');
          }
        }, {
          text: 'Sim',
          handler: () => {
            console.log('Você deu uma nota a esse filme!');
          }
        }
      ]
    });

    await alert.present();
  }


}

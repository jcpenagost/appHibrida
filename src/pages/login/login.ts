import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import {RegistratePage} from '../registrate/registrate';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  tipide : string = null;
  numide : number = null;
  correo : string = null;
  password : string = null;
  pagina = RegistratePage;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  showAlert(){
    if (this.correo===null||this.password===null||this.tipide===null||this.numide===null) {
        this.showAlert2('Faltan Datos', 'Usuario o clave vacíos');
    }
    else{
      const alert = this.alertCtrl.create({
      title: 'Acceso Denegado',
      subTitle: 'Usuario o clave no existen: ' + this.correo,
      buttons: ['OK']
    });
    alert.present();
  }
  }
  showAlert2(tit,msn){
    const alert = this.alertCtrl.create({
      title: tit,
      subTitle: msn,
      buttons: ['OK']
    });
    alert.present();
  }
  showPrompt(){
    let prompt = this.alertCtrl.create({
      title: 'Ingreso',
      message: "Cual es su correo?",
      inputs:[
        {
          name:'Correo',
          placeholder: 'Correo'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            this.showAlert2('Envío Cancelado', data.Correo);
           // console.log('Cancel');
          }
        },
        {
          text: 'Enviar',
          handler: data => {
            this.showAlert2('Correo enviado', data.Correo);
            //console.log('OK');
          }
        }
      ]
    });
    prompt.present();
  }
  registrate(){
    this.navCtrl.push(this.pagina);
  }

}

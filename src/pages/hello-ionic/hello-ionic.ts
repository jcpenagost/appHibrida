import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListPage} from '../list/list';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  pagina1=ListPage;
/*   pagina2=
  pagina3=
  pagina4= */

  constructor(
    private navctrl:NavController,
    private navparams:NavParams) {

  }

  irPagina(pagina){
    this.navctrl.push(pagina);
  }
}

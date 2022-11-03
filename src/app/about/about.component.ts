import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  actionSheet : any
  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  async presentActionSheet()
  {
    this.actionSheet = await this.actionSheetCtrl.create({
      header: 'Example header',
      subHeader: 'Example subheader',
      buttons: [
        {
          text: 'Share',
          data: {
            action: 'cancel'
          },
        },
        {
          text: 'Share',
        },
        {
          text: 'Share',
        },
      ],
    })

    await this.actionSheet.present()

  }




  async dismissAS(){
    
    const result = await this.actionSheet.onDidDismiss();
    console.log(result)
  }    

}

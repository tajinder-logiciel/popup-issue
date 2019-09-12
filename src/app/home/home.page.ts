import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular'
import { PopupComponent } from '../popup/popup.component'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private popoverController:PopoverController) {}

  async openPopup(ev: any) {
    const popover = await this.popoverController.create({
        component: PopupComponent,
        componentProps: {
            nearByFilterOptions: {
              near: [
                { 'text': '1/4 Mile', 'value': '0.25' },
                { 'text': '1/2 Mile', 'value': '0.5' },
                { 'text': '1 Mile', 'value': '1' },
                { 'text': '5 Mile', 'value': '5' },
                { 'text': '10 Mile', 'value': '10' }
              ],
              name: [
                { 'text': 'Last Name', 'value': 'last_name' }
              ],
              time: [
                { 'text': 'Last Added', 'value': 'created_at' },
                { 'text': 'Last Modified', 'value': 'updated_at' }
              ]
            },
            filterParam: {
              "distance":0,
              "sort_by":"created_at",
              "sort_order":"desc",
              "rep_id":0
            }
        },
        event: ev,
        translucent: true
    })

    await popover.present()

    popover.onDidDismiss().then((data) => {
        console.log(data);
    })
}
}

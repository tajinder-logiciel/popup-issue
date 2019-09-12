import { Component } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular'

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  nearByFilterOptions:any = {}

  filterSortingParams:any = {}

  /**
   * @param navParams For Reciving Params From Parent popover page
   * @param popoverController For dismiss popover
   */
  constructor(private navParams: NavParams, public popoverController: PopoverController) {
      this.nearByFilterOptions = this.navParams.get('nearByFilterOptions')
      this.filterSortingParams = this.navParams.get('filterParam')
  }

  /**
   * nearByFilterChange
   */
  nearByFilterChange(sortBy, nearByOption) {
      const data = { sortBy, nearByOption }
      this.popoverController.dismiss(data)
  }

}

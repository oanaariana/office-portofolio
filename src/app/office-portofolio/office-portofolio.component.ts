import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { OfficePortofolioService } from './office-portofolio.service';

import { Building } from './models/building-vm.model';
import { Desk } from './models/desk-vm.model';
import { DailyStats } from './models/daily-stats-vm.model';
import { DesksStats } from './models/desks-stats-vm.model';

@Component({
  selector: 'app-office-portofolio',
  templateUrl: './office-portofolio.component.html',
  styleUrls: ['./office-portofolio.component.css']
})
export class OfficePortofolioComponent implements OnInit {
  buildingsData: Array<Building>;
  totalDesksData: Array<Desk>;
  dailyPeakData: Array<DailyStats>;
  occupiedDesksData: Array<DesksStats>;
  table: Array<any>;

  constructor(
    private officePortofilioService: OfficePortofolioService
  ) { }

  ngOnInit() {
    this.officePortofilioService.getMergedData()
     .subscribe(responseList => {
      this.buildingsData = responseList[0].buildings;
      this.dailyPeakData = responseList[1].stats;
      this.occupiedDesksData = responseList[2].stats;
      this.totalDesksData = responseList[3].stats;
      this.loadTableData();
  });
}

  loadTableData() {
    this.table = this.buildingsData.map(elem => {
      return { id: elem.id, code: elem.code };
    });

    this.table.forEach(row => {
      row.totalAmountDesks = this.findTotalAmount();
      row.usage = this.calculatePercentage();
      row.capacity = this.calculateCapacity();
    });
  }

  private findTotalAmount() {
    const buildingId = this.buildingsData[0].id;
    const buildingInfo = this.totalDesksData.find(desk => desk.building.id === buildingId);
    return buildingInfo.value;
  }

  private calculatePercentage() {
    // tslint:disable-next-line:max-line-length
    const percentageData = ((this.dailyPeakData[3].value / this.totalDesksData[3].value) * 100).toFixed(2);
    return percentageData;
  }

  private calculateCapacity() {
    const deskDiff = this.totalDesksData[3].value - this.occupiedDesksData[3].value;
    return deskDiff;
  }

}

import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Injectable()
export class OfficePortofolioService {

  constructor(private http: Http) { }

  getMergedData(): Observable<any[]> {
    return forkJoin(
      this.getBuildings(),
      this.getDailyPeaksOfBuilding(),
      this.getPeakOfOccupiedDesksPerBuilding(),
      this.getTotalDesksPerBuilding()
    );
  }

  getBuildings() {
    const apiUrl = './assets/data/buildings.json';
    return this.http.get(apiUrl)
      .map((response: Response) => {
        const data = response.json();
        return data;
      });
  }

  getDailyPeaksOfBuilding() {
    const apiUrl = './assets/data/dailyPeaksOfBuilding1.json';
    return this.http.get(apiUrl)
      .map((response: Response) => {
        const data = response.json();
        return data;
    });
  }

  getPeakOfOccupiedDesksPerBuilding () {
    const apiUrl = './assets/data/peakOfOccupiedDesksPerBuilding.json';
    return this.http.get(apiUrl)
      .map((response: Response) => {
      const data = response.json();
      return data;
    });
  }

  getTotalDesksPerBuilding() {
    const apiUrl = './assets/data/totalDesksPerBuilding.json';
    return this.http.get(apiUrl)
      .map((response: Response) => {
        const data = response.json();
        return data;
      });
  }

}


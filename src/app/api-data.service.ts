import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private http: HttpClient) {
  }

  public getData(key: string): Observable<any> {
    return this.http.get("https://1.api.fy23ey05.careers.ifelsecloud.com").pipe(
      map((data: any) => data[key])
    );
  }

}

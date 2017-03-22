import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppSettings } from './../appsettings';

@Injectable()
export class ItemsService {

  constructor(private http: Http) {}

  getItems(page = 1, limit = 10, sort ? : string, order ? : string) {
    let params = new URLSearchParams();

    params.set('page', String(page));
    params.set('limit', String(limit));
    if (order && order !== '') {
      params.set('order', order);
    }
    if (sort && sort !== '') {
      params.set('sort', sort);
    }

    return this.http.get(`${AppSettings.ApiEndpoint}menuitems`, { search: params })
      .map((res: Response) => res.json());
  };

  getItemId(id: number) {
    return this.http.get(`${AppSettings.ApiEndpoint}menuitems`)
      .map((res: Response) => res.json());
  };

  putItemId(id: number, params: any) {
    return this.http.put(`${AppSettings.ApiEndpoint}menuitems`, params)
      .map((res: Response) => res);
  };
  deleteItemId(id: number, params: any) {
    return this.http.delete(`${AppSettings.ApiEndpoint}menuitems`, params)
      .map((res: Response) => res);
  };

}

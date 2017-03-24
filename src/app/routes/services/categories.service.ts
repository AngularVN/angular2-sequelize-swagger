import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppSettings } from './../appsettings';

@Injectable()
export class CategoriesService {

  constructor(private http: Http) {}

  getCategories(page = 1, limit = 10, sort ? : string, order ? : string) {
    let params = new URLSearchParams();

    params.set('page', String(page));
    params.set('limit', String(limit));

    if (order && order !== '') {
      params.set('order', order);
    }
    if (sort && sort !== '') {
      params.set('sort', sort);
    }

    return this.http.get(`${AppSettings.ApiEndpoint}menucategories`, { search: params })
      .map((res: Response) => res.json());
  };

  getCategoryId(id: number) {
    return this.http.get(`${AppSettings.ApiEndpoint}menucategories`)
      .map((res: Response) => res.json());
  };

  putCategoryId(id: number, params: any) {
    return this.http.put(`${AppSettings.ApiEndpoint}menucategories`, params)
      .map((res: Response) => res);
  };
  deleteCategoryId(id: number, params: any) {
    return this.http.delete(`${AppSettings.ApiEndpoint}menucategories`, params)
      .map((res: Response) => res);
  };

}

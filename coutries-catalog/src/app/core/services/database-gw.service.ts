import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
	providedIn: 'root'
})
export class DatabaseGwService {

	URL_PATH: string = "";
	URL_EP: string = "";
	$env = environment;

	constructor(
		private $http: HttpClient
	) { }

	/**
* Method request to API to get record depend on object extends it 
* @param filter 			filter object condition *required model_name 
* @param requestPath 	API object path to request
* @param optionHeader	(optional) additional httpClient request header
* @returns Observable<any>
*/
	query(filter: any = {}, requestPath: string = "", optionHeader: any = {}) {
		let opt: any = {};

		//get object name from filter to know which object should we use
		//and than delete the field because avoid confuse we filter with this field name
		// let objName: string = filter.model_name;
		// delete filter.model_name;

		if (filter && filter !== null && filter !== undefined) {
			let params: HttpParams = new HttpParams();
			for (const key in filter) {
				params = params.set(key, filter[key]);
			}
			opt["params"] = params;
		}

		if (optionHeader) {
			opt["headers"] = optionHeader;
		}

		return this.$http.get<any>(this.getAPIEndPoint() + this.getRequestURL(requestPath), opt);
	}

	private isNotEmpty(val: any): boolean {
		return val && val != null && val != undefined && val != "";
	}

	private getAPIEndPoint() {
		return this.URL_EP || this.$env.API_EP;
	}

	private getRequestURL(customPath: string) {
		let objUrl = this.URL_PATH || '/error-object';
		//to allow user able to request custom path without object
		let requestUrl = this.isNotEmpty(customPath) ? customPath : objUrl;

		return requestUrl;
	}
}

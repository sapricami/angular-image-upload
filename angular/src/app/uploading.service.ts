import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { map } from  'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadingService {
	SERVER_URL: string = "http://localhost:8000";
  constructor(private _httpClient: HttpClient) { }

  public upload(fileToUpload : File) {
    let endpoint  = `${this.SERVER_URL}/upload`;
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this._httpClient
      .post(endpoint, formData,);
  }
}

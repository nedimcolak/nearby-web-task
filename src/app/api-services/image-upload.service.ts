import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, lastValueFrom } from 'rxjs';
import { APP_CONFIG } from 'src/config/app.config';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
  constructor(private readonly httpClient: HttpClient) { }
  readonly apiKey: string = APP_CONFIG.IMG_BB_API_KEY;

  private readonly uploadedImageSubject: Subject<string> = new BehaviorSubject<string>('');
  public uploadedImageURL$ = this.uploadedImageSubject.asObservable()

  private uploadImageApi(file: File) {
    const formData = new FormData();
    formData.append('image', file);

    return this.httpClient.post('https://api.imgbb.com/1/upload', formData, {
      params: {
        'expiration': 259200, // Uploaded images will be deleted 3 days after upload.
        'key': this.apiKey
      }
    })
  }

  async uploadImage(file: File) {
    const image: any = await lastValueFrom(this.uploadImageApi(file));
    this.uploadedImageSubject.next(image.data.url);
  }

  clearImageURL() {
    this.uploadedImageSubject.next('');
  }
}

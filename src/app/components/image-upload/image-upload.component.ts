import { Component } from '@angular/core';
import { ImageUploadService } from 'src/app/api-services/image-upload.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent {
  constructor(private readonly imageUploadService: ImageUploadService) { }

  imageURL = this.imageUploadService.uploadedImageURL$;
  loading: boolean = false;
  file: File = {} as File;

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  onUpload() {
    this.imageUploadService.uploadImage(this.file);
  }
}

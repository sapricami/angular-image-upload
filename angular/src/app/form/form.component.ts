import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from  '@angular/forms';
import { UploadingService } from '../uploading.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

fileToUpload: File = null;

  constructor(
  	//private _formBuilder: FormBuilder, 
  	private _uploadingService: UploadingService
  ) { }

  ngOnInit() {
/*
  	this.form = this._formBuilder.group({
      file_name: ['']
    });
*/
  }

  onFileChange(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  onSubmit() {

    this._uploadingService.upload(this.fileToUpload).subscribe(
      (res) => {
      	console.log(res);
      },
      (err) => {
      	console.log(err);
      }
    );

  }

}

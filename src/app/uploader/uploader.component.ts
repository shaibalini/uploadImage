import { Component, Input,OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference,
        AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { SaveImageService } from '../save-image.service';


@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.sass']
})
export class UploaderComponent implements OnInit {
  ngOnInit() {
  }
  title = 'fireBaseUpload';
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;

  
  
  // downloadURL: Observable<string>;
  Url = '';
  constructor(private afStorage: AngularFireStorage, private _service:SaveImageService  ) {}
  userName="shaibalini";
 async upload(event){
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
    setTimeout(()=>{
      this.ref.getDownloadURL().subscribe(url=>{
        this.Url = url;
        console.log(this.Url, 'kjtgh')
        
      });
    },7000);
    setTimeout(()=>
    {
      console.log(this.Url, 'ersrdtfgvh');
      this._service.saveUrl(this.Url,this.userName).subscribe();
    },10000)
  
  }
}

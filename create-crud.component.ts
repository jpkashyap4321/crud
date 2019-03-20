import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
// import { FormGroup,Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-crud',
  templateUrl: './create-crud.component.html',
  styleUrls: ['./create-crud.component.css']
})
export class CreateCrudComponent implements OnInit {
  model:any={};
  // skills:any=['Android','Angular JS','JAVA','PHP-Codeignitor'];

  // state_list:any = ['Delhi','UP','Maharastra','WestBengal'];
  // city_list:any = ['New Delhi','Lucknow','Mumbai','Kolkata'];

  selectedFile:any ={};
  last_id:any = {};
  image:any = {};


  constructor(public service:CrudService, public router: Router, public session: UserService) { }

  ngOnInit() {
    
  }

  onSelectedFile(event){
    console.log(event.target.files[0]);
    this.selectedFile = event.target.files[0];
  }
 
   formdata= new FormData; 
    
    submit_details(){
    console.log(this.model);
    this.service.insertdata(this.model)
    .subscribe((result)=>{
      console.log(result);
      this.router.navigate(['/list']);
      this.formdata.append("image",this.selectedFile,this.selectedFile.name);


      // this.image.form=this.formdata;
      // this.image.id=this.last_id;
      // console.log("image");
      
      // console.log(this.image);
  
      this.service.uploadFile(this.formdata)
      .subscribe((res=>{
        // console.log("img");
        console.log(res);   
      }))

    },error=>{
      console.log(error);
    }
    )


  }


  logout(){
    this.session.logoutSession();
    this.router.navigate(['']);
  }

}

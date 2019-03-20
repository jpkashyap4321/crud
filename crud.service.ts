import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public http:HttpClient) { }

  private data:any;
  can_active:any = '';
  datauser:any = {};


  set_data(value)
  {
    this.data = value;
  }

  get_data()
  {
    return this.data;
  }


  header:any = new HttpHeaders();

  insertdata(request_data:any){
    console.log(request_data);
    return this.http.post("http://localhost/test/index.php/Insert/submit_details",JSON.stringify(request_data),{headers: this.header});
  }
  

  fetchdata()
{
  console.log(this.data);
  return this.http.get("http://localhost/test/index.php/Listing/get_list",  { headers : this.header });
}

deletedata(id: number){
return this.http.delete("http://localhost/test/index.php/delete/delete_data/" +id);
}

editdata(id){
  console.log(id);
return this.http.get("http://localhost/test/index.php/edit/edit_data/"+id,{headers: this.header});
}

updatedata(request_data:any){
return this.http.post("http://localhost/test/index.php/update/update_data",JSON.stringify(request_data),{headers: this.header});
}

searching(value){
  return this.http.post("http://localhost/test/index.php/Listing/search_list",JSON.stringify(value),{headers: this.header});
}

uploadFile(request_data:any){
  console.log("file uploaded");
  return this.http.post("http://localhost/test/index.php/Insert/upload_file", {headers: this.header});
}
  

fetchUser(request_data:any){
  console.log(request_data);
  return this.http.post("http://localhost/test/index.php/user/login",JSON.stringify(request_data),{headers: this.can_active.header});
}

}

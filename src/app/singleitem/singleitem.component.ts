import { Component } from '@angular/core';


@Component ({
  selector: 'app-single-item',
  templateUrl: './singleitem.component.html',
  styleUrls:[]
})
export class SingleItemComponent {
  status = false;
  msg= "hey";

  onClick(event){
    if(this.status){
      this.status=false;
      this.msg="hey";

    }
    else{
      this.status=true;
      this.msg="msg"
    }
    console.log(this.status);
  }



}

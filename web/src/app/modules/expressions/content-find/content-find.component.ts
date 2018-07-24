import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../../services/api-service.service';

@Component({
  selector: 'app-content-find',
  templateUrl: './content-find.component.html',
  styleUrls: ['./content-find.component.scss']
})
export class ContentFindComponent implements OnInit {

  contentID = {
    id: '19562531'
  };
  constructor(private apiServ: ApiServiceService) { }

  ngOnInit() {
  }

  parseContentData(event: any) {
    this.apiServ.getAllExpPageID(this.contentID)
    .subscribe(data => {
      console.log(data);
    });
  }

}

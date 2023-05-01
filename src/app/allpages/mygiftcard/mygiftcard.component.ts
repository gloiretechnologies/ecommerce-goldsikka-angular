import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-mygiftcard',
  templateUrl: './mygiftcard.component.html',
  styleUrls: ['./mygiftcard.component.scss']
})
export class MygiftcardComponent implements OnInit {
  giftcard:any
  giftcardLength: any;
 
  constructor(private api: ApiService,private clipboardService: ClipboardService) { }

  ngOnInit(): void {
    this.getGiftcard()
  }
  copyContent(input:any){
input.select();
document.execCommand('copyied');
input.setSelectRange(0,0);
  }
 
  getGiftcard() {
    this.api.get(`ecom/giftcard`)
.subscribe((r: any) => {
  this.giftcard = r;
  this.giftcardLength = r.length

console.log('from my giftcard',this.giftcard , "lenght", this.giftcardLength );
});
}
}

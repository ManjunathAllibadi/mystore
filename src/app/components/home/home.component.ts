import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) {
    
   }

  ngOnInit(): void {
  }

  items = [
    "//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=manju0e2-21&language=en_IN&marketplace=amazon&region=IN&placement=B000FI8ER8&asins=B000FI8ER8&linkId=07d13b2f6de53d11ec0ed497889fb046&show_border=true&link_opens_in_new_window=true"
  ];
  

}

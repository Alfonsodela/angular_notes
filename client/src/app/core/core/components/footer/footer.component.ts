import { Component, OnInit, Input } from '@angular/core';
import { FooterInterface } from '../models/footer.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public footer: FooterInterface[] = [
    {
      name: "Twitter",
      link: "https://twitter.com/home"
    },
    {
      name: "Facebook",
      link: "www.facebook.com"
    },
    {
      name: "Instagram",
      link: "www.instagram.com"
    },
    {
      name: "Tik Tok",
      link: "www.tiktok.com"
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';
import { Portfolio, Images } from '../../_models/portfolio';
import { PortfolioService } from '../../_services/portfolio.service';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  closeResult: string;
  images: Array<string>;

  listPortfolios: Portfolio[];
  listImgs: Images[];
  titleProject:string;

  constructor(private modalService: NgbModal, private _portfolioService: PortfolioService) { }

  ngOnInit() {
    this.getListPortfolios();
  }

  getListPortfolios(): void {
    this.listPortfolios = this._portfolioService.getPortfolios();
  }

  open(content, id) {
    this.modalService.open(content);
    if (id) {
      this.getListImgs(id);
    }
  }

  getListImgs(id) {
    this.listImgs = [];
    this.listPortfolios.map(p => {
      if (p.id === id) {
        this.titleProject = p.title;
        this.listImgs = p.images
      }
    });
  }


}

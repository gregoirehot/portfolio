import { Injectable } from '@angular/core';
import { Portfolio } from '../_models/portfolio';
import { PORTFOLIOS } from '../_mocks/mock-portfolio';

@Injectable()
export class PortfolioService {

  constructor() { }

  getPortfolios(): Portfolio[]{
    return PORTFOLIOS;
  }

}

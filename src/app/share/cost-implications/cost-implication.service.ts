import { Injectable } from '@angular/core';

@Injectable()
export class CostImplicationService {
  getCostImplicationsData() {
    return [
      {
        id: '1000',
        KM: 'Chi phí văn phòng phẩm',
        STK: ' 627',
        LCP: 'Chi phí sản xuất chung',
        LPB: 'Phân bố',
        status: 2,
      },
      {
        id: '1001',
        KM: 'Chi phí OS',
        STK: ' 627',
        LCP: 'Chi phí quản lý',
        LPB: 'Không phân bố',
        status: 1,
      },
      {
        id: '1002',
        KM: 'Chi phí thuê văn phòng',
        STK: ' 627',
        LCP: 'Chi phí sản xuất chung',
        LPB: 'Phân bố',
        status: 0,
      },
      {
        id: '1003',
        KM: 'Chi phí văn phòng phẩm',
        STK: ' 627',
        LCP: 'Chi phí sản xuất chung',
        LPB: 'Phân bố',
        status: 2,
      },
      {
        id: '1004',
        KM: 'Chi phí văn phòng phẩm',
        STK: ' 627',
        LCP: 'Chi phí sản xuất chung',
        LPB: 'Phân bố',
        status: 2,
      },
      {
        id: '1005',
        KM: 'Chi phí văn phòng phẩm',
        STK: ' 627',
        LCP: 'Chi phí sản xuất chung',
        LPB: 'Phân bố',
        status: 2,
      },
      {
        id: '1006',
        KM: 'Chi phí văn phòng phẩm',
        STK: ' 627',
        LCP: 'Chi phí sản xuất chung',
        LPB: 'Phân bố',
        status: 2,
      },
      {
        id: '1007',
        KM: 'Chi phí văn phòng phẩm',
        STK: ' 627',
        LCP: 'Chi phí sản xuất chung',
        LPB: 'Phân bố',
        status: 2,
      },
      {
        id: '1008',
        KM: 'Chi phí văn phòng phẩm',
        STK: ' 627',
        LCP: 'Chi phí sản xuất chung',
        LPB: 'Phân bố',
        status: 2,
      },
      {
        id: '1009',
        KM: 'Chi phí văn phòng phẩm',
        STK: ' 627',
        LCP: 'Chi phí sản xuất chung',
        LPB: 'Phân bố',
        status: 2,
      },
      {
        id: '1010',
        KM: 'Chi phí văn phòng phẩm',
        STK: ' 623',
        LCP: 'Chi phí sản xuất chung',
        LPB: 'Phân bố',
        status: 2,
      },
      {
        id: '1011',
        KM: 'Chi phí OS',
        STK: ' 625',
        LCP: 'Chi phí quản lý',
        LPB: 'Không phân bố',
        status: 1,
      },
      {
        id: '1012',
        KM: 'Chi phí thuê văn phòng',
        STK: ' 631',
        LCP: 'Chi phí sản xuất chung',
        LPB: 'Phân bố',
        status: 0,
      },
      {
        id: '1013',
        KM: 'Chi phí văn phòng phẩm',
        STK: ' 614',
        LCP: 'Chi phí sản xuất chung',
        LPB: 'Phân bố',
        status: 2,
      },
      {
        id: '1014',
        KM: 'Chi phí văn phòng phẩm',
        STK: ' 628',
        LCP: 'Chi phí sản xuất chung',
        LPB: 'Phân bố',
        status: 2,
      },
      {
        id: '1015',
        KM: 'Chi phí văn phòng phẩm',
        STK: ' 622',
        LCP: 'Chi phí sản xuất chung',
        LPB: 'Phân bố',
        status: 2,
      },
      {
        id: '1016',
        KM: 'Chi phí văn phòng phẩm',
        STK: ' 622',
        LCP: 'Chi phí sản xuất chung',
        LPB: 'Phân bố',
        status: 2,
      },
      {
        id: '1017',
        KM: 'Chi phí văn phòng phẩm',
        STK: ' 621',
        LCP: 'Chi phí sản xuất chung',
        LPB: 'Phân bố',
        status: 2,
      },
      {
        id: '1018',
        KM: 'Chi phí văn phòng phẩm',
        STK: ' 615',
        LCP: 'Chi phí sản xuất chung',
        LPB: 'Phân bố',
        status: 2,
      },
      {
        id: '1019',
        KM: 'Chi phí văn phòng phẩm',
        STK: ' 628',
        LCP: 'Chi phí sản xuất chung',
        LPB: 'Phân bố',
        status: 2,
      },
    ];
  }

  getCostImplicationsMini() {
    return Promise.resolve(this.getCostImplicationsData().slice(0, 5));
  }

  getCostImplicationsSmall() {
    return Promise.resolve(this.getCostImplicationsData().slice(0, 10));
  }

  getCostImplications() {
    return Promise.resolve(this.getCostImplicationsData());
  }
}

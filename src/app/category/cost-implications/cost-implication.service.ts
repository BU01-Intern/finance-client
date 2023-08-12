import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CostImplicationService {
  getCostImplicationsData() {
    return [
      {
        id: '1000',
        khoan_muc: 'Chi phí văn phòng phẩm',
        so_tai_khoan: ' 627',
        loai_chi_phi: 'Chi phí sản xuất chung',
        loai_phan_bo: 'Phân bố',
        trang_thai: 2,
      },
      {
        id: '1001',
        khoan_muc: 'Chi phí OS',
        so_tai_khoan: ' 627',
        loai_chi_phi: 'Chi phí quản lý',
        loai_phan_bo: 'Không phân bố',
        trang_thai: 1,
      },
      {
        id: '1002',
        khoan_muc: 'Chi phí thuê văn phòng',
        so_tai_khoan: ' 627',
        loai_chi_phi: 'Chi phí sản xuất chung',
        loai_phan_bo: 'Phân bố',
        trang_thai: 0,
      },
      {
        id: '1003',
        khoan_muc: 'Chi phí văn phòng phẩm',
        so_tai_khoan: ' 627',
        loai_chi_phi: 'Chi phí sản xuất chung',
        loai_phan_bo: 'Phân bố',
        trang_thai: 2,
      },
      {
        id: '1004',
        khoan_muc: 'Chi phí văn phòng phẩm',
        so_tai_khoan: ' 627',
        loai_chi_phi: 'Chi phí sản xuất chung',
        loai_phan_bo: 'Phân bố',
        trang_thai: 2,
      },
      {
        id: '1005',
        khoan_muc: 'Chi phí văn phòng phẩm',
        so_tai_khoan: ' 627',
        loai_chi_phi: 'Chi phí sản xuất chung',
        loai_phan_bo: 'Phân bố',
        trang_thai: 2,
      },
      {
        id: '1006',
        khoan_muc: 'Chi phí văn phòng phẩm',
        so_tai_khoan: ' 627',
        loai_chi_phi: 'Chi phí sản xuất chung',
        loai_phan_bo: 'Phân bố',
        trang_thai: 2,
      },
      {
        id: '1007',
        khoan_muc: 'Chi phí văn phòng phẩm',
        so_tai_khoan: ' 627',
        loai_chi_phi: 'Chi phí sản xuất chung',
        loai_phan_bo: 'Phân bố',
        trang_thai: 2,
      },
      {
        id: '1008',
        khoan_muc: 'Chi phí văn phòng phẩm',
        so_tai_khoan: ' 627',
        loai_chi_phi: 'Chi phí sản xuất chung',
        loai_phan_bo: 'Phân bố',
        trang_thai: 2,
      },
      {
        id: '1009',
        khoan_muc: 'Chi phí văn phòng phẩm',
        so_tai_khoan: ' 627',
        loai_chi_phi: 'Chi phí sản xuất chung',
        loai_phan_bo: 'Phân bố',
        trang_thai: 2,
      },
      {
        id: '1010',
        khoan_muc: 'Chi phí văn phòng phẩm',
        so_tai_khoan: ' 623',
        loai_chi_phi: 'Chi phí sản xuất chung',
        loai_phan_bo: 'Phân bố',
        trang_thai: 2,
      },
      {
        id: '1011',
        khoan_muc: 'Chi phí OS',
        so_tai_khoan: ' 625',
        loai_chi_phi: 'Chi phí quản lý',
        loai_phan_bo: 'Không phân bố',
        trang_thai: 1,
      },
      {
        id: '1012',
        khoan_muc: 'Chi phí thuê văn phòng',
        so_tai_khoan: ' 631',
        loai_chi_phi: 'Chi phí sản xuất chung',
        loai_phan_bo: 'Phân bố',
        trang_thai: 0,
      },
      {
        id: '1013',
        khoan_muc: 'Chi phí văn phòng phẩm',
        so_tai_khoan: ' 614',
        loai_chi_phi: 'Chi phí sản xuất chung',
        loai_phan_bo: 'Phân bố',
        trang_thai: 2,
      },
      {
        id: '1014',
        khoan_muc: 'Chi phí văn phòng phẩm',
        so_tai_khoan: ' 628',
        loai_chi_phi: 'Chi phí sản xuất chung',
        loai_phan_bo: 'Phân bố',
        trang_thai: 2,
      },
      {
        id: '1015',
        khoan_muc: 'Chi phí văn phòng phẩm',
        so_tai_khoan: ' 622',
        loai_chi_phi: 'Chi phí sản xuất chung',
        loai_phan_bo: 'Phân bố',
        trang_thai: 2,
      },
      {
        id: '1016',
        khoan_muc: 'Chi phí văn phòng phẩm',
        so_tai_khoan: ' 622',
        loai_chi_phi: 'Chi phí sản xuất chung',
        loai_phan_bo: 'Phân bố',
        trang_thai: 2,
      },
      {
        id: '1017',
        khoan_muc: 'Chi phí văn phòng phẩm',
        so_tai_khoan: ' 621',
        loai_chi_phi: 'Chi phí sản xuất chung',
        loai_phan_bo: 'Phân bố',
        trang_thai: 2,
      },
      {
        id: '1018',
        khoan_muc: 'Chi phí văn phòng phẩm',
        so_tai_khoan: ' 615',
        loai_chi_phi: 'Chi phí sản xuất chung',
        loai_phan_bo: 'Phân bố',
        trang_thai: 2,
      },
      {
        id: '1019',
        khoan_muc: 'Chi phí văn phòng phẩm',
        so_tai_khoan: ' 628',
        loai_chi_phi: 'Chi phí sản xuất chung',
        loai_phan_bo: 'Phân bố',
        trang_thai: 2,
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

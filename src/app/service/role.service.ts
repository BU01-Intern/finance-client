import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  constructor() { }
  roles: Role[] = [
    {
      id: "role1",
      titleRole: "Quản lý dự án",
      projectRole: "Quản lý dự án ABC",
      status: false,
      member: [
        {
          id: "member1",
          name: "Nguyễn Văn A",
          email: "van.a@example.com",
          org: "Công ty ABC",
          status: true,
        },
        {
          id: "member2",
          name: "Trần Thị B",
          email: "thi.b@example.com",
          org: "Công ty ABC",
          status: true,
        },
      ],
    },
    {
      id: "role2",
      titleRole: "Nhà phân tích",
      projectRole: "Nhà phân tích hệ thống XYZ",
      status: true,
      member: [
        {
          id: "member3",
          name: "Lê Hoàng C",
          email: "hoang.c@example.com",
          org: "Công ty XYZ",
          status: false,
        },
      ],
    },
    {
      id: "role3",
      titleRole: "Lập trình viên",
      projectRole: "Lập trình viên Web",
      status: true,
      member: [
        {
          id: "member4",
          name: "Phạm Thanh D",
          email: "thanh.d@example.com",
          org: "Công ty WebDev",
          status: true,
        },
        {
          id: "member5",
          name: "Ngô Minh E",
          email: "minh.e@example.com",
          org: "Công ty WebDev",
          status: true,
        },
      ],
    },
    {
      id: "role4",
      titleRole: "Quản lý sản xuất",
      projectRole: "Quản lý dây chuyền sản xuất",
      status: false,
      member: [
        {
          id: "member6",
          name: "Vũ Thị F",
          email: "thi.f@example.com",
          org: "Công ty Manufa",
          status: true,
        },
      ],
    },
    {
      id: "role5",
      titleRole: "Kiểm tra chất lượng",
      projectRole: "Kiểm tra sản phẩm",
      status: false,
      member: [
        {
          id: "member7",
          name: "Nguyễn Quang G",
          email: "quang.g@example.com",
          org: "Công ty QualityCo",
          status: true,
        },
      ],
    },
    {
      id: "rolveveevnjkevnjevknevkekvenkvnekvnkeveknvnkkne6",
      titleRole: "Nhân viên kỹ thuật",
      projectRole: "Hỗ trợ kỹ thuật",
      status: true,
      member: [
        {
          id: "member8",
          name: "Trần Mạnh H",
          email: "manh.h@example.com",
          org: "Công ty TechSupport",
          status: true,
        },
      ],
    },
    {
      id: "role7",
      titleRole: "Phân tích dữ liệu",
      projectRole: "Phân tích dữ liệu thống kê",
      status: true,
      member: [
        {
          id: "member9",
          name: "Lê Quỳnh I",
          email: "quynh.i@example.com",
          org: "Công ty DataCo",
          status: true,
        },
      ],
    },
    {
      id: "role8",
      titleRole: "Thiết kế đồ họa",
      projectRole: "Thiết kế giao diện người dùng",
      status: true,
      member: [
        {
          id: "member10",
          name: "Nguyễn Hoài J",
          email: "hoai.j@example.com",
          org: "Công ty DesignWorks",
          status: true,
        },
      ],
    },
    {
      id: "role9",
      titleRole: "Kế toán viên",
      projectRole: "Quản lý tài chính",
      status: true,
      member: [
        {
          id: "member11",
          name: "Trần Ngọc K",
          email: "ngoc.k@example.com",
          org: "Công ty FinanceCo",
          status: true,
        },
      ],
    },
    {
      id: "role10",
      titleRole: "Quản lý nhân sự",
      projectRole: "Quản lý nhân sự và HR",
      status: true,
      member: [
        {
          id: "member12",
          name: "Phạm Đình L",
          email: "dinh.l@example.com",
          org: "Công ty HRM",
          status: true,
        },
      ],
    },
  ];
  
  getRoleById(roleId: string) {
    if (roleId) {
      return this.roles.find(role => role.id === roleId);
    }
    else return
  }

  getRolesList() {
    return this.roles;
  }

  getMemberByRoleId(roleId: string) {
    const role = this.roles.find(role => role.id === roleId);
    if (role) {
      return role.member;
    }
    return [];
  }

}

export interface Role {
  id: string;
  titleRole: string;
  projectRole: string;
  status: boolean;
  member: Member[];
}

export interface Member {
  id: string;
  name: string;
  email: string;
  org: string;
  status: boolean;
}

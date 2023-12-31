import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor() { }
  projects: Project[] = [
    {
      id: '1',
      project_name: 'VSS_FINANCE(VSSFIN)',
      company: 'Bu01',
      start_date: '15/02/2023',
      finish_date: '30/09/2023',
      pm: { name: 'Nguyễn Tiến Đạt', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
      category: 'Nội bộ',
      customer: 'VSS',
      status: true,
      member: [
        {
          id: 'member 1',
          employee: { name: 'Nguyễn Tiến Đạt', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
          email: 'NguyenTienDat@gmail.com ',
          start_date: '15/5/2023',
          finish_date: '15/5/2023',
          role: 'pm',
          status: true,
        },
        {
          id: 'member 12',
          employee: { name: ' Nguyễn Văn A', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
          email: 'nguyenvanA@gmail.com ',
          start_date: '15/5/2023',
          finish_date: '15/5/2023',
          role: 'dev',
          status: true,
        },
        {
          id: 'member 13',
          employee: { name: ' Nguyễn Thị T', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
          email: 'nguyenThiT@gmail.com ',
          start_date: '15/5/2023',
          finish_date: '15/5/2023',
          role: 'BA',
          status: true,
        },
        {
          id: 'member 14',
          employee: { name: ' Phạm Tiến D', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
          email: 'PhamTienD@gmail.com ',
          start_date: '15/5/2023',
          finish_date: '15/5/2023',
          role: 'dev',
          status: true,
        },

      ]
    },
    {
      id: '2',
      project_name: 'VSS_Credit',
      company: 'Bu02',
      start_date: '16/02/2023',
      finish_date: '31/09/2023',
      pm: { name: 'Nguyễn Phúc Lợi', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
      category: 'Nội bộ',
      customer: 'VSS',
      status: true,
      member: [
        {
          id: 'member 2',
          employee: { name: 'Nguyễn Phúc Lợi', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
          email: 'NguyenPhucLoi.com ',
          start_date: '15/5/2023',
          finish_date: '15/5/2023',
          role: 'pm',
          status: true,
        },
        {
          id: 'member 15',
          employee: { name: ' Lê Văn B', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
          email: 'LeVanB@gmail.com ',
          start_date: '15/5/2023',
          finish_date: '15/5/2023',
          role: 'dev',
          status: true,
        },
        {
          id: 'member 16',
          employee: { name: 'Nguyễn Đức B', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
          email: 'NguyenDucBB@gmail.com ',
          start_date: '15/5/2023',
          finish_date: '15/5/2023',
          role: 'dev',
          status: true,
        },
        {
          id: 'member 17',
          employee: { name: 'Hoàng Thị T', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
          email: 'HoangThiT@gmail.com.com ',
          start_date: '15/5/2023',
          finish_date: '15/5/2023',
          role: 'dev',
          status: true,
        },
        {
          id: 'member 18',
          employee: { name: 'Đỗ Quỳnh A', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
          email: 'DoQuynhA@gmail.com ',
          start_date: '15/5/2023',
          finish_date: '15/5/2023',
          role: 'BA',
          status: true,
        }
      ]
    },
    {
      id: '3',
      project_name: 'DuAn3 ',
      company: 'Bu03',
      start_date: '18/02/2023',
      finish_date: '30/01/2023',
      pm: { name: 'Bùi Quang Khải', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
      category: 'Nội bộ',
      customer: 'VSS',
      status: true,
      member: [
        {
          id: 'member 3',
          employee: { name: 'Bùi Quang Khải', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
          email: 'BuiQuangKhai@gmail.com ',
          start_date: '15/5/2023',
          finish_date: '15/5/2023',
          role: 'pm',
          status: true,
        },
        {
          id: 'member 3',
          employee: { name: 'Đinh Văn C', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
          email: 'ĐinhVanC@gmail.com ',
          start_date: '15/5/2023',
          finish_date: '15/5/2023',
          role: 'dev',
          status: true,
        },
        {
          id: 'member 3',
          employee: { name: 'Đinh Văn C', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
          email: 'ĐinhVanC@gmail.com ',
          start_date: '15/5/2023',
          finish_date: '15/5/2023',
          role: 'dev',
          status: true,
        },
        {
          id: 'member 3',
          employee: { name: 'Đinh Văn C', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
          email: 'ĐinhVanC@gmail.com ',
          start_date: '15/5/2023',
          finish_date: '15/5/2023',
          role: 'dev',
          status: true,
        }
      ]
    },
    {
      id: '4',
      project_name: 'DuAn4',
      company: 'Bu04',
      start_date: '10/02/2023',
      finish_date: '30/07/2023',
      pm: { name: 'Đỗ Quang Minh', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
      category: 'Bên Ngoài',
      customer: 'VSS',
      status: true,
      member: [
        {
          id: 'member 4',
          employee: { name: 'Nguyễn Tiến D', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
          email: 'nguyentienD@gmail.com ',
          start_date: '15/5/2023',
          finish_date: '15/5/2023',
          role: 'dev',
          status: true,
        }
      ]
    },
    {
      id: '5',
      project_name: 'DuAn5',
      company: 'Bu05',
      start_date: '26/02/2023',
      finish_date: '30/09/2023',
      pm: { name: 'Nguyễn Tiến Đạt', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
      category: 'Nội bộ',
      customer: 'VSS',
      status: true,
      member: [
        {
          id: 'member 5',
          employee: { name: 'Trịnh Thùy E', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
          email: 'TrinhThuyE@gmail.com ',
          start_date: '15/5/2023',
          finish_date: '15/5/2023',
          role: 'pm',
          status: true,
        }
      ]
    },
    {
      id: '6',
      project_name: 'DuAn6',
      company: 'Bu01',
      start_date: '15/02/2023',
      finish_date: '30/09/2023',
      pm: { name: 'Lưu Quang Huy', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
      category: 'Nội bộ',
      customer: 'VSS',
      status: true,
      member: [
        {
          id: 'member 6',
          employee: { name: 'Mai Thị F', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
          email: 'nguyenvanA@gmail.com ',
          start_date: '15/5/2023',
          finish_date: '15/5/2023',
          role: 'dev',
          status: true,
        }
      ]
    },
    {
      id: '7',
      project_name: 'DuAn7',
      company: 'Bu01',
      start_date: '15/02/2023',
      finish_date: '30/09/2023',
      pm: { name: 'Nguyễn Tiến Đạt', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
      category: 'Nội bộ',
      customer: 'VSS',
      status: true,
      member: [
        {
          id: 'member 7',
          employee: { name: 'Nguyễn Đức G', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
          email: 'nguyenducG@gmail.com ',
          start_date: '15/5/2023',
          finish_date: '15/5/2023',
          role: 'pm',
          status: true,
        }
      ]
    },
    {
      id: '8',
      project_name: 'DuAn8',
      company: 'Bu01',
      start_date: '15/02/2023',
      finish_date: '30/09/2023',
      pm: { name: 'Nguyễn Tiến Đạt', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
      category: 'Nội bộ',
      customer: 'VSS',
      status: true,
      member: [
        {
          id: 'member 8',
          employee: { name: 'Đỗ Quang H', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
          email: 'doquangH@gmail.com ',
          start_date: '15/5/2023',
          finish_date: '15/5/2023',
          role: 'dv',
          status: true,
        }
      ]
    },
    {
      id: '9',
      project_name: 'DuAn9',
      company: 'Bu01',
      start_date: '15/02/2023',
      finish_date: '30/09/2023',
      pm: { name: 'Nguyễn Tiến Đạt', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
      category: 'Nội bộ',
      customer: 'VSS',
      status: true,
      member: [
        {
          id: 'member 9',
          employee: { name: 'Vũ Văn J', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
          email: 'VuVanJ@gmail.com ',
          start_date: '15/5/2023',
          finish_date: '15/5/2023',
          role: 'dev',
          status: true,
        }
      ]
    },
    {
      id: '10',
      project_name: 'DuAn10',
      company: 'Bu01',
      start_date: '15/02/2023',
      finish_date: '30/09/2023',
      pm: { name: 'Nguyễn Tiến Đạt', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
      category: 'Nội bộ',
      customer: 'VSS',
      status: true,
      member: [
        {
          id: 'member 10',
          employee: {name: 'Đinh Văn K', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
          email: 'DinhVanK@gmail.com ',
          start_date: '15/5/2023',
          finish_date: '15/5/2023',
          role: 'dev',
          status: true,
        }
      ]
    },
    {
      id: '11',
      project_name: 'DuAn11',
      company: 'Bu01',
      start_date: '15/02/2023',
      finish_date: '30/09/2023',
      pm: { name: 'Nguyễn Tiến Đạt', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
      category: 'Nội bộ',
      customer: 'VSS',
      status: true,
      member: [
        {
          id: 'member 11',
          employee: {name: 'Đinh Văn K', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
          email: 'DinhVanK@gmail.com ',
          start_date: '15/5/2023',
          finish_date: '15/5/2023',
          role: 'dev',
          status: true,
        }
      ]
    },
  ];

  
  getProjectById(projectId: string) {
    if (projectId) {
      return this.projects.find(project => project.id === projectId);
    }
    else return
  }

  getProjectsList() {
    return this.projects;
  }

  getMemberById(projectId: string) {
    const project = this.projects.find(project => project.id === projectId);
    if (project) {
      return project.member;
    }
    return [];
  }
}

export interface Project {
  id: string
  project_name: string;
  company: string;
  start_date: string;
  finish_date: string;
  pm: Representatives;
  category: string;
  customer: string;
  status: boolean;
  member: Member[];

}

export interface Representatives {
  name: string;
  image: string;
}

export interface Member {
  id: string;
  employee: Representatives;
  email: string;
  start_date: string;
  finish_date: string;
  role: string;
  status: boolean;
}

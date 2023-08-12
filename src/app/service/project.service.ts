import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor() { }
  projects: Project[] = [
    {
      project_name: 'DuAn1',
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
          employee: { name: ' Nguyễn Văn A', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
          email: 'nguyenvanA@gmail.com ',
          start_date: '15/5/2023',
          finish_date: '15/5/2023',
          role: 'pm',
          status: true,
        }
      ]
    },
    {
      project_name: 'DuAn2',
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
          employee: { name: ' Lê Văn B', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
          email: 'LeVanB@gmail.com ',
          start_date: '15/5/2023',
          finish_date: '15/5/2023',
          role: 'pm',
          status: true,
        }
      ]
    },
    {
      project_name: 'DuAn3',
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
          employee: { name: 'Đinh Văn C', image: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912990/avatar-icon-md.png' },
          email: 'ĐinhVanC@gmail.com ',
          start_date: '15/5/2023',
          finish_date: '15/5/2023',
          role: 'pm',
          status: true,
        }
      ]
    },
    {
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
      project_name: 'DuAn1',
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
      project_name: 'DuAn1',
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
      project_name: 'DuAn1',
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
      project_name: 'DuAn3',
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
  ];

  
  getProjectByName(project_Name: string) {
    if (project_Name) {
      return this.projects.find(project => project.project_name === project_Name);
    }
    else return
  }

  getProjectsList() {
    return this.projects;
  }

  getMemberByName(project_Name: string) {
    const project = this.projects.find(project => project.project_name === project_Name);
    if (project) {
      return project.member;
    }
    return [];
  }
}

export interface Project {
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

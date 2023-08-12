import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaffserviceService {

  constructor() { }

  staffs: Staff[] = [
    {
      "name": "John Doe",
      "id": "123",
      "picture": "/assets/avatar.png",
      "email": "john.doe@example.com",
      "org": "Department A",
      "title": "Manager",
      "status": true,
      "project": [
        {
          "project": "Project A",
          "picture": "/assets/project.jpg",
          "role": "Developer",
          "startDate": "2023-06-01",
          "endDate": "2023-08-31",
          "status": true
        },
        {
          "project": "Project B",
          "picture": "/assets/project.jpg",
          "role": "QA Tester",
          "startDate": "2023-07-15",
          "endDate": "2023-09-30",
          "status": false
        },
      ]
    },
    {
      "name": "Jane Smith",
      "id": "456",
      "picture": "/assets/avatar.png",
      "email": "jane.smith@example.com",
      "org": "Department B",
      "title": "Developer",
      "status": true,
      "project": [
        {
          "project": "Project C",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": true
        },
        {
          "project": "Project D",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": false
        },
      ]
    },
    {
      "name": "Michael Johnson",
      "id": "789",
      "picture": "/assets/avatar.png",
      "email": "michael.johnson@example.com",
      "org": "Department C",
      "title": "Designer",
      "status": false,
      "project": [
        {
          "project": "Project E",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": true
        },
        {
          "project": "Project F",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": false
        }
      ]
    },
    {
      "name": "hehehr",
      "id": "5324532",
      "picture": "/assets/avatar.png",
      "email": "michael.johnson@example.com",
      "org": "Department C",
      "title": "Designer",
      "status": false,
      "project": [
        {
          "project": "Project E",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": true
        },
        {
          "project": "Project F",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": false
        }
      ]
    },
    {
      "name": "ji6reg",
      "id": "12312",
      "picture": "/assets/avatar.png",
      "email": "michael.johnson@example.com",
      "org": "Department C",
      "title": "Designer",
      "status": false,
      "project": [
        {
          "project": "Project E",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": true
        },
        {
          "project": "Project F",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": false
        }
      ]
    },
    {
      "name": " nmvnvnc",
      "id": "643245",
      "picture": "/assets/avatar.png",
      "email": "michael.johnson@example.com",
      "org": "Department C",
      "title": "Designer",
      "status": false,
      "project": [
        {
          "project": "Project E",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": true
        },
        {
          "project": "Project F",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": false
        }
      ]
    },
    {
      "name": "dfjad",
      "id": "87643",
      "picture": "/assets/avatar.png",
      "email": "michael.johnson@example.com",
      "org": "Department C",
      "title": "Designer",
      "status": false,
      "project": [
        {
          "project": "Project E",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": true
        },
        {
          "project": "Project F",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": false
        }
      ]
    },
    {
      "name": "lrrgaeg",
      "id": "25412265",
      "picture": "/assets/avatar.png",
      "email": "michael.johnson@example.com",
      "org": "Department C",
      "title": "Designer",
      "status": false,
      "project": [
        {
          "project": "Project E",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": true
        },
        {
          "project": "Project F",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": false
        }
      ]
    },
    {
      "name": "Mhaddfah",
      "id": "09876",
      "picture": "/assets/avatar.png",
      "email": "michael.johnson@example.com",
      "org": "Department C",
      "title": "Designer",
      "status": false,
      "project": [
        {
          "project": "Project E",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": true
        },
        {
          "project": "Project F",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": false
        }
      ]
    },
    {
      "name": "asdawad",
      "id": "32744",
      "picture": "/assets/avatar.png",
      "email": "michael.johnson@example.com",
      "org": "Department C",
      "title": "Designer",
      "status": false,
      "project": [
        {
          "project": "Project E",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": true
        },
        {
          "project": "Project F",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": false
        }
      ]
    },
    {
      "name": "kyrbe",
      "id": "2464262",
      "picture": "/assets/avatar.png",
      "email": "michael.johnson@example.com",
      "org": "Department C",
      "title": "Designer",
      "status": false,
      "project": [
        {
          "project": "Project E",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": true
        },
        {
          "project": "Project F",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": false
        }
      ]
    },
    {
      "name": "jetjebe",
      "id": "111111",
      "picture": "/assets/avatar.png",
      "email": "michael.johnson@example.com",
      "org": "Department C",
      "title": "Designer",
      "status": false,
      "project": [
        {
          "project": "Project E",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": true
        },
        {
          "project": "Project F",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": false
        }
      ]
    },
    {
      "name": "kyrtheeer",
      "id": "72222",
      "picture": "/assets/avatar.png",
      "email": "michael.johnson@example.com",
      "org": "Department C",
      "title": "Designer",
      "status": false,
      "project": [
        {
          "project": "Project E",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": true
        },
        {
          "project": "Project F",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": false
        }
      ]
    },
    {
      "name": "kfkefakj1",
      "id": "222222",
      "picture": "/assets/avatar.png",
      "email": "michael.johnson@example.com",
      "org": "Department C",
      "title": "Designer",
      "status": false,
      "project": [
        {
          "project": "Project E",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": true
        },
        {
          "project": "Project F",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": false
        }
      ]
    },
    {
      "name": "Michael gquenqofnoi",
      "id": "33333",
      "picture": "/assets/avatar.png",
      "email": "michael.johnson@example.com",
      "org": "Department C",
      "title": "Designer",
      "status": false,
      "project": [
        {
          "project": "Project E",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": true
        },
        {
          "project": "Project F",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": false
        }
      ]
    },
    {
      "name": "hsiklenwnfk",
      "id": "4444444",
      "picture": "/assets/avatar.png",
      "email": "michael.johnson@example.com",
      "org": "Department C",
      "title": "Designer",
      "status": false,
      "project": [
        {
          "project": "Project E",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": true
        },
        {
          "project": "Project F",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": false
        }
      ]
    },
    {
      "name": "fajlafba",
      "id": "555555",
      "picture": "/assets/avatar.png",
      "email": "michael.johnson@example.com",
      "org": "Department C",
      "title": "Designer",
      "status": false,
      "project": [
        {
          "project": "Project E",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": true
        },
        {
          "project": "Project F",
          "picture": "/assets/project.jpg",
          "role": "Designer",
          "startDate": "2023-06-15",
          "endDate": "2023-07-31",
          "status": false
        }
      ]
    },

  ]

  getProjectsByStaffId(staffId: string): Project[] {
    const staff = this.staffs.find(staff => staff.id === staffId);
    if (staff) {
      return staff.project;
    }

    return [];
  }

  getDetailById(id: string) {
    return this.staffs.find(staff => staff.id === id)
  }
}
export interface Staff {
  id: string;
  name: string;
  picture: string;
  email: string;
  org: string;
  title: string;
  status: boolean;
  project: Project[];
}
export interface Project {
  project: string,
  picture: string,
  role: string,
  startDate: string,
  endDate: string,
  status: boolean
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Experience {
  role: string;
  company: string;
  client?: string;
  period: string;
  points: string[];
}

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {

  summary =
    'Software Developer with 4+ years of experience designing, developing and deploying enterprise applications using C#, ASP.NET Core, Web API, Entity Framework Core, SQL Server, Oracle and .NET MAUI. I have worked on CRM, Helpdesk, HR, manufacturing and RFID solutions, and on SAP integration using RFC/BAPI.';

  stats = [
    { value: '4+', label: 'Years experience' },
    { value: '7+', label: 'Enterprise apps delivered' },
    { value: '300', label: 'Users on LeadCRM' },
    { value: '25%', label: 'Performance improvement' },
  ];

  education = [
    {
      degree: 'MBA',
      place: 'University of Pune',
      years: '2020 – 2022'
    },
    {
      degree: 'Bachelor of Engineering',
      place: 'SKNSITS Sinhgad Institute of Technology, Pune',
      years: '2015 – 2019'
    },
  ];

  experience: Experience[] = [

    {
      role: 'Software Developer',
      company: 'GBIS Global Business Information Systems',
      client: "D'Decor Exports & Imports Pvt. Ltd.",
      period: '05/2025 – Present',

      points: [
        'Built LeadCRM for 200–300 users with role-based access, lead assignment, follow-ups and dashboards.',
        'Developed a company-wide Helpdesk with ticket assignment, SLA tracking and escalation workflows.',
        'Integrated SAP ERP using RFC/BAPI for Attendance, Leave, Employee Master and Payslip modules.',
        'Built a real-time Manufacturing Dashboard on Oracle and a .NET MAUI mobile app for stock and orders.',
      ],
    },

    {
      role: 'Freelance Developer',
      company: "Aryan's Nextgen Ltd.",
      period: '09/2024 – 03/2025',

      points: [
        'Developed a Customer Management System and a Hotel Booking System using ASP.NET Core and Razor Pages.'
      ],
    },

    {
      role: 'Senior Software Engineer',
      company: 'AIS Pvt Ltd',
      period: '05/2024 – 07/2024',

      points: [
        'Wrote SQL stored procedures and functions, and built responsive UI with C#, JavaScript and SCSS.'
      ],
    },

    {
      role: 'Software Engineer',
      company: 'Clover Infotech Pvt Ltd',
      client: 'Star Union Dai-ichi Life Insurance',
      period: '05/2023 – 05/2024',

      points: [
        'Built ASP.NET Core MVC apps with the Repository Pattern and optimized SQL Server procedures.'
      ],
    },

    {
      role: 'Software Developer',
      company: 'Krios Info Sol',
      client: 'Mahindra and Mahindra',
      period: '09/2021 – 03/2023',

      points: [
        'Built enterprise modules with ASP.NET MVC and SQL Server, and resolved production issues.'
      ],
    },

    {
      role: 'Software Engineer',
      company: 'Dynomerk Control',
      period: '02/2020 – 02/2021',

      points: [
        'Developed business applications in C#, ASP.NET MVC and SQL Server, with code reviews and testing.'
      ],
    },

  ];
}
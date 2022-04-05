import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume1',
  templateUrl: './resume1.component.html',
  styleUrls: ['./resume1.component.scss']
})
export class Resume1Component implements OnInit {

  contact:any=[
    {
      label : "Address",
      text : "Bangalore, KA, 560100"
    },
    {
      label : "Phone",
      text : "9113921230"
    },
    {
      label : "E-mail",
      text : "preethi6901@gmail.com"
    },
    {
      label : "Linkedin",
      text : "https://www.linkedin.com/in/realpreethireddy"
    }
  ];
  skills:any=[
    {
      label : "Flexible & Adaptable",
      rating: 5,
      rating_text : "Excellent",
    },
    {
      label : "Critical thinking",
      rating: 4,
      rating_text : "Very Good",
    },
    {
      label : "Self-motivated professional",
      rating: 5,
      rating_text : "Excellent",
    },
    {
      label : "Organization and Time management",
      rating: 5,
      rating_text : "Excellent",
    },
    {
      label : "Teambuilding",
      rating: 4,
      rating_text : "Very Good",
    },
    {
      label : "Multitasking abilities",
      rating: 4,
      rating_text : "Very Good",
    },
    {
      label : "Adaptability",
      rating: 4,
      rating_text : "Very Good",
    },
    {
      label : "Training & Development",
      rating: 4,
      rating_text : "Very Good",
    },
    {
      label : "Compassion",
      rating: 5,
      rating_text : "Excellent",
    }
  ];
  languages:any=[
    {
      label : "English",
      rating: 5,
      rating_text : "Excellent",
    },
    {
      label : "Hindi",
      rating: 4,
      rating_text : "Very Good",
    },
    {
      label : "Kannada",
      rating: 3,
      rating_text : "Good",
    },
    {
      label : "Tamil",
      rating: 2,
      rating_text : "Average",
    },
    {
      label : "Telugu",
      rating: 2,
      rating_text : "Average",
    }
  ];

  workhistory:any=[
    {
      duration : "16Sep'21 - 19Feb'22",
      title: "Legal Intern",
      subtitle : "Prime legal, Bengaluru, Karnataka",
      bullet :[
        "Client counselling",
        "Answering legal queries on various legal platforms",
        "Involved in research work and drafting",
        "Assisted a human rights NGO named Talaash and provided Pro Bono Legal services",
        "Actively worked in the field of consumer,civil,criminal,family,corporate and commercial disputes",
        "Learnt clerical work",
        "Attended court proceedings"
      ]
    },
    {
      duration : "15Jan'20 - 15Feb'20",
      title: "Political Intern",
      subtitle : "MLA Satish Reddy, Bengaluru, Karnataka",
      bullet :[
        "Advocated for human rights",
        "Gained knowledge on arbitration, mediation and conciliation amongst parties at dispute",
        "Conducted survey & research on arbitration and mediation",
        "Toured Vidhana Soudha (Legislative House) in Bangalore, India"
      ]
    },
    {
      duration : "18Jul'19 - 14Aug'19",
      title: "Legal Intern",
      subtitle : "District Legal Service Authority, Bengaluru, Karnataka",
      bullet :[
        // "Served the underprivileged class by providing free Legal aid services and educated them on how to avail Legal aid services at DLSA's Legal aid cell",
        "i did my educational research by engaging myself with institutions like",
        "Lok Adalat",
        "Old Age Homes",
        "Central Jail",
        "NIMHANS",
        "Family Court",
        "Labour Court",
        "Juvenile Justice Board",
        "Legal Aid Cell"
      ]
    },
    {
      duration : "05Jan'19 - 15Feb'19",
      title: "Legal Intern",
      subtitle : "Senior council, Vivek Subba Reddy, President of advocate association, Bengaluru, Karnataka",
      bullet :[
        "Had the opportunity to work with Vivek Subba Reddy (Senior Designated President / Advocate / Politician)",
        "Gained practical knowledge in election petition and civil law",
        "Constantly involved in observing court proceeds and maintaining daily reports",
        "Involved in researching various provisions available in civil law",
      ]
    },
    {
      duration : "20Jul'18 - 23Aug'18",
      title: "Legal Intern",
      subtitle : "MD Basavanna Advocates, Bengaluru, Karnataka",
      bullet :[
        "Gained practical knowledge about court proceedings",
        "Learnt professional ethics and conduct of an advocate",
        "i was responsible for book keeping, Advocate Diary Maintenance, case follow ups",
        "Assist the clients based on their litigation"
      ]
    },
    {
      duration : "23Jan'18 - 20Feb'18",
      title: "Legal Intern",
      subtitle : "Mitra Jyoti NGO, Bengaluru, Karnataka",
      bullet :[
        "Reviewed legal information and proofed documentation for errors",
        "Participated in and took notes during meetings",
        "Attended depositions and court proceedings and prepared summaries on cases",
        "Performed legal and general research",
        "Provided assistance on compliance projects"
      ]
    }
  ];
  education:any=[
    {
      duration : "2017-08 - current",
      title: "BBA LL.B : Law ",
      subtitle : "Christ Academy Institute of Law - Bengaluru, Karnataka",
    },
    {
      duration : "2016-06 - 2017-07",
      title: "PUC : Commerce (SEBA)",
      subtitle : "Christ Academy Junior College - Bengaluru, Karnataka",
    },
    {
      duration : "2014-06 - 2015-03",
      title: "10th : Secondary Education",
      subtitle : "Acts Secondary School - Bengaluru, Karnataka",
    },
  ];
  accomplishments:any=[
    // {
    //   text:"Extra curricular activities",
    //   bullet:[
    //     "2nd place in the year 2018",
    //     "2nd place in the year 2019"
    //   ]
    // },
    {
      text:"Intra college moot court competitions",
      bullet:[
        "2nd place in the year 2018",
        "2nd place in the year 2019"
      ]
    },
    {
      text : "College treasurer in the year 2017"
    }
    // {
    //   text:"Won first place intra college competition such as",
    //   bullet:[
    //     "Badminton in the year 2018",
    //     "Football in the year 2018",
    //     "Cooking without fire in the year 2019",
    //     "Story writing in the year 2017"
    //   ]
    // }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonList, IonItemDivider, IonLabel, IonItem, IonCardContent, IonCardHeader, IonButtons, IonMenuButton, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, IonItemGroup, IonAccordionGroup, IonAccordion } from '@ionic/angular/standalone';
import { SideMenuPage } from '../side-menu/side-menu.page';


@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [SideMenuPage, IonList, IonAccordionGroup, IonAccordion, IonItemGroup, CommonModule, IonItemDivider, IonLabel, IonItem, IonCardContent, IonCardHeader, IonButtons, IonMenuButton, IonCard, IonHeader, IonToolbar, IonTitle, IonContent]
})
export class Tab2Page {

  public departmentsAndFaculties = [
    {
      departmentName: 'Master of Computer Application',
      faculties: [
        {
          image: 'https://media.licdn.com/dms/image/C4E03AQEbrZCjMmRPNw/profile-displayphoto-shrink_800_800/0/1604383315102?e=1712188800&v=beta&t=c-pzb4belfvHv3LZ8p0axzkoJZ3vV392yBl9oUS68W0',
          name: 'Pallavi Thakur',
          skills: [
            { name: 'Machine Learning' },
            { name: 'Data Science' },
            { name: 'Computer Networks' },
            { name: 'Network security' },
            { name: 'Web Technology' }
          ],
          experience: '6',
          description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.'
        },
        {
          image: 'https://media.licdn.com/dms/image/D5603AQHlArqe_2rzNQ/profile-displayphoto-shrink_100_100/0/1642960802562?e=1712188800&v=beta&t=bdij6quZjuuoFAt-myO5CjShBR6RlZuZjte2buSDAyg',
          name: 'Harshil Kanakia',
          skills: [
            { name: 'DevOps' },
            { name: 'C++' },
            { name: 'SQL' },
            { name: 'Java' },
            { name: 'Linux' },
            { name: 'MySQL' },
            { name: 'PHP' },
            { name: 'JSP' },
            { name: 'Oracle' },
            { name: 'Unix' }
          ],
          experience: '7',
          description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.',
        },
        {
          image: 'https://media.licdn.com/dms/image/C5603AQHurObRBeKfnQ/profile-displayphoto-shrink_800_800/0/1622806174140?e=1712188800&v=beta&t=RjSZwwl0ytF06le4F8nKey33MqyGxEhLptuosuTgEPk',
          name: 'Dr. Pooja Raundale',
          skills: [
            { name: 'Algorithms' },
            { name: 'Artificial Intelligence' },
            { name: 'C++' },
            { name: 'Machine Learning' },
            { name: 'Data Science' },
            { name: 'Deep Learning' },
            { name: 'Design Thinking' },
          ],
          experience: '10',
          description: 'Understanding the importance of human-centric design, I embrace Design Thinking methodologies to create solutions that not only meet technical requirements but also resonate with end-users.  🌐💡👨‍💻',
        },
        {
          image: 'https://media.licdn.com/dms/image/C5603AQGQhuWZSQ4OQg/profile-displayphoto-shrink_400_400/0/1591097772607?e=1712188800&v=beta&t=fQN-7kip_fKwyQZHNKSjmcaNk2-vqsEz9HeP1SI4QrM',
          name: 'Dr. Aarti Karande',
          skills: [
            { name: 'DevOps' },
            { name: 'C++' },
            { name: 'SQL' },
            { name: 'Java' },
            { name: 'Linux' },
            { name: 'MySQL' },
            { name: 'PHP' },
            { name: 'JSP' },
            { name: 'Oracle' },
            { name: 'Unix' }
          ],
          experience: '11',
          description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.'
        },
        {
          image: 'https://media.licdn.com/dms/image/C4D03AQEkOlTWhMoLCg/profile-displayphoto-shrink_800_800/0/1651421409565?e=1712188800&v=beta&t=MfIVi5LVDdCuzmsVFXW--MOWfBdTS8miv43ZCwTUqPo',
          name: 'Sakina Shaikh',
          skills: [
            { name: 'Cyber and Network Security' },
            { name: 'Data mining' },
            { name: 'Animation and design' },
            { name: 'Programming' },
          ],
          experience: '6',
          description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.'
        },
        {
          image: 'https://media.licdn.com/dms/image/C4D03AQHxnt4tzp5Waw/profile-displayphoto-shrink_800_800/0/1633000968107?e=1712188800&v=beta&t=lhSgImMqgTW0kg5v9irvgu2-ns0f5raGTm0_u968FX0',
          name: 'Nikhita Mangaonkar',
          skills: [
            { name: 'Networking' },
            { name: 'Distributed and Cloud Computing' },
            { name: 'Software Engineering' },
            { name: 'Software Testing' },
            { name: 'Quality Assurance' },
            { name: 'Data Warehousing' },
            { name: 'Data Mining' }
          ],
          experience: '10',
          description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.'
        },
        {
          image: 'https://media.licdn.com/dms/image/C4E03AQGF71FOIUQuHg/profile-displayphoto-shrink_800_800/0/1618855047500?e=2147483647&v=beta&t=RxCegvehpBxIME3vBpwpNcapLOE2NHubwWKvF2H7du8',
          name: 'Suman Majee',
          skills: [
            { name: 'Communication' },
            { name: 'English Speaking' },
            { name: 'Speaker' }
          ],
          experience: '1',
          description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.'
        },
        {
          image: 'https://tse4.mm.bing.net/th?id=OIP.MOHvDr1etqul7J8gKi2AIgHaHa&pid=Api&P=0&h=180',
          name: 'Radha Sonavadekar',
          skills: [
            { name: 'Applied Maths' },
            { name: 'Python' },
          ],
          experience: '1',
          description: 'Qualified GATE 2023 in Mathematics. Qualified MH-SET 2021 Exam. Actively working as Assistant Professor of Mathematics in Mumbai. Pursuing Ph.D. in Mathematics at Institute of Science, Homibhabha State University, Fort, Mumbai. Four years of teaching experience in Mathematics field. I pursued Master\'s degree in Engineering Mathematics at ICT, Mumbai (first class) with good communication skill and time orientation skill.'
        },
      ]
    },
    {
      departmentName: 'Electronics & Telecommunications Engineering',
      faculties: [
        {
          image: 'https://extc.spit.ac.in/files/2011/12/DrYSRao.png',
          name: 'Dr. Y.S. Rao',
          skills: [
            { name: 'Embedded System' },
            { name: 'Digital Power Electronics' },
            { name: 'VLSI Design' },
            { name: 'Wireless Sensor Networks' }
          ],
          experience: '30',
          description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.',
        },
        {
          image: 'https://extc.spit.ac.in/files/2018/10/RRS.png',
          name: 'Dr. Rajendra Sawant',
          skills: [
            { name: 'Algorithms' },
            { name: 'Artificial Intelligence' },
            { name: 'C++' },
            { name: 'Machine Learning' },
            { name: 'Data Science' },
            { name: 'Deep Learning' },
            { name: 'Design Thinking' },
          ],
          experience: '10',
          description: 'Understanding the importance of human-centric design, I embrace Design Thinking methodologies to create solutions that not only meet technical requirements but also resonate with end-users. I believe in marrying functionality with user experience.    In each facet of my skill set, I embody a holistic approach to problem-solving, blending technical prowess with creativity and a user-centric mindset. With a track record of successful projects and a passion for staying at the forefront of technological advancements, I am poised to contribute meaningfully to any innovative venture.   Lets embark on a journey to push the boundaries of whats possible in technology and bring visionary ideas to life! 🌐💡👨‍💻',
        },
        {
          image: 'https://etrx.spit.ac.in/files/2018/09/KTV.png',
          name: 'K.T. Talele',
          skills: [
            { name: 'DevOps' },
            { name: 'C++' },
            { name: 'SQL' },
            { name: 'Java' },
            { name: 'Linux' },
            { name: 'MySQL' },
            { name: 'PHP' },
            { name: 'JSP' },
            { name: 'Oracle' },
            { name: 'Unix' }
          ],
          experience: '11',
          description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.'
        },
        {
          image: 'https://extc.spit.ac.in/files/2020/08/IMG_20200220_065241-150x150.jpg',
          name: 'Reena Sonkusare',
          skills: [
            { name: 'Cyber and Network Security' },
            { name: 'Data mining' },
            { name: 'Animation and design' },
            { name: 'Programming' },
          ],
          experience: '6',
          description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.'
        },
        {
          image: 'https://tse4.mm.bing.net/th?id=OIP.5qs6EfSg5w_ZvrQVwd4d-QHaJ1&pid=Api&P=0&h=180',
          name: 'Sukanya A. Kulkarni',
          skills: [
            { name: 'Machine Learning' },
            { name: 'Data Science' },
            { name: 'Computer Networks' },
            { name: 'Network security' },
            { name: 'Web Technology' }
          ],
          experience: '6',
          description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.'
        },
        {
          image: 'https://media.licdn.com/dms/image/D4D03AQEQCHQfCrmHLg/profile-displayphoto-shrink_100_100/0/1697612698927?e=1714003200&v=beta&t=Fo0pQKYY52SQ31JbKuc1EdUXVELZjcXZ7IBZ3vZS-Pg',
          name: 'Deepak C. Karia',
          skills: [
            { name: 'Networking' },
            { name: 'Distributed and Cloud Computing' },
            { name: 'Software Engineering' },
            { name: 'Software Testing' },
            { name: 'Quality Assurance' },
            { name: 'Data Warehousing' },
            { name: 'Data Mining' }
          ],
          experience: '10',
          description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.'
        },
        {
          image: 'https://etrx.spit.ac.in/files/2011/03/N_Bhagat-150x150.png',
          name: 'N.A. Bhagat',
          skills: [
            { name: 'Communication' },
            { name: 'English Speaking' },
            { name: 'Speaker' }
          ],
          experience: '1',
          description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.'
        },
        {
          image: 'https://extc.spit.ac.in/files/2011/12/MMP.jpg',
          name: 'Manish Parmar',
          skills: [
            { name: 'Applied Maths' },
            { name: 'Python' },
          ],
          experience: '1',
          description: 'Qualified GATE 2023 in Mathematics. Qualified MH-SET 2021 Exam. Actively working as Assistant Professor of Mathematics in Mumbai. Pursuing Ph.D. in Mathematics at Institute of Science, Homibhabha State University, Fort, Mumbai. Four years of teaching experience in Mathematics field. I pursued Master\'s degree in Engineering Mathematics at ICT, Mumbai (first class) with good communication skill and time orientation skill.'
        },
        {
          image: 'https://extc.spit.ac.in/files/2011/12/MMP.jpg',
          name: 'Manish Parmar',
          skills: [
            { name: 'Applied Maths' },
            { name: 'Python' },
          ],
          experience: '1',
          description: 'Qualified GATE 2023 in Mathematics. Qualified MH-SET 2021 Exam. Actively working as Assistant Professor of Mathematics in Mumbai. Pursuing Ph.D. in Mathematics at Institute of Science, Homibhabha State University, Fort, Mumbai. Four years of teaching experience in Mathematics field. I pursued Master\'s degree in Engineering Mathematics at ICT, Mumbai (first class) with good communication skill and time orientation skill.'
        },
        {
          image: 'https://extc.spit.ac.in/files/2020/08/Pallavi_M-230x300.jpg',
          name: 'Pallavi Malame',
          skills: [
            { name: 'Applied Maths' },
            { name: 'Python' },
          ],
          experience: '1',
          description: 'Qualified GATE 2023 in Mathematics. Qualified MH-SET 2021 Exam. Actively working as Assistant Professor of Mathematics in Mumbai. Pursuing Ph.D. in Mathematics at Institute of Science, Homibhabha State University, Fort, Mumbai. Four years of teaching experience in Mathematics field. I pursued Master\'s degree in Engineering Mathematics at ICT, Mumbai (first class) with good communication skill and time orientation skill.'
        },
        {
          image: 'https://extc.spit.ac.in/files/2013/09/milind_paraye.png',
          name: 'Milind Paraye',
          skills: [
            { name: 'Applied Maths' },
            { name: 'Python' },
          ],
          experience: '1',
          description: 'Qualified GATE 2023 in Mathematics. Qualified MH-SET 2021 Exam. Actively working as Assistant Professor of Mathematics in Mumbai. Pursuing Ph.D. in Mathematics at Institute of Science, Homibhabha State University, Fort, Mumbai. Four years of teaching experience in Mathematics field. I pursued Master\'s degree in Engineering Mathematics at ICT, Mumbai (first class) with good communication skill and time orientation skill.'
        },
        {
          image: 'https://etrx.spit.ac.in/files/2011/03/RG_Sutar-150x150.png',
          name: 'Rajendra Sutar',
          skills: [
            { name: 'Applied Maths' },
            { name: 'Python' },
          ],
          experience: '6',
          description: 'Qualified GATE 2023 in Mathematics. Qualified MH-SET 2021 Exam. Actively working as Assistant Professor of Mathematics in Mumbai. Pursuing Ph.D. in Mathematics at Institute of Science, Homibhabha State University, Fort, Mumbai. Four years of teaching experience in Mathematics field. I pursued Master\'s degree in Engineering Mathematics at ICT, Mumbai (first class) with good communication skill and time orientation skill.'
        },
      ]
    },
    {
      departmentName: 'Computer Science & Engineering',
      faculties: [
        {
          image: 'https://www.spit.ac.in/wp-content/uploads/2022/07/Sudhir.jpg',
          name: 'Dr. Sudhir Namdeorao Dhage',
          skills: [
            { name: 'Embedded System' },
            { name: 'Digital Power Electronics' },
            { name: 'VLSI Design' },
            { name: 'Wireless Sensor Networks' }
          ],
          experience: '30',
          description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.',
        },
        {
          image: 'https://comp.spit.ac.in/files/2020/01/anant-new2-233x300.jpg',
          name: 'Anant V. Nimkar',
          skills: [
            { name: 'Algorithms' },
            { name: 'Artificial Intelligence' },
            { name: 'C++' },
            { name: 'Machine Learning' },
            { name: 'Data Science' },
            { name: 'Deep Learning' },
            { name: 'Design Thinking' },
          ],
          experience: '10',
          description: 'Understanding the importance of human-centric design, I embrace Design Thinking methodologies to create solutions that not only meet technical requirements but also resonate with end-users. I believe in marrying functionality with user experience.    In each facet of my skill set, I embody a holistic approach to problem-solving, blending technical prowess with creativity and a user-centric mindset. With a track record of successful projects and a passion for staying at the forefront of technological advancements, I am poised to contribute meaningfully to any innovative venture.   Lets embark on a journey to push the boundaries of whats possible in technology and bring visionary ideas to life! 🌐💡👨‍💻',
        },
        {
          image: 'https://comp.spit.ac.in/files/2011/11/Surekha_Dholay-300x262-1.jpg',
          name: 'Surekha Dholay',
          skills: [
            { name: 'DevOps' },
            { name: 'C++' },
            { name: 'SQL' },
            { name: 'Java' },
            { name: 'Linux' },
            { name: 'MySQL' },
            { name: 'PHP' },
            { name: 'JSP' },
            { name: 'Oracle' },
            { name: 'Unix' }
          ],
          experience: '11',
          description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.'
        },
        {
          image: 'https://comp.spit.ac.in/files/2011/11/Anand_Godbole-345x300.jpg',
          name: 'Anand Godbole',
          skills: [
            { name: 'Cyber and Network Security' },
            { name: 'Data mining' },
            { name: 'Animation and design' },
            { name: 'Programming' },
          ],
          experience: '6',
          description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.'
        },
        {
          image: 'https://it.spit.ac.in/files/2011/11/prof_rupali_s-150x150.png',
          name: 'Rupali Sawant',
          skills: [
            { name: 'Machine Learning' },
            { name: 'Data Science' },
            { name: 'Computer Networks' },
            { name: 'Network security' },
            { name: 'Web Technology' }
          ],
          experience: '6',
          description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.'
        },
        {
          image: 'https://comp.spit.ac.in/files/2011/11/nr.jpg',
          name: 'Nataasha Nitin Raul',
          skills: [
            { name: 'Networking' },
            { name: 'Distributed and Cloud Computing' },
            { name: 'Software Engineering' },
            { name: 'Software Testing' },
            { name: 'Quality Assurance' },
            { name: 'Data Warehousing' },
            { name: 'Data Mining' }
          ],
          experience: '10',
          description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.'
        },
        {
          image: 'https://comp.spit.ac.in/files/2019/11/jyotiramteke.jpg',
          name: 'Jyoti Ramteke',
          skills: [
            { name: 'Communication' },
            { name: 'English Speaking' },
            { name: 'Speaker' }
          ],
          experience: '1',
          description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.'
        },
        {
          image: 'https://comp.spit.ac.in/files/2017/03/sunil_g.jpg',
          name: 'Sunil Ghane',
          skills: [
            { name: 'Applied Maths' },
            { name: 'Python' },
          ],
          experience: '1',
          description: 'Qualified GATE 2023 in Mathematics. Qualified MH-SET 2021 Exam. Actively working as Assistant Professor of Mathematics in Mumbai. Pursuing Ph.D. in Mathematics at Institute of Science, Homibhabha State University, Fort, Mumbai. Four years of teaching experience in Mathematics field. I pursued Master\'s degree in Engineering Mathematics at ICT, Mumbai (first class) with good communication skill and time orientation skill.'
        },
        {
          image: 'https://comp.spit.ac.in/files/2017/03/PB.jpg',
          name: 'Pramod Bide',
          skills: [
            { name: 'Applied Maths' },
            { name: 'Python' },
          ],
          experience: '1',
          description: 'Qualified GATE 2023 in Mathematics. Qualified MH-SET 2021 Exam. Actively working as Assistant Professor of Mathematics in Mumbai. Pursuing Ph.D. in Mathematics at Institute of Science, Homibhabha State University, Fort, Mumbai. Four years of teaching experience in Mathematics field. I pursued Master\'s degree in Engineering Mathematics at ICT, Mumbai (first class) with good communication skill and time orientation skill.'
        },
        {
          image: 'https://it.spit.ac.in/files/2019/05/SK.jpg',
          name: 'Swapnali Kurhade',
          skills: [
            { name: 'Applied Maths' },
            { name: 'Python' },
          ],
          experience: '1',
          description: 'Qualified GATE 2023 in Mathematics. Qualified MH-SET 2021 Exam. Actively working as Assistant Professor of Mathematics in Mumbai. Pursuing Ph.D. in Mathematics at Institute of Science, Homibhabha State University, Fort, Mumbai. Four years of teaching experience in Mathematics field. I pursued Master\'s degree in Engineering Mathematics at ICT, Mumbai (first class) with good communication skill and time orientation skill.'
        },
        {
          image: 'https://extc.spit.ac.in/files/2013/09/milind_paraye.png',
          name: 'Milind Paraye',
          skills: [
            { name: 'Applied Maths' },
            { name: 'Python' },
          ],
          experience: '1',
          description: 'Qualified GATE 2023 in Mathematics. Qualified MH-SET 2021 Exam. Actively working as Assistant Professor of Mathematics in Mumbai. Pursuing Ph.D. in Mathematics at Institute of Science, Homibhabha State University, Fort, Mumbai. Four years of teaching experience in Mathematics field. I pursued Master\'s degree in Engineering Mathematics at ICT, Mumbai (first class) with good communication skill and time orientation skill.'
        },
        {
          image: 'https://comp.spit.ac.in/files/2019/09/20160212_101639-e1568704017855-576x1024.jpg',
          name: 'Reeta Koshy',
          skills: [
            { name: 'Applied Maths' },
            { name: 'Python' },
          ],
          experience: '1',
          description: 'Qualified GATE 2023 in Mathematics. Qualified MH-SET 2021 Exam. Actively working as Assistant Professor of Mathematics in Mumbai. Pursuing Ph.D. in Mathematics at Institute of Science, Homibhabha State University, Fort, Mumbai. Four years of teaching experience in Mathematics field. I pursued Master\'s degree in Engineering Mathematics at ICT, Mumbai (first class) with good communication skill and time orientation skill.'
        },
      ]
    },
    {
      departmentName: 'Information Technology',
      faculties: [
        {
          image: 'https://it.spit.ac.in/files/2017/01/IMG-20161028-WA0023-300x300.jpg',
          name: 'Aparna Halbe',
          skills: [
            { name: 'Embedded System' },
            { name: 'Digital Power Electronics' },
            { name: 'VLSI Design' },
            { name: 'Wireless Sensor Networks' }
          ],
          experience: '30',
          description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.',
        },
        {
          image: 'https://it.spit.ac.in/files/2011/11/Prof_Sheetal_C.png',
          name: 'Sheetal Chaudhary',
          skills: [
            { name: 'Algorithms' },
            { name: 'Artificial Intelligence' },
            { name: 'C++' },
            { name: 'Machine Learning' },
            { name: 'Data Science' },
            { name: 'Deep Learning' },
            { name: 'Design Thinking' },
          ],
          experience: '10',
          description: 'Understanding the importance of human-centric design, I embrace Design Thinking methodologies to create solutions that not only meet technical requirements but also resonate with end-users. I believe in marrying functionality with user experience.    In each facet of my skill set, I embody a holistic approach to problem-solving, blending technical prowess with creativity and a user-centric mindset. With a track record of successful projects and a passion for staying at the forefront of technological advancements, I am poised to contribute meaningfully to any innovative venture.   Lets embark on a journey to push the boundaries of whats possible in technology and bring visionary ideas to life! 🌐💡👨‍💻',
        },
        {
          image: 'https://it.spit.ac.in/files/2011/11/renuka.jpg',
          name: 'Renuka Pawar',
          skills: [
            { name: 'DevOps' },
            { name: 'C++' },
            { name: 'SQL' },
            { name: 'Java' },
            { name: 'Linux' },
            { name: 'MySQL' },
            { name: 'PHP' },
            { name: 'JSP' },
            { name: 'Oracle' },
            { name: 'Unix' }
          ],
          experience: '11',
          description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.'
        },
        {
          image: 'https://it.spit.ac.in/files/2017/01/Untitled-300x169.png',
          name: 'Varsha Hole',
          skills: [
            { name: 'Cyber and Network Security' },
            { name: 'Data mining' },
            { name: 'Animation and design' },
            { name: 'Programming' },
          ],
          experience: '6',
          description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.'
        },
        {
          image: 'https://it.spit.ac.in/files/2017/03/Prof_Nik_K.png',
          name: 'Nikahat Mulla',
          skills: [
            { name: 'Machine Learning' },
            { name: 'Data Science' },
            { name: 'Computer Networks' },
            { name: 'Network security' },
            { name: 'Web Technology' }
          ],
          experience: '6',
          description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.'
        }
      ]
    },
    {
      departmentName: 'Applied Science and Humanities',
      faculties: [
        {
          image: 'https://media.licdn.com/dms/image/D4D03AQEykU38uOi5LQ/profile-displayphoto-shrink_400_400/0/1696345755702?e=1714003200&v=beta&t=-jwYHrxeSZuJ64Z-eTuxoQ76cOb6DnnnkkiXjNVeMSg',
          name: 'Rita Das',
          skills: [
            { name: 'Embedded System' },
            { name: 'Digital Power Electronics' },
            { name: 'VLSI Design' },
            { name: 'Wireless Sensor Networks' }
          ],
          experience: '30',
          description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.',
        },
        {
          image: 'https://media.licdn.com/dms/image/C5103AQFS19pSPS2D2A/profile-displayphoto-shrink_800_800/0/1543570137218?e=1714003200&v=beta&t=fR32ckuiKIkgATqwz8h0RQgl7372sMIxLe28gpUb75k',
          name: 'Vaishali Patil',
          skills: [
            { name: 'Algorithms' },
            { name: 'Artificial Intelligence' },
            { name: 'C++' },
            { name: 'Machine Learning' },
            { name: 'Data Science' },
            { name: 'Deep Learning' },
            { name: 'Design Thinking' },
          ],
          experience: '10',
          description: 'Understanding the importance of human-centric design, I embrace Design Thinking methodologies to create solutions that not only meet technical requirements but also resonate with end-users. I believe in marrying functionality with user experience.    In each facet of my skill set, I embody a holistic approach to problem-solving, blending technical prowess with creativity and a user-centric mindset. With a track record of successful projects and a passion for staying at the forefront of technological advancements, I am poised to contribute meaningfully to any innovative venture.   Lets embark on a journey to push the boundaries of whats possible in technology and bring visionary ideas to life! 🌐💡👨‍💻',
        },
        {
          image: 'https://media.licdn.com/dms/image/C4E03AQHuViHQNEyzVQ/profile-displayphoto-shrink_100_100/0/1517707132879?e=1714003200&v=beta&t=PCElTxWiwJAIecGamFP5ESYhgkkFFizDo1_bhes3ZKM',
          name: 'C.R. Gagbhiye',
          skills: [
            { name: 'DevOps' },
            { name: 'C++' },
            { name: 'SQL' },
            { name: 'Java' },
            { name: 'Linux' },
            { name: 'MySQL' },
            { name: 'PHP' },
            { name: 'JSP' },
            { name: 'Oracle' },
            { name: 'Unix' }
          ],
          experience: '11',
          description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.'
        },
        {
          image: 'https://media.licdn.com/dms/image/C5603AQGKkCQHOkmzSQ/profile-displayphoto-shrink_400_400/0/1658217091668?e=1714003200&v=beta&t=_nBqBj0dsWw5gBqDx1pcmI601hTQbseTjkmlN7f6t_E',
          name: 'Hemant Vasaikar',
          skills: [
            { name: 'Cyber and Network Security' },
            { name: 'Data mining' },
            { name: 'Animation and design' },
            { name: 'Programming' },
          ],
          experience: '6',
          description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.'
        },
        {
          image: 'https://media.licdn.com/dms/image/C5603AQGq2lj6xbA25w/profile-displayphoto-shrink_800_800/0/1517445386463?e=1714003200&v=beta&t=7fBJKRL8IkYo6PY3iwyHHjDADltAk9XujP8XEIMfBuU',
          name: 'Meghna Naik',
          skills: [
            { name: 'Machine Learning' },
            { name: 'Data Science' },
            { name: 'Computer Networks' },
            { name: 'Network security' },
            { name: 'Web Technology' }
          ],
          experience: '6',
          description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.'
        }
      ]
    },
  ];

  constructor() { }
}

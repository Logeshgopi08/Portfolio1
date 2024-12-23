export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Google-Docs Clone',
      desc: 'Users can start new documents, make changes, and delete unwanted documents. Include folders or tags to categorize and locate documents easily.Multiple users can edit the same document at the same time.',
      subdesc:
        'Built as a unique Software-as-a-Service app with React Js, Tailwind CSS, NodeJs, MongoDB and Socket IO. Qrill is designed for optimal performance and scalability.',
      href: 'https://github.com/Logeshgopi08/Google-docs-Clone',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        
      ],
    },
    {
      title: '  Real-Time Chat-APP',
      desc: 'Building a real-time chat app using React, Socket.io, Node.js, and MongoDB involves creating a scalable and responsive system where users can exchange messages instantly.',
      subdesc:
        'Persist messages in MongoDB for retrieval after a user logs out.Load previous conversations on login.Display when messages are delivered and read.',
      href: 'https://github.com/Logeshgopi08/ChatApplication',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
       
      ],
    },
    {
      title: 'Food Delivery App',
      desc: 'A food delivery app is a platform that connects users with restaurants or food providers, enabling them to browse menus, place orders, and have food delivered to their doorstep.',
      subdesc:
        'Search and filter restaurants by cuisine, rating, price, or delivery time.use Tailwind css for styling and design consistency.',
      href: 'https://github.com/Logeshgopi08/swiggyclone',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
       
      ],
    },
    {
      title: 'Youtube-Clone',
      desc: 'A YouTube clone is a video-sharing platform that allows users to upload, view, share, and interact with video content. It emulates the core features of YouTube, such as video streaming, user accounts, subscriptions, likes, comments, and recommendations, while offering scalability and a modern user interface.',
      subdesc:
        'Search by keywords, tags, or categories.Built using React js and Tailwind css and Redux for local Storage',
      href: 'https://github.com/Logeshgopi08/youtube',
      texture: '/textures/project/project4.mp4',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        
       
      ],
    },
    
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.5, -7.5, 2],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'BlueEyes Solution',
      pos: 'junior Flutter and React Developer',
      duration: '2023 - Present',
      title: "Work closely with designers to translate wireframes into visually appealing, functional Application interfaces",
      icon: 'https://media.licdn.com/dms/image/v2/C560BAQFiZVI5mcLsdg/company-logo_200_200/company-logo_200_200/0/1677673918367?e=1741824000&v=beta&t=NV6zpeIvKYft8fxOwEktJ_zP0t8tllvTLtX7bjbeyWA',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'UltraTech Baver',
      pos: 'Plant Supervisor',
      duration: '2021 - 2023',
      title: "Oversee the daily operations of the chemical plant, ensuring that 100% production targets are met and all processes run smoothly.",
      icon: 'https://5.imimg.com/data5/KT/TU/GLADMIN-11428788/ultratech-cement-500x500.gif',
      animation: 'clapping',
    },
    
  ];
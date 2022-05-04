module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Youngjin Kwon',
    // Main Site Title
    title: `Youngjin Kwon | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit, ipsum.`,
    // Optional: Twitter account handle
    author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/zerojin0603`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/ryanafitzgerald/`,
    // Content of the About Me section
    about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perferendis porro cumque ea error ab voluptatem. Temporibus adipisci exercitationem similique itaque quibusdam laudantium, qui molestiae quas, aut amet animi id.`,
     education: [
      {
        name: '고려대학교',
        description: ' 컴퓨터학과 정보보호융합전공, March 2018 ~ February 2022',
      },       
      {
        name: '목동고등학교',
        description:
          'March 2015 ~ February 2018',
      }
    ],
    awards: [
      {
        name: '고려대학교 캡스톤 디자인 우수상',
        description:
          '2022.03 ',
      },
      {
        name: '한국정보처리학회 동계학술대회 장려상',
        description: '2021.01',
      }
    ],
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: '딥러닝 기반 히든채널 사이버 범죄 모니터링(DEEPOLICE)',
        description:
          '디스코드, 텔레그램, 트위터(이하 히든채널)에서 발생하는 다양한 유형의 사이버 범죄를 모니터링하여 최종적으로 사이버 범죄 예방에 기여하는 것을 목표로 하는 프로젝트. \n 히든채널의 대화들을 크롤링하여 전처리 작업을 거친 텍스트 데이터를 기반으로 자연어처리 모델을 학습시켜 범죄와의 연관도를 계산한다. \n 전처리 작업과 모델의 fine-tuning을 담당하였다. ',
      },
      {
        name: 'CodeQL을 이용한 소스코드 취약점 분석',
        description:
          '오픈소스 소프트웨어들은 크기가 크고 복잡하며 다양한 언어로 이루어져 있어 직접 버그를 찾기에 어려움이 있습니다. \n이에 CodeQL을 사용하여 오픈소스 sw 소스코드의 취약점을 분석하는 연구를 진행하였습니다. \nCodeQL을 이용해 소스코드를 분석하는 쿼리를 작성하는 과정에서 기존에 알려진 취약한 코드들을 리뷰하며 다양한 취약점의 기본원리에 대한 개념을 쌓을 수 있었습니다',
      },
      {
        name: '공유 모빌리티 서비스 앱 포렌식',
        description:
          'Android 시스템에서 장치가 없는 상황에서 사용할 수 있는 실용적인 공유 모빌리티 서비스 앱 포렌식 방법에 대한 연구에 참여하였습니다.\n 처음 보는 앱에 대한 코드레벨 분석을 통해 어떤 아티팩트가 생성되는지 사전에 조사하는 연구를 진행하였습니다. \nTaint analysis 개념을 익히고 Flowdroid를 직접 이용하여 공유 모빌리티 어플리케이션인 Lime을 분석해 위치 정보가 남는 곳을 탐색하였습니다.nox 에뮬레이터를 사용 해 apk파일을 얻고 nox_adb를 이용해 tar.gz 파일을 얻어낸 후 사용 자 관련 정보, 결제 정보, 위치 정보, 토큰 정보 등 의미있는 아티팩트들이 남는 위치를 탐색 및 기록하였습니다.',
     //   link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: '개방향 OS 보안성 강화를 위한 오픈소스 SW 신뢰성 검증방법 연구',
        description:
          '개방형 os에 탑재된 오픈소스 sw의 취약점을 진단 및 분석 후 신뢰성 검증 기준을 개발하여 공급망 공격 위험성을 검토하는 연구에 참여하였습니다.\n개방형 os에 탑재된 오픈소스 sw의 취약점 진단 및 분석 과정에서 구름 OS 구성 패키지의 취약점을 진단하고 발견된 취약점을 분석하였습니다. \n신뢰성 검증 기준 개발단계에서 일반 소프트웨어 품질 검증 지표를 조사하고 오픈소스 소프트웨어 취약점 관리체계를 구축하였습니다. \n개방형 OS를 위한 오픈소스 sw 공급망 위험성을 검토하는 단계에서 오픈소스 sw의 공급망 공격 사례를 조사하고 분석하였습니다.',
     //   link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: '크립토재킹 탐지 및 분석',
        description:
          '크립토재킹 코드가 포함되어 있는 웹 사이트에서 메모리 힙 스냅샷 파일을 분석하여 크립토재킹 구조를 파악해 웹 페이지 스크립트 기능을 사용하는 크립토재킹을 탐지하는 방법 구현하는 연구에 참여하였습니다. \n CPU와 memory 사용량을 통해 크립토재킹을 탐지하는 기존의 방법을 테스트 하기 위해 flask와 node.js를 이용해 서버를 구축하고 puppeteer을 이용해 웹사이트에 접속한 다음 CPU와 memory 사용량을 자동으로 수집하는 코드를 구현하였습니다.',
     //   link: 'https://github.com/RyanFitzgerald/devfolio',
      },  
      {
        name: 'IoT 디바이스간 암호화 통신 구현',
        description:
          '고려대학교 개인정보보호연구실에서 학부연구생으로 수학하며 ‘센서간 소켓 통신 구현 및 블록체인 개념 연구 세미나’ 에 참여하였습니다.\n 라즈베리 파이를 이용해 비밀번호를 저장하고 저장된 비밀번호를 출력하는 IoT 디바이스 간 암호화 통신 프로그램 \'PassKeeper\'을 구현하였습니다.',
     //   link: 'https://github.com/RyanFitzgerald/devfolio',
      },        
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Nexon Korea',
        description: 'Security Engineer Internship, October 2021 - April 2022',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Best of the Best 10th top 30',
        description: 'Digital Forensics Track, July 2021 - March 2022',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'DFRC',
        description: 'Lab Intern, May 2015 - December 2017',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'CSS Lab',
        description: 'Lab Intern, May 2015 - December 2017',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Stealian Security Leader 1st',
        description: 'Full-Stack Developer, May 2015 - December 2017',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
  ],
};

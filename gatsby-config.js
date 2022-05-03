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
    ],
    awards: [
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
        name: 'Another Cool Project',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Acme Corp',
        description: 'Full-Stack Developer, February 2020 - Present',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Globex Corp',
        description: 'Full-Stack Developer, December 2017 - February 2020',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Hooli',
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

import i18n from '@/i18n'

const skillList = [
  {
    name: i18n.global.t('skills.programming_languages'),
    skills: [
      { label: 'Java', icon: 'devicon-java-plain colored', color: 'var(--color-java)' },
      {
        label: 'Elixir',
        icon: 'devicon-elixir-plain',
        color: 'var(--color-elixir)',
      },
      { label: 'Python', icon: 'devicon-python-plain colored', color: 'var(--color-python)' },
      { label: 'C++', icon: 'devicon-cplusplus-plain colored', color: 'var(--color-cpp)' },
      {
        label: 'JavaScript',
        icon: 'devicon-javascript-plain colored',
        color: 'var(--color-javascript)',
      },
      {
        label: 'TypeScript',
        icon: 'devicon-typescript-plain colored',
        color: 'var(--color-typescript)',
      },
    ],
  },
  {
    name: i18n.global.t('skills.frontend'),
    skills: [
      { label: 'React', icon: 'devicon-react-original colored', color: 'var(--color-react)' },
      { label: 'Angular', icon: 'devicon-angularjs-plain colored', color: 'var(--color-angular)' },
      { label: 'Vue', icon: 'devicon-vuejs-plain colored', color: 'var(--color-vue)' },
      { label: 'HTML', icon: 'devicon-html5-plain colored', color: 'var(--color-html)' },
      { label: 'CSS', icon: 'devicon-css3-plain colored', color: 'var(--color-css)' },
      { label: 'Sass', icon: 'devicon-sass-original colored', color: 'var(--color-sass)' },
      {
        label: 'Tailwind',
        icon: 'devicon-tailwindcss-plain colored',
        color: 'var(--color-tailwind)',
      },
    ],
  },
  {
    name: i18n.global.t('skills.backend'),
    skills: [
      { label: 'Spring', icon: 'devicon-spring-plain colored', color: 'var(--color-spring)' },
      { label: '.NET', icon: 'devicon-dot-net-plain colored', color: 'var(--color-dotnet)' },
      {
        label: 'Node.js',
        icon: 'devicon-nodejs-plain colored',
        color: 'var(--color-nodejs)',
      },
      {
        label: 'Kafka',
        icon: 'devicon-apachekafka-original',
        color: 'var(--color-kafka)',
      },
      {
        label: 'Flask',
        icon: 'devicon-flask-original',
        color: 'var(--color-flask)',
      },
      { label: 'FastAPI', icon: 'devicon-fastapi-plain colored', color: 'var(--color-fastapi)' },
    ],
  },
  {
    name: i18n.global.t('skills.devops'),
    skills: [
      { label: 'Azure', icon: 'devicon-azure-plain colored', color: 'var(--color-azure)' },
      {
        label: 'Kubernetes',
        icon: 'devicon-kubernetes-plain colored',
        color: 'var(--color-kubernetes)',
      },
      { label: 'Docker', icon: 'devicon-docker-plain colored', color: 'var(--color-docker)' },
      {
        label: 'Terraform',
        icon: 'devicon-terraform-plain colored',
        color: 'var(--color-terraform)',
      },
      {
        label: 'GitHub Actions',
        icon: 'devicon-github-original',
        color: 'var(--color-github-actions)',
      },
      { label: 'Jenkins', icon: 'devicon-jenkins-line colored', color: 'var(--color-jenkins)' },
      {
        label: 'IBM Cloud',
        icon: 'devicon-googlecloud-plain colored',
        color: 'var(--color-ibm-cloud)',
      },
    ],
  },
  {
    name: i18n.global.t('skills.databases'),
    skills: [
      {
        label: 'PostgreSQL',
        icon: 'devicon-postgresql-plain colored',
        color: 'var(--color-postgresql)',
      },
      { label: 'MongoDB', icon: 'devicon-mongodb-plain colored', color: 'var(--color-mongodb)' },
      { label: 'Postman', icon: 'devicon-postman-plain colored', color: 'var(--color-postman)' },
    ],
  },
]

export default skillList

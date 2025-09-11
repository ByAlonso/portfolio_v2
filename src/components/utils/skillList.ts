// Map of skill labels to their devicon classes
const skillIcons = {
  Java: 'devicon-java-plain colored',
  Elixir: 'devicon-elixir-plain',
  Python: 'devicon-python-plain colored',
  'C++': 'devicon-cplusplus-plain colored',
  JavaScript: 'devicon-javascript-plain colored',
  TypeScript: 'devicon-typescript-plain colored',
  React: 'devicon-react-original colored',
  Angular: 'devicon-angularjs-plain colored',
  Vue: 'devicon-vuejs-plain colored',
  HTML: 'devicon-html5-plain colored',
  CSS: 'devicon-css3-plain colored',
  Sass: 'devicon-sass-original colored',
  Tailwind: 'devicon-tailwindcss-plain colored',
  Spring: 'devicon-spring-plain colored',
  '.NET': 'devicon-dot-net-plain colored',
  Node: 'devicon-nodejs-plain colored',
  Kafka: 'devicon-apachekafka-original',
  Flask: 'devicon-flask-original',
  FastAPI: 'devicon-fastapi-plain colored',
  Azure: 'devicon-azure-plain colored',
  Kubernetes: 'devicon-kubernetes-plain colored',
  Docker: 'devicon-docker-plain colored',
  Terraform: 'devicon-terraform-plain colored',
  GitHub: 'devicon-github-original',
  Jenkins: 'devicon-jenkins-line colored',
  IBM: 'devicon-googlecloud-plain colored',
  PostgreSQL: 'devicon-postgresql-plain colored',
  MongoDB: 'devicon-mongodb-plain colored',
  Postman: 'devicon-postman-plain colored',
  Linux: 'devicon-linux-plain',
}

const skillList = [
  {
    name: 'programming_languages',
    skills: [
      { label: 'Java', icon: skillIcons['Java'], color: 'var(--color-java)' },
      { label: 'Elixir', icon: skillIcons['Elixir'], color: 'var(--color-elixir)' },
      { label: 'Python', icon: skillIcons['Python'], color: 'var(--color-python)' },
      { label: 'C++', icon: skillIcons['C++'], color: 'var(--color-cpp)' },
      { label: 'JavaScript', icon: skillIcons['JavaScript'], color: 'var(--color-javascript)' },
      { label: 'TypeScript', icon: skillIcons['TypeScript'], color: 'var(--color-typescript)' },
    ],
  },
  {
    name: 'frontend',
    skills: [
      { label: 'React', icon: skillIcons['React'], color: 'var(--color-react)' },
      { label: 'Angular', icon: skillIcons['Angular'], color: 'var(--color-angular)' },
      { label: 'Vue', icon: skillIcons['Vue'], color: 'var(--color-vue)' },
      { label: 'HTML', icon: skillIcons['HTML'], color: 'var(--color-html)' },
      { label: 'CSS', icon: skillIcons['CSS'], color: 'var(--color-css)' },
      { label: 'Sass', icon: skillIcons['Sass'], color: 'var(--color-sass)' },
      { label: 'Tailwind', icon: skillIcons['Tailwind'], color: 'var(--color-tailwind)' },
    ],
  },
  {
    name: 'backend',
    skills: [
      { label: 'Spring', icon: skillIcons['Spring'], color: 'var(--color-spring)' },
      { label: '.NET', icon: skillIcons['.NET'], color: 'var(--color-dotnet)' },
      { label: 'Node.js', icon: skillIcons['Node'], color: 'var(--color-nodejs)' },
      { label: 'Kafka', icon: skillIcons['Kafka'], color: 'var(--color-kafka)' },
      { label: 'Flask', icon: skillIcons['Flask'], color: 'var(--color-flask)' },
      { label: 'FastAPI', icon: skillIcons['FastAPI'], color: 'var(--color-fastapi)' },
    ],
  },
  {
    name: 'devops',
    skills: [
      { label: 'Azure', icon: skillIcons['Azure'], color: 'var(--color-azure)' },
      { label: 'Kubernetes', icon: skillIcons['Kubernetes'], color: 'var(--color-kubernetes)' },
      { label: 'Docker', icon: skillIcons['Docker'], color: 'var(--color-docker)' },
      { label: 'Terraform', icon: skillIcons['Terraform'], color: 'var(--color-terraform)' },
      {
        label: 'GitHub Actions',
        icon: skillIcons['GitHub'],
        color: 'var(--color-github-actions)',
      },
      { label: 'Jenkins', icon: skillIcons['Jenkins'], color: 'var(--color-jenkins)' },
      { label: 'IBM Cloud', icon: skillIcons['IBM'], color: 'var(--color-ibm-cloud)' },
      { label: 'Linux', icon: skillIcons['Linux'], color: 'var(--color-linux)' },
    ],
  },
  {
    name: 'databases',
    skills: [
      { label: 'PostgreSQL', icon: skillIcons['PostgreSQL'], color: 'var(--color-postgresql)' },
      { label: 'MongoDB', icon: skillIcons['MongoDB'], color: 'var(--color-mongodb)' },
      { label: 'Postman', icon: skillIcons['Postman'], color: 'var(--color-postman)' },
    ],
  },
]

export default { skillIcons, skillList }

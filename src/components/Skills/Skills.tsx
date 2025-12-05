'use client'

import dynamic from 'next/dynamic'
import JavaIcon from '@/assets/icons/java-original-wordmark.svg'
import SpringIcon from '@/assets/icons/spring-original-wordmark.svg'
import KafkaIcon from '@/assets/icons/apachekafka-original-wordmark.svg'
import RedisIcon from '@/assets/icons/redis-plain-wordmark.svg'
import DockerIcon from '@/assets/icons/docker-original-wordmark.svg'
import KubernetesIcon from '@/assets/icons/kubernetes-original-wordmark.svg'
import OpenAPIIcon from '@/assets/icons/openapi-original-wordmark.svg'
import JenkinsIcon from '@/assets/icons/jenkins-original.svg'
import JiraIcon from '@/assets/icons/jira-original-wordmark.svg'
import GithubIcon from '@/assets/icons/github-original-wordmark.svg'
// Si tienes ícono de PostgreSQL, descomenta la siguiente línea y agrégalo en /assets/icons
// import PostgresIcon from '@/assets/icons/postgresql-original-wordmark.svg'

const TechMarquee = dynamic(() => import('../Marquee/TechMarquee'), { ssr: false })

const backendStack = [
  { name: 'Java', icon: JavaIcon },
  { name: 'Spring Boot', icon: SpringIcon },
  { name: 'Kafka / Service Bus', icon: KafkaIcon, className: 'icon-invert' },
  { name: 'Redis', icon: RedisIcon },
  { name: 'Docker', icon: DockerIcon },
  { name: 'Kubernetes', icon: KubernetesIcon },
  { name: 'OpenAPI / Swagger', icon: OpenAPIIcon },
  { name: 'Jenkins', icon: JenkinsIcon },
  { name: 'Jira', icon: JiraIcon },
  { name: 'GitHub', icon: GithubIcon, className: 'icon-invert' },
]


const Skills = () => {
  return (
    <section className="pt-2 pb-0">
     <TechMarquee items={backendStack} />
    </section>
  )
}

export default Skills

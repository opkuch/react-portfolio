import { InnerContent } from '../../components/InnerContent/InnerContent'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import InfoItem from './parts/InfoItem/InfoItem'

function Info() {
  return (
    <section className="info-page">
      <PageHeader title="Information" />
      <InnerContent>
        <div className='text-container'>
          <InfoItem
            title="About Me"
            content="With a keen eye for details, a passion for problem solving, and a deep understanding of good UX/UI, I bring a unique combination of skills to my role as a full-stack developer."
          />
          <InfoItem
            title="Tech Skills"
            content="HTML, SCSS, JS , TS, React, Next, Vue, Angular, RESTful API’s, Socket.io, Docker, Nginx, Node.js, Express, MongoDB, mySQL, GraphQL,"
          />
          <InfoItem
            title="Mail me"
            content="
          nadavbenhur@gmail.com"
          />
          <InfoItem
            title="Let's talk"
            content="
          +972526022141"
          />
        </div>
      </InnerContent>
    </section>
  )
}

export default Info

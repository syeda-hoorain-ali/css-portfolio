import styles from '@/styles/card.module.css'

type Props = {
  title: string;
  github: string;
  live: string;
  image?: string;
}

const Card = ({ title, github, live, image }: Props) => {
  return (<>
    <div title={title} className={styles.card}>
      <div className={styles.overlay}>

        <div>
          <span>{title}</span>
          <div className={styles.links}>
            <a href={live}>Live</a>
            <a href={github}>Code</a>
          </div>
        </div>
      </div>

      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
    </div>
  </>)
}

export default Card;

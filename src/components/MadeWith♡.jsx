import styles from "./MadeWith♡.module.css"
const repoToUrl = repo => `https://github.com/${repo}`

const MadeWithLove = ({ repo }) => {
  return (
    <a href={repoToUrl(repo)} className={styles.MadeWithLove}>
      Made with ♡ by me
    </a>
  )
}

export default MadeWithLove

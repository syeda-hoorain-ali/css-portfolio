import { CgNpm } from "react-icons/cg";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa6";
import styles from "@/styles/footer.module.css"

const Footer = () => {
  return (<>
    <footer className={styles.footer}>
      <p>&copy; Syeda Hoorain Ali, Inc. All rights reserved.</p>

      <div className={styles.icons}>
        <a href="https://github.com/syeda-hoorain-ali">
          <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/syedahoorainali">
          <FaLinkedin size={20} />
        </a>
        <a href="https://www.npmjs.com/~syedahoorainali">
          <CgNpm size={24} />
        </a>
        <a href="/">
          <FaGlobe size={20} />
        </a>

      </div>
    </footer>
  </>)
}

export default Footer;
import Animate from "@/components/animate";
import styles from "@/styles/page.module.css"
import Image from "next/image";

const About = () => {
  return (<>
    <Animate>
      <section className={styles.about}>
        <h2>About Me</h2>
        <Image src="./logo.jpg" alt="Syeda Hoorain ali" height={208} width={208} />

        <p>
          Hi! I&apos;m Hoorain, a 13-year-old tech enthusiast and a senior student at the Governor Sindh IT Initiative (GIAIC). I have a deep passion for web development and a keen interest in emerging technologies. My journey in the tech world has been both exciting and challenging, and I&apos;ve enjoyed every step of it.
          <br /> <br />
          I&apos;ve acquired skills in various programming languages and frameworks, including HTML, CSS, JavaScript, TypeScript, Node.js, Express, MongoDB, React, and Next.js. Currently, I am diving into Python to expand my programming repertoire. My goal is to become a Cloud Applied Gen-AI Engineer, and I am committed to continuously learning and evolving in the field of technology.
          <br /> <br />
          Beyond my technical skills, I am a creative problem solver and a team player who enjoys collaborating on projects. I believe in the power of innovation to transform the digital landscape and am excited to be a part of this dynamic industry. Explore my portfolio to see how I am applying my skills and passion to create impactful solutions.
        </p>
      </section>
    </Animate>
  </>)
}

export default About;

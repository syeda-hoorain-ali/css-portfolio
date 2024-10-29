"use client";

import Animate from "@/components/animate";
import Card from "@/components/card";
import { ChangeEvent, FormEvent, useState } from "react";
import { CgNpm } from "react-icons/cg";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { toast } from "react-toastify";
import { TypeAnimation } from "react-type-animation";
import styles from "@/styles/page.module.css";
import axios, { type AxiosError } from "axios";
import { type ApiResponse } from "@/types";
import { BiLoaderCircle } from "react-icons/bi";

const Home = () => {

  const [isSubmittingForm, setIsSubmittingForm] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmittingForm(true)

    try {
      const response = await axios.post<ApiResponse>('/api/resend', form)
      console.log(response.data);

      if (response.data.success) {
        toast.success('Message send successfully!');

        setForm({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        })
      }
    } catch (error) {

      const axiosError = error as AxiosError<ApiResponse>;
      const message = axiosError.response?.data.message || axiosError.message;
      toast.error(message)

    } finally {
      setIsSubmittingForm(false);
    }
  }

  return (<>

    <Animate>
      <header className={styles.header}>
        <div>
          <div className={styles.headerImage}>
            <img src="/logo.jpg" alt="Syeda Hoorain Ali" />
          </div>

          <div className={styles.headerContent}>
            <span>Hi,</span>
            <h1>I am {' '}<span>Hoorain</span></h1>

            <h2>I&apos;m a {' '}
              <TypeAnimation
                sequence={[
                  'Web Developer', 1000,
                  'Web Designer', 1000,
                  'Front-end Developer', 1000,
                  'Back-end Developer', 1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block', color: '#d946ef' }}
                repeat={Infinity}
                preRenderFirstString={true}
              />
            </h2>
            <h3>Future Cloud Applied Gen-AI Engineer...</h3>

            <ul className={styles.icons}>
              <li className={styles.icon}>
                <a href="https://github.com/syeda-hoorain-ali"><FaGithub size={20} /></a>
              </li>
              <li className={styles.icon}>
                <a href="https://www.linkedin.com/in/syedahoorainali"><FaLinkedin size={20} /></a>
              </li>
              <li className={styles.icon}>
                <a href="https://www.npmjs.com/~syedahoorainali"><CgNpm size={20} /></a>
              </li>
            </ul>
          </div>

        </div>
      </header>
    </Animate>

    {/* About */}
    <Animate>
      <section className={styles.about}>
        <h2>About Me</h2>
        <img src="./logo.jpg" alt="Syeda Hoorain ali" />
        <p>
          Hi! I&apos;m Hoorain, a 13-year-old tech enthusiast and a senior student at the Governor Sindh IT Initiative (GIAIC). I have a deep passion for web development and a keen interest in emerging technologies. My journey in the tech world has been both exciting and challenging, and I&apos;ve enjoyed every step of it.
          <br /> <br />
          I&apos;ve acquired skills in various programming languages and frameworks, including HTML, CSS, JavaScript, TypeScript, Node.js, Express, MongoDB, React, and Next.js. Currently, I am diving into Python to expand my programming repertoire. My goal is to become a Cloud Applied Gen-AI Engineer, and I am committed to continuously learning and evolving in the field of technology.
          <br /> <br />
          Beyond my technical skills, I am a creative problem solver and a team player who enjoys collaborating on projects. I believe in the power of innovation to transform the digital landscape and am excited to be a part of this dynamic industry. Explore my portfolio to see how I am applying my skills and passion to create impactful solutions.
        </p>
      </section>
    </Animate>

    {/* Projects */}
    <Animate>
      <section className={styles.projects}>
        <h2>My Projects</h2>

        <div className={styles.cardContainer}>
          <Card github="https://github.com/syeda-hoorain-ali/text-editor" live="https://text-editor-hoorain.vercel.app/" title="Text Editor" image="./projects/text-editor.png" />
          <Card github="https://github.com/syeda-hoorain-ali/pass-guard" live="https://pass-guard-eight.vercel.app/" title="Password Manager" image="./projects/password-manager.png" />
          <Card github="https://github.com/syeda-hoorain-ali/twitter" live="https://syeda-hoorain-ali.github.io/twitter/" title="Twitter" image="./projects/twitter.png" />
          <Card github="https://github.com/syeda-hoorain-ali/clock-craft" live="https://syeda-hoorain-ali.github.io/clock-craft/" title="Clock" image="./projects/clock.png" />

          <Card github="https://github.com/syeda-hoorain-ali/netflix" live="https://syeda-hoorain-ali.github.io/netflix/" title="Netflix" image="./projects/netflix.png" />
          <Card github="https://github.com/syeda-hoorain-ali/starbucks" live="https://syeda-hoorain-ali.github.io/starbucks" title="Starbucks" image="./projects/starbucks.png" />
          <Card github="https://github.com/syeda-hoorain-ali/foodpanda" live="https://syeda-hoorain-ali.github.io/foodpanda" title="Foodpanda" image="./projects/foodpanda.png" />
          <Card github="https://github.com/syeda-hoorain-ali/amazon" live="https://syeda-hoorain-ali.github.io/amazon" title="Amazon" image="./projects/amazon.png" />
        </div>

        <button>
          <a href="https://github.com/syeda-hoorain-ali/">Show more</a>
        </button>
      </section>
    </Animate>

    {/* contact */}
    <Animate>
      <section className={styles.contact}>
        <h2>Contact Me</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label htmlFor="first-name">First name</label>
              <input id="first-name" name="firstName" type="text" value={form.firstName} onChange={handleChange} />
            </div>

            <div>
              <label htmlFor="last-name">Last name</label>
              <input id="last-name" name="lastName" type="text" value={form.lastName} onChange={handleChange} />
            </div>

            <div className={styles.colSpan}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} />
            </div>

            <div className={styles.colSpan}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} />
            </div>
          </div>

          <button type="submit" className={styles.formButton} disabled={isSubmittingForm}>
            {isSubmittingForm ?
              <BiLoaderCircle className={styles.spin} /> :
              "Send Message"}
          </button>

        </form>
      </section>
    </Animate>

  </>)
}

export default Home;

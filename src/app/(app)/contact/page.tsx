"use client";

import Animate from '@/components/animate';
import { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import axios, { type AxiosError } from "axios";
import styles from '@/styles/page.module.css'
import { type ApiResponse } from '@/types';
import { BiLoaderCircle } from 'react-icons/bi';

const Contact = () => {

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
      const message = axiosError.response?.data.message || axiosError.message
      toast.error(message)

    } finally {
      setIsSubmittingForm(false);
    }
  }

  return (
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
  )
}

export default Contact

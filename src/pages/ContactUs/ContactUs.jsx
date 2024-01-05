import React from "react";
import { useForm } from "react-hook-form";

// Css
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("Data submitted: " + JSON.stringify(data));
  };

  return (
    <>
      <h1 className={styles.header}>Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputContainer}>
          <label htmlFor="name" className={styles.label}>
            Name :
          </label>
          <input
            placeholder="Enter Name"
            id="name"
            {...register("name", {
              required: "Name is required",
              maxLength: {
                value: 20,
                message: "Name should not exceed 20 characters",
              },
            })}
            className={`${styles.input} ${
              errors.name ? styles.inputError : ""
            }`}
          />
        </div>
        {errors.name && (
          <span className={styles.errorMessage}>{errors.name.message}</span>
        )}
        <div className={styles.inputContainer}>
          <label htmlFor="email" className={styles.label}>
            Email :
          </label>
          <input
            placeholder="Enter Email"
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
            className={`${styles.input} ${
              errors.name ? styles.inputError : ""
            }`}
          />
        </div>
        {errors.email && (
          <span className={styles.errorMessage}>{errors.email.message}</span>
        )}

        <div className={styles.inputContainer}>
          <label htmlFor="message" className={styles.messageLabel}>
            Message :
          </label>
          <textarea
            cols={30}
            rows={30}
            placeholder="Enter Message"
            id="message"
            {...register("message", {
              required: "Message is required",
              maxLength: {
                value: 20,
                message: "message should not exceed 200 characters",
              },
            })}
            className={`${styles.input} ${styles.textArea} ${
              errors.message ? styles.inputError : ""
            }`}
          />
        </div>
        {errors.message && (
          <span className={styles.errorMessage}>{errors.message.message}</span>
        )}
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactUs;

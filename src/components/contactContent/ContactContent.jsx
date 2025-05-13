import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import styles from "./ContactContent.module.css";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

// Yup schema for validation
const schema = yup.object().shape({
  name: yup.string().required("Navn er påkrævet"),
  email: yup.string().email("Ugyldig email").required("Email er påkrævet"),
  subject: yup.string().required("Emne er påkrævet"),
  message: yup.string().required("Besked er påkrævet"),
});

const ContactContent = () => {
  const [submittedName, setSubmittedName] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Indsendt:", data);

      setSubmittedName(data.name);
      reset();
      toast.success("Beskeden blev sendt!");
    } catch (error) {
      toast.error("Noget gik galt. Prøv igen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.contact}>
      <div className={styles.textContainer}>
        <h2>Vil du booke et ophold? Eller har du blot et spørgsmål?</h2>
        <p>
          Så tøv ikke med at tage kontakt til os herunder. Vi bestræber os på at
          svare på henvendelser indenfor 24 timer, men op til ferier kan der
          være travlt, og svartiden kan derfor være op til 48 timer.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Navn</label>
          <input type="text" id="name" {...register("name")} />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="subject">Hvad drejer henvendelsen sig om?</label>
          <input type="text" id="subject" {...register("subject")} />
          {errors.subject && (
            <p className={styles.error}>{errors.subject.message}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">
            Besked (Skriv dato'er, hvis det drejer sig om en booking)
          </label>
          <textarea id="message" rows="5" {...register("message")}></textarea>
          {errors.message && (
            <p className={styles.error}>{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={loading}
        >
          {loading ? <ClipLoader size={20} color="#ffffff" /> : "Indsend"}
        </button>
      </form>

      {submittedName && (
        <p className={styles.successMessage}>
          Tak for din besked, <strong>{submittedName}</strong>!
        </p>
      )}
    </section>
  );
};

export default ContactContent;

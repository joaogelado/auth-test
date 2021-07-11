import styles from "../../styles/Login.module.css";
import Head from "next/head";

export default function login() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Head>
          <title>Login - Auth test</title>
          <meta name="description" content="Auth test :)" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className={styles.title}>Auth Test Project</h1>

        <p className={styles.description}>
          A simple project for test authentication on Next.js, with nookies!
        </p>
        <form action="" method="POST" className={styles.form}>
          <p className={styles.form_title}>Login</p>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Put here yout username"
              className={styles.form_user}
            />
          </div>
          <div>
            <input
              type="password"
              name="pass"
              placeholder="Put here yout password"
              className={styles.form_pass}
            />
          </div>

          <div className={styles.submit_div}>
            <input
              type="submit"
              placeholder="Login"
              className={styles.submit_btn}
            />
          </div>
        </form>
      </main>
    </div>
  );
}

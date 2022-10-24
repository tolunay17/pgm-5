// import { Link } from "react-router-dom";
// import * as Routes from "../routes";
// import styles from "./SigninLayout.module.scss";
// import logo from "../assets/logo.svg";
// import google_logo from "../assets/google_logo.svg";
// import { ButtonLogin } from "../components";
// import { Formik, Form } from "formik";
// import { TextField } from "../components";
// import * as Yup from "yup";

// const SigninLayout = () => {
//   const validate = Yup.object({
//     email: Yup.string().email(5, "Email is invalid").required("Required"),
//     password: Yup.string()
//       .min(8, "Password must be at least 8 characters")
//       .required("Required"),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref("password"), null], "Password must match")
//       .required("Required"),
//   });

//   return (
//     <>
//       <div className={styles.signincontainer}>
//         <div className={styles.logo__black}>
//           <img className={styles.logo} src={logo} alt="2gether" />
//           <h1>2gether</h1>
//         </div>
//         <div className={styles.googleLogin}>
//           <img className={styles.google_logo} src={google_logo}></img>
//           <p className={styles.google_text}>Login with Google</p>
//         </div>
//         <hr />

//         <Formik
//           initialValues={{
//             email: "",
//             password: "",
//           }}
//           validationSchema={validate}
//           onSubmit={(values) => {
//             console.log(values);
//           }}
//         >
//           <div>
//             {/* {console.log(formik.values)} */}
//             <Form>
//               <TextField
//                 className={styles.name}
//                 label="Emailaddress"
//                 name="email"
//                 type="email"
//               />
//               <TextField
//                 className={styles.name}
//                 label="Password"
//                 name="password"
//                 type="password"
//               />
//               <TextField
//                 className={styles.name}
//                 label="Confirm Password"
//                 name="confirmPassword"
//                 type="password"
//               />
//             </Form>
//           </div>
//         </Formik>
//         <ButtonLogin />

//         {/* <div className={styles.forlink}>
//           <Link to={Routes.REGISTER}>Not an account yet? Register now</Link>
//         </div> */}

//         <p className={styles.privacy}>
//           This website is designed by Seneca Coil Team / ahs Privacy Policy and
//           Terms apply.
//         </p>
//       </div>
//     </>
//   );
// };

// export default SigninLayout;

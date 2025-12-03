import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function RegistrationForm2() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    date: "",
    gender: "",
    tel: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Введите имя"),
    email: Yup.string().email("Некорректный email").required("Введите email"),
    password: Yup.string()
      .min(6, "Минимальная длина - 6 символов")
      .matches(
        /(?=.*[A-Z])/,
        "Пароль должен содержать хотя бы одну заглавную букву"
      )
      .required("Введите пароль"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Пароли не совпадают")
      .required("Подтвердите пароль"),
    date: Yup.date().required("Выберите дату рождения"),
    gender: Yup.string().required("Выберите пол"),
    tel: Yup.string()
      .matches(/^\+?[0-9\s()-]{7,15}$/, "Некорректный номер телефона")
      .required("Введите номер телефона"),
  });
  const handleSubmit = (data) => {
    alert("Успешно зарегистрировано");
    alert(JSON.stringify(data, null, 1));
  };
  return (
    <>
      <h1>Это Formik с Yup</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>Ваше имя: </label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label>Ваш Email: </label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label>Пароль : </label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <label>Повторите пароль : </label>
            <Field
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            />
            <ErrorMessage name="confirmPassword" component="div" />
          </div>
          <div>
            <label>Дата рождения: </label>
            <Field type="date" id="date" name="date" />
            <ErrorMessage name="date" component="div" />
          </div>
          <div>
            <label>Ваш пол: </label>
            <label>
              <Field type="radio" name="gender" value="male" />
              Мужчина
            </label>
            <label>
              <Field type="radio" name="gender" value="female" />
              Женщина
            </label>
            <ErrorMessage name="gender" component="div" />
          </div>
          <div>
            <label>Номер телефона: </label>
            <Field type="tel" name="tel" />
            <ErrorMessage name="tel" component="div" />
          </div>
          <button type="submit">Зарегистрироваться</button>
        </Form>
      </Formik>
    </>
  );
}

export default RegistrationForm2;

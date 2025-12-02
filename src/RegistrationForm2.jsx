import { Formik, Form, Field, ErrorMessage } from "formik";
function RegistrationForm2() {
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          date: "",
          gender: "",
          tel: "",
        }}
        onSubmit={(data) => {
          alert(JSON.stringify(data, null, 1));
        }}
      >
        <Form>
          <div>
            <label>Ваше имя: </label>
            <Field
              type="text"
              name="username"
              placeholder="Имя пользователя"
              validate={(value) => {
                let error;
                if (!value) {
                  error = "Введите ваше имя";
                }
                return error;
              }}
            />
            <ErrorMessage name="username" component="div" />
          </div>
          <div>
            <label>Ваш E-mail: </label>
            <Field
              type="email"
              name="email"
              placeholder="E-mail"
              validate={(value) => {
                let error;
                if (!value) {
                  error = "Введите ваш email";
                } else if (
                  !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(
                    value
                  )
                ) {
                  error = "Некоректный email";
                }
                return error;
              }}
            />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label>Пароль: </label>
            <Field
              type="password"
              name="password"
              placeholder="Пароль"
              validate={(value) => {
                let error;
                if (!value) {
                  error = "Введите пароль";
                } else if (value.length < 6) {
                  error = "Минимальная длина - 6 символов";
                } else if (!/(?=.*[A-Z])/.test(value)) {
                  error =
                    "Пароль должен содержать хотя бы одну заглавную букву";
                }
                return error;
              }}
            />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <label>Повторите пароль: </label>
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Повторите пароль"
              validate={(value) => {
                let error;
                if (!value) {
                  error = "Подтвердите пароль";
                }
                return error;
              }}
            />
            <ErrorMessage name="confirmPassword" component="div" />
          </div>
          <div>
            <label>Дата рождения: </label>
            <Field
              type="date"
              name="date"
              validate={(value) => {
                let error;
                if (!value) {
                  error = "Выберите дату рождения";
                }
                return error;
              }}
            />
            <ErrorMessage name="date" component="div" />
          </div>
          <div>
            <label>Ваш пол: </label>
            <label>
              <Field type="radio" name="gender" value="male" /> Мужчина
            </label>
            <label>
              <Field type="radio" name="gender" value="female" /> Женщина
            </label>
            <ErrorMessage name="gender" component="div" />
          </div>
          <div>
            <label>Номер телефона: </label>
            <Field
              type="tel"
              name="tel"
              placeholder="Номер телефона"
              validate={(value) => {
                let error;
                if (!value) {
                  error = "Введите номер телефона";
                } else if (!/^\+?[0-9\s()-]{7,15}$/.test(value)) {
                  error = "Некорректный номер телефона";
                }
                return error;
              }}
            />
            <ErrorMessage name="tel" component="div" />
          </div>
          <button type="submit">Зарегистрироваться</button>
        </Form>
      </Formik>
    </>
  );
}

export default RegistrationForm2;

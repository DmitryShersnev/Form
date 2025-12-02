import { useForm } from "react-hook-form";

function RegistrationForm1() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 1));
  };
  const password = watch("password");

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Имя пользователя: </label>
          <input
            {...register("name", {
              required: "Укажите ваше имя",
            })}
          />
          <p>{errors.name?.message}</p>
        </div>
        <div>
          <label>E-mail: </label>
          <input
            {...register("email", {
              required: "Укажите ваш email",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: "Введите корректный email",
              },
            })}
          />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <label>Введите пароль: </label>
          <input
            type="password"
            {...register("password", {
              required: "Обязательное поле",
              minLength: {
                value: 6,
                message: "Минимальная длина - 6 символов",
              },
              pattern: {
                value: /(?=.*[A-Z])/,
                message: "Пароль должен содержать хотя бы одну заглавную букву",
              },
            })}
          />
          <p>{errors.password?.message}</p>
          <label>Повторите пароль: </label>
          <input
            {...register("confirmPassword", {
              required: "Повторите пароль",
              validate: (value) => value === password || "Пароли не совпадают",
            })}
          />
          <p>{errors.confirmPassword?.message}</p>
        </div>
        <div>
          <label>Дата рождения: </label>
          <input
            type="date"
            {...register("date", {
              required: "Введите дату рождения",
            })}
          />
          <p>{errors.date?.message}</p>
        </div>
        <div>
          <label>Выберите ваш пол: </label>
          <label>
            <input
              type="radio"
              {...register("gender", { required: "Выберите ваш пол" })}
              value="male"
            />
            Мужской
          </label>
          <label>
            <input
              type="radio"
              {...register("gender", { required: "Выберите ваш пол" })}
              value="female"
            />
            Женский
          </label>
          <p>{errors.gender?.message}</p>
        </div>
        <div>
          <label>Номер телефона: </label>
          <input
            type="tel"
            {...register("tel", {
              required: "Введите номер телефона",
              pattern: {
                value: /^\+?[0-9\s()-]{7,15}$/,
                message: "Некорректный формат номера",
              },
            })}
          />
          <p>{errors.tel?.message}</p>
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </>
  );
}

export default RegistrationForm1;

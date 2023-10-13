export async function getTracks() {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/all/"
  );
  if (!response.ok) {
    throw new Error('Не удалось загрузить плейлист, попробуйте позже')
  }

  const data = await response.json();

  return data;
}

export async function fetchLogin(email, password) {
  return fetch("https://skypro-music-api.skyeng.tech/user/login/", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      "content-type": "application/json",
    },
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Неверный логин или пароль");
    }
    if (response.status === 401) {
      throw new Error("Пользователь с таким email или паролем не найден");
    }
    return response.json();
  });
}
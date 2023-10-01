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

  export async function fetchLogin({ email, password }) {
    return fetch("https://skypro-music-api.skyeng.tech/user/login/", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
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
  };

  export async function fetchReg({ username, email, password }) {
    return fetch("https://skypro-music-api.skyeng.tech/user/signup/", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: {
        "content-type": "application/json",
      },
    }).then(async (response) => {
      const statusRequest = response.status;
      const dataRequest = await response.json();
      const object = { status: statusRequest, data: dataRequest };
      return object;
    });
  }

  
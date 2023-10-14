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

  export const registerUser = (email, password) => {
    const promise = fetch('https://skypro-music-api.skyeng.tech/user/signup/', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        username: email,
      }),
      headers: {
        'content-type': 'application/json',
      },
    })
    return promise
  }
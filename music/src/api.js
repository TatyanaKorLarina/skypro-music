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

  export const registerUser = async (email, password) => {
    const response = await fetch('https://skypro-music-api.skyeng.tech/user/signup/', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        username: email,
      }),
      headers: {
        'content-type': 'application/json',
      },
    },
    )

    const data = await response.json()
  
    if (!response.ok) {
      console.log(data)
      const error = data.email?.[0] ?? data.username?.[0] ?? data.password?.[0]
      console.log(error)
      throw new Error(error)
    } else {
      console.log(data)
      return data
    }
  }

  export const loginUser = async (email, password) => {
    const response = await fetch(
      'https://skypro-music-api.skyeng.tech/user/login/',
      {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          'content-type': 'application/json',
        },
      },
    )
  
    const data = await response.json()
  
    if (!response.ok) {
      console.log(data)
      const error = data.detail ?? data.email ?? data.password
      console.log(error)
      throw new Error(error)
    } else {
      console.log(data)
      return data
    }
  }
  
  export const getToken = async (email, password) => {
    const response = await fetch(
      'https://skypro-music-api.skyeng.tech/user/token/',
      {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          'content-type': 'application/json',
        },
      },
    )
  
    const data = await response.json()
  
    if (!response.ok) {
      console.log(data)
      const error = data.detail ?? data.email ?? data.password
      console.log(error)
      throw new Error(error)
    } else {
      // console.log(data)
      return data
    }
  }


  export const refreshToken = async (refreshKey) => {
    try {
      const response = await fetch(`https://skypro-music-api.skyeng.tech/user/token/refresh/`, {
        method: 'POST',
        body: JSON.stringify({
          refresh: refreshKey,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
  
      if (!response.ok) {
        const data = await response.json();
        const error = data.detail || data.email || data.password || 'Unknown Error';
        throw new Error(error);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('An error occurred:', error);
      throw error; // Rethrow the error for higher-level handling
    }
  }
  

  export const getMySongs = async (accessToken) => {
    try {
      const response = await fetch(
        'https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json', // Заменил 'content-type' на 'Content-Type'
          },
        }
      )
  
      if (!response.ok) {
        const errorData = await response.json(); // Попробуйте получить JSON-данные об ошибке
        const error = errorData.detail || errorData.email || errorData.password || 'Unknown error';
        console.log(error);
        throw new Error(error);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error); // Рекомендуется использовать console.error для ошибок
      throw error; // Перебросьте ошибку дальше, чтобы обработать её в вызывающем коде
    }
  };
  
  export const putLike = async (accessToken, id) => {
    const response = await fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      }
    });
  
    const data = await response.json();
  
    if (!response.ok) {
      console.log(data);
      const error = data.detail ?? data.email ?? data.password;
      console.log(error);
      throw new Error(error);
    } else {
      return data;
    }
  }
    
  export const putDislike = async (accessToken, id) => {
    try {
      const response = await fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'content-type': 'application/json',
        },
      });
  
      if (!response.ok) {
        const data = await response.json();
        const error = data.detail || data.email || data.password || 'Unknown error';
        console.error('API error:', error);
        throw new Error(error);
      } else {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.error('Network error:', error);
      throw error;
    }
  };
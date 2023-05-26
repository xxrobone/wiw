const BASE_URL = 'http://localhost:5000/movies/';
const API_KEY = '?apikey=5';


// get all function
export async function getMovies() {
  const res = await fetch(`${BASE_URL}${API_KEY}`, {
    method: 'GET',
  });
  const data = await res.json();
  return { data };
}

// delete function
export async function deleteMovie(_, { arg: id }) {
  const res = await fetch(`${BASE_URL}${id}${API_KEY}`, {
    method: 'DELETE',
  });
  const data = await res.json();
  return { data, status: res.status };
}

// add function
export async function addMovie(_, { arg: { title, release_date, overview } }) {
  console.log('fram add movie api', title, release_date);
  const res = await fetch(`${BASE_URL}${API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      movie: {
        title,
        release_date,
        overview,
      },
    }),
  });

  const data = await res.json();
  return { data, status: res.status };
}

// edit function
export async function editMovie(
  _,
  { arg: { id, title, release_date, overview } }
) {
  console.log('edit from api: ', id, title, release_date, overview);

  const res = await fetch(`${BASE_URL}${id}${API_KEY}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ movie: { id, title, release_date, overview } }),
  });

  const data = await res.json();
  console.log('data', data);
  return { data, status: res.status };
}

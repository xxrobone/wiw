'use client';
import { useState } from 'react';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import styles from './ItemList.module.scss';
import Toaster from '../../components/Toaster/Toaster';
import Item from '../../components/Item/Item';
import Modal from '../../components/Modal/Modal';
import { deleteMovie, getMovies, addMovie, editMovie } from './api';

export const cacheKey = '/api/movies';

export default function Movies() {
  const { data: { data = [] } = {} } = useSWR(cacheKey, getMovies, {
    onError: () => {
      setToaster({
        message:
          'Unable to fetch data, check so you are connected to the server',
        type: 'error',
      });
    },
  });

  const { trigger: addTrigger, isMutating } = useSWRMutation(
    cacheKey,
    addMovie,
    {
      onError: () => {
        setToaster({
          message: 'Error while trying to add new movie',
          type: 'error',
        });
      },
    }
  );

  const { trigger: editTrigger } = useSWRMutation(cacheKey, editMovie);

  const { trigger: deleteTrigger } = useSWRMutation(cacheKey, deleteMovie, {
    onError: () => {
      setToaster({
        message: 'Error, unable to delete the movie',
        type: 'error',
      });
    },
  });

  const [toaster, setToaster] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const closeToaster = () => {
    setToaster(null);
  };

  const handleToggleModal = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleDelete = async (id) => {
    await deleteTrigger(id);
  };

  const handleAddMovie = async ({ title, release_date, overview }) => {
    await addTrigger({ title, release_date, overview });

    /* const newMovie = { title, release_date, overview };
    fetch('http://localhost:5000/movies?apikey=5', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMovie),
    }); */
  };

  const handleEditMovie = async ({ id, title, release_date, overview }) => {
    await editTrigger({
      id,
      title,
      release_date,
      overview,
    });
    console.log('from the list: ', id, title, release_date, overview);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Movies</h1>

      <button className={styles.addNewMovie} onClick={handleToggleModal}>
        Add new Movie
      </button>

      <ul className={styles.list}>
        {data?.map((movie) => {
          return (
            <Item
              id={movie.id}
              key={movie.id}
              movie={movie}
              onDelete={() => handleDelete(movie.id)}
              onEdit={handleEditMovie}
            />
          );
        })}
      </ul>
      {toaster && (
        <Toaster
          message={toaster.message}
          type={toaster.type}
          onClose={closeToaster}
        />
      )}
      {isOpen && (
        <Modal
          onClose={handleToggleModal}
          isLoading={isMutating}
          onSubmit={handleAddMovie}
        />
      )}
    </div>
  );
}

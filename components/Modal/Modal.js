import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

const CharacterModal = ({ onSubmit, onClose, movie = {}, isLoading }) => {
  const [title, setTitle] = useState(movie.title ?? '');
  const [released, setReleased] = useState(movie.release_date ?? '');
  const [overview, setOverview] = useState(movie.overview ?? '');

    const MovieData = {
    title,
    release_date: released,
    overview,
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    await onSubmit(MovieData);
    onClose();
  };

  return ReactDOM.createPortal(
    <div className={styles.backdrop} onClick={onClose}>
      <form
        className={styles.modal}
        onSubmit={submitHandler}
        onClick={(e) => e.stopPropagation()}
      >
        <label>Title</label>
        <input
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Released</label>
        <input
          type='text'
          name='released'
          value={released}
          onChange={(e) => setReleased(e.target.value)}
        />
        <label>Overview</label>
        <textarea
          type='text'
          name='overview'
          value={overview}
          onChange={(e) => setOverview(e.target.value)}
        />
        <div className={styles.actions}>
          <button type='button' onClick={onClose}>
            Cancel
          </button>
          <button type='submit'>
            {!isLoading ? 'Submit' : 'Uploading...'}
          </button>
        </div>
      </form>
    </div>,
    document.getElementById('modal-root')
  );
};

export default CharacterModal;

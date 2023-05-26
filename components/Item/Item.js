import { useState } from 'react';
import Image from 'next/image';
import styles from './Item.module.scss';
import Modal from '../Modal/Modal';
import NOIMG from '/public/noitemimage.png';
import { AiFillCaretDown } from 'react-icons/ai';
import { AiFillCaretUp } from 'react-icons/ai';

// the img url
const IMG_URL = 'https://image.tmdb.org/t/p/w1280';

export default function Item({ id, movie, onDelete, onEdit }) {
  const { title, release_date, overview } = movie;

  let itemImg;
  if (
    movie.backdrop_path === null ||
    movie.backdrop_path === undefined ||
    movie.backdrop_path === ''
  ) {
    itemImg = NOIMG;
  } else {
    itemImg = IMG_URL + movie.backdrop_path;
  }

  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  const handleToggleModal = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleOnEdit = ({ title, release_date, overview }) => {
    onEdit({ id, title, release_date, overview });
  };

  return (
    <>
      <li className={styles.container} onClick={(e) => console.log(e.target)}>
        <div className={styles.content}>
          <h2>{title}</h2>
          <p>
            Released:
            <span>{release_date}</span>
          </p>
          <p
            className={
              show ? `${styles.overview}${styles.show}` : `${styles.overview}`
            }
            onClick={handleShow}
          >
            Overview: {show ? <AiFillCaretUp /> : <AiFillCaretDown />}
            <span>{overview}</span>
          </p>
        </div>
        <div className={styles.image}>
          <Image
            src={itemImg}
            alt={'this is a image of' + title}
            width={320}
            height={260}
            priority
          />
        </div>
        <div className={styles.buttonSection}>
          <button onClick={onDelete}>Delete</button>
          <button onClick={handleToggleModal}>Edit</button>
        </div>
      </li>
      {isOpen && (
        <Modal
          movie={movie}
          onClose={handleToggleModal}
          onSubmit={handleOnEdit}
        />
      )}
    </>
  );
}

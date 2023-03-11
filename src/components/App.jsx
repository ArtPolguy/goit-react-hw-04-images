import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from 'shared/components/Modals/Modal';
import ModalImg from './Modal/ModalImg';

import { Watch } from 'react-loader-spinner';
import { useState, useEffect } from 'react';
import css from './App.module.css';
import { searchImg } from 'shared/api/img-api';

export const App = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [modalDetails, setModalDetails] = useState(null);

  useEffect(() => {
    if (search) {
      const fetchImg = async () => {
        try {
          setLoading(true);
          const data = await searchImg(search, page);
          const result = data.hits;
          setImages(prevImg => [...prevImg, ...result]);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchImg();
    }
  }, [search, page, setLoading, setImages, setError, error]);

  const searchImage = ({ search }) => {
    setSearch(search);
    setImages([]);
    setPage(1);
  };

  const showModalImg = ({ largeImageURL, alt }) => {
    setModalDetails({ largeImageURL, alt });
    setShowModal(true);
  };
  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalDetails(null);
  };

  return (
    <div className={css.app}>
      <Searchbar onSubmit={searchImage} />
      {Boolean(images.length) && (
        <ImageGallery images={images} showModalImg={showModalImg} />
      )}
      {loading && (
        <Watch wrapperStyle={{ display: 'flex', justifyContent: 'center' }} />
      )}
      {Boolean(images.length) && <Button onClick={loadMore} />}
      {showModal && (
        <Modal close={closeModal}>
          <ModalImg {...modalDetails} />
        </Modal>
      )}
    </div>
  );
};

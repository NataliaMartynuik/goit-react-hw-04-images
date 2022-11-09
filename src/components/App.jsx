import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Container } from './App.styled'
import { Modal } from './Modal/Modal';
import { ImageErrorView } from './Error/Error';
import { Loader } from './Loader/Loader';
import { fetchImagesByName } from '../api';
import Button from './Button/Button';

const App =() => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowmodal] = useState(null);
   
  useEffect(() => {
    if (query === '') {
      return;
    }
    const fetchImages = () => {
      const options = {
      query,
      page,
    };
      setIsLoading(true);
      try {
        fetchImagesByName(options)
          .then(images => {
            if (images.length === 0) {
              return toast.error(`Sorry, there are no images matching ${query}.`)
            }
            setImages(prevState => [...prevState, ...images],
            )
          })
      }
      catch (error) {
        setError({ error })
      } finally {
        setIsLoading(false)
      }
    }
    fetchImages();
  }, [query, page])
  
  const scroll = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth',
      });
    }, 300);
  };

  const loadMore = () => {
    setPage(page => page + 1)
    scroll();  
    } 
  const handleSubmitSearchbar = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };
   
 



  const toggleModal = () => {
    setShowmodal(null);
  };

 const handleModalImage = largeImageURL => {
    const image = images.find(
      image => image.largeImageURL === largeImageURL
    );
   setShowmodal({
     largeImageURL: image.largeImageURL 
    })
  }

  const showButton = images.length > 0;
    return (
      <Container>
        <Searchbar onSubmit={handleSubmitSearchbar} />
        {error && <ImageErrorView />}

        {isLoading && <Loader />}

        <ImageGallery images={images} openModal={handleModalImage} />
       
        {showButton && (
          <Button onClick={loadMore}/>
        )}

        {showModal && (
          <Modal largeImageURL={showModal.largeImageURL} onCloseModal={toggleModal} />
        )}
        <ToastContainer />
      </Container>
    );

}

export default App;

  

  
 

 
    


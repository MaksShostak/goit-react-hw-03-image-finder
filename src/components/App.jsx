import { Loader } from './Loader/Loader';
import { Component } from 'react';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ButtonBootstrap from './Button/Button';
import Searchbar from './Searchbar/Searchbar';
import { getPixabayPhoto } from '../services/Api/Api';
import Modal from './Modal/Modal';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    page: 1,
    input: '',
    items: [],
    isOpen: false,
    loading: false,
    selected: '',
    notFaund: false,
    error: false,
  };

  addPixabayPhoto = async value => {
    try {
      this.setState({
        loading: true,
      });

      const image = await getPixabayPhoto(value);
      if (!image.length) {
        this.setState({ notFaund: true });
      } else {
        this.setState(prevState => ({
          items: [...prevState.items, ...image],
        }));
      }
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ error: true });
      console.error(error);
    }
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log('prevState.page', prevState.page);
    if (
      prevState.page !== this.state.page ||
      prevState.input !== this.state.input
    ) {
      this.addPixabayPhoto(this.state);
    }
  }

  heandleSubmit = inputValue => {
    // e.preventDefault();
    // if (inputValue.trim() === '') {
    //   return Notify.warning(`Please enter a search query`, {
    //     backOverlay: true,
    //     timeout: 1500,
    //     position: 'center-center',
    //     fontSize: '34px',
    //     width: '500px',
    //     clickToClose: true,
    //   });
    // }
    this.setState({
      page: 1,
      input: inputValue.trim(),
      items: [],
      notFaund: false,
    });
    // e.target.reset();
  };

  openModal = component => {
    this.setState({ isOpen: true, selected: component });
  };
  closeModal = () => {
    this.setState({ isOpen: false });
  };
  render() {
    const { heandleSubmit, loadMore, openModal, closeModal } = this;
    const { isOpen, items, loading, selected, notFaund, error, input } =
      this.state;
    return (
      <>
        <Searchbar onSubmit={heandleSubmit} inSubmiting={loading} />
        {isOpen && <Modal modalClose={closeModal} modalimg={selected} />}
        {items.length ? (
          <ImageGallery value={items} modalOpen={openModal} />
        ) : notFaund ? (
          <>
            <p
              style={{
                textAlign: 'center',
                color: 'red',
                fontSize: '30px',
              }}
            >
              Nothing was found for your query : "{input}", please try another
              search term
            </p>
            <img
              style={{
                marginRight: 'auto',
                marginLeft: 'auto',
              }}
              src="https://www.bazos.cz/img/1/559/156779559.jpg?t=1661281603"
              alt="Russian warship goes to hell"
              width={600}
            />
          </>
        ) : null}
        {loading && (
          <Loader
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        )}
        {items.length > 0 && !loading && <ButtonBootstrap onClick={loadMore} />}
        {error && (
          <p>Something went wrong, please reload the page and try again</p>
        )}
      </>
    );
  }
}

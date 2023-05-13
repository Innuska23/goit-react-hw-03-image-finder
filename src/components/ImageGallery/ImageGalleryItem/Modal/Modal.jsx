import { Component } from 'react';
import PropTypes from 'prop-types';

import { ModalImg, ModalStyle, Overlay } from './Modal.styled';
class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.clickEsc);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.clickEsc);
    }

    clickBackdrop = event => {
        if (event.target === event.currentTarget) {
            this.props.onClose();
        }
    }

    clickEsc = event => {
        if (event.code === 'Escape') {
            this.props.onClose();
        }
    }


    render() {
        return (
            <Overlay onClick={this.clickBackdrop}>
                <ModalStyle>{this.props.children}
                    <ModalImg src={this.props.imgData.largeImageURL} alt={this.props.imgData.tags} />
                </ModalStyle>
            </Overlay>
        )
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    imgData: PropTypes.shape({
        largeImageURL: PropTypes.string,
        tags: PropTypes.string
    }).isRequired,
};

export default Modal;
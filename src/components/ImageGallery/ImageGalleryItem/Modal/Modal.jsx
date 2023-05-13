import { Component } from 'react';
import PropTypes from 'prop-types';

import {ModalImg, ModalStyle, Overlay} from './Modal.styled';
class Modal extends Component {
    static propTypes = {
        url: PropTypes.string.isRequired,
        onClose: PropTypes.func.isRequired,
    };

    state = {}

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
                <ModalImg src={this.props.src} alt={this.props.alt}/>
                </ModalStyle>
            </Overlay>
        )
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node,
};

export default Modal;
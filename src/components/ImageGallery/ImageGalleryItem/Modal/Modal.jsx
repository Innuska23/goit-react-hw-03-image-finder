import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import {ModalStyle, Overlay} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
export default class Modal extends Component {
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
        return createPortal(
            <Overlay onClick={this.clickBackdrop}>
                <ModalStyle>
                    <img src={this.props.url} alt="" />
                </ModalStyle>
            </Overlay>,
            modalRoot
        )
    }
}
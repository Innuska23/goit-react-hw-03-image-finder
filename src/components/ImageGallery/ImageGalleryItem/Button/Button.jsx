import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import { Button } from './Button.styled';

const LoadMoreBtn = ({ isLoading, onClick }) => (
    <Button type="button" disabled={isLoading} onClick={onClick}>
        {isLoading ? <Loader visible /> : 'Load more'}
    </Button>
);

LoadMoreBtn.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
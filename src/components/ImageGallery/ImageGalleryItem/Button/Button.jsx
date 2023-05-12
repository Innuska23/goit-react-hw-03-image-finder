import PropTypes from 'prop-types';
import { Button } from './Button.styled';

const LoadMoreBtn = ({ isDisabled, onClick }) => (
    <Button type="button" disabled={isDisabled} onClick={onClick}>
        Load more
    </Button>
);

LoadMoreBtn.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
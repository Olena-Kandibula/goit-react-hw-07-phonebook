import PropTypes from 'prop-types';
import s from '../Filter/Filter.module.css';

import { connect } from 'react-redux';
import * as actions from '../../redux/phonebook/phonebook-action';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contact by name
      <input
        className={s.input}
        type="text"
        name="filter"
        autoComplete="off"
        value={value}
        onChange={onChange}
        // onChange = {e = onChange(e.target.value) }
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = state => ({
  value: state.phoneBook.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

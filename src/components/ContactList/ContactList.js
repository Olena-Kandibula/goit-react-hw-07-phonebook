import PropTypes from 'prop-types';
import s from '../ContactList/ContactList.module.css';
import { TiUserDeleteOutline } from 'react-icons/ti';

import { connect } from 'react-redux';
import * as actions from '../../redux/phonebook/phonebook-action';

function ContactList({ contacts, onDeleteContact, filter }) {
  return (
    <div>
      <ul className={s.list}>
        {contacts.map(contact => (
          <li className={s.item} key={contact.id}>
            <p>
              <span>{contact.name}:</span> <span>{contact.number}</span>
            </p>

            <button
              className={s.buttonDelete}
              type="button"
              onClick={() => onDeleteContact(contact.id)}
            >
              <TiUserDeleteOutline color="red" size="18px" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func,
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};
const mapStateToProps = ({ phoneBook: { contacts, filter } }) => ({
  contacts: getVisibleContacts(contacts, filter),
});

// const mapStateToProps = state => {
//   const { filter, contacts } = state.phoneBook;
//   const normalizedFilter = filter.toLowerCase();
//   const visibleContacts =  contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//   );

//   return {
//     contacts: visibleContacts,
//   }
// };

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

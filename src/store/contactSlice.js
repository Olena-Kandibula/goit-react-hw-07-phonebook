import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://618eb0d750e24d0017ce13d2.mockapi.io/api/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',

  async function (_, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) {
        throw new Error('error server!');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const removeContact = createAsyncThunk(
  'contacts/remove',

  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error("Can't delete contact!Error Server!");
      }

      dispatch(deleteContact(id));
      // const data = await response.json();
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addcontact',

  async function (contactNew, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactNew),
      });

      if (!response.ok) {
        throw new Error("Can't add contact! Error Server!");
      }

      const data = await response.json();
      dispatch(addContactNew(data));
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const filterContact = createAsyncThunk(
  'contacts/filter',
  async function (value, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `https://618eb0d750e24d0017ce13d2.mockapi.io/api/contacts?filter=${value}`,
        {
          metod: 'GET',
        },
      );
      if (!response.ok) {
        throw new Error("Can't filtered contact!Error Server!");
      }
      dispatch(changeFilter(value));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
};
const setPending = state => {
  // state.status = 'loading';
  state.error = null;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
    status: null,
    error: null,
  },

  reducers: {
    addContactNew(state, action) {
      state.contacts = [action.payload, ...state.contacts];
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    },

    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },

  extraReducers: {
    [fetchContacts.pending]: setPending,
    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts = action.payload;
      state.status = 'resolved';
      state.error = null;
    },
    [fetchContacts.rejected]: setError,

    [addContact.pending]: setPending,
    [addContact.fulfilled]: function (state, action) {
      state.status = 'resolved';
      state.error = null;
    },
    [addContact.rejected]: setError,

    [removeContact.pending]: setPending,
    [removeContact.fulfilled]: state => {
      state.status = 'resolved';
      state.error = null;
    },
    [removeContact.rejected]: setError,
  },

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchContacts.pending, (state, action) => {
  //     state.status = 'loading';
  //     state.error = null;
  //     })
  //   .addCase(fetchContacts.fulfilled, (state, action) => {
  //      state.status = 'resolved';
  //     console.log('super fetchContacts action.payload', action.payload)
  //     console.log('super fetchContacts state.contacts', state.contacts)
  //     // state.contacts.push(action.payload);
  //     state.contacts = action.payload;
  //     console.log('super fetchContacts state.contacts - 1 ', state.contacts)
  //     state.error = null;
  //   })
  //    .addCase(fetchContacts.rejected, (state,action)=>{
  //       state.status = 'rejected';
  // state.error = action.payload;
  //    })

  //         .addCase(addContact.pending, (state, action) => {
  //     state.status = 'loading';
  //     state.error = null;
  //     })
  //   .addCase(addContact.fulfilled, (state, action) => {
  //      state.status = 'resolved';
  //     console.log('super addContacts action.payload', action.payload)
  //     console.log('super dddContacts state.contacts', state.contacts)
  //     // state.contacts = action.payload;
  //      state.contacts.push(action.payload);
  //     console.log('super fetchContacts state.contacts - 1 ', state.contacts)
  //     state.error = null;
  //   })
  //    .addCase(addContact.rejected, (state,action)=>{
  //       state.status = 'rejected';
  // state.error = action.payload;
  //    })

  //     .addCase(removeContact.pending, (state, action) => {
  //     state.status = 'loading';
  //     state.error = null;
  //     })
  //   .addCase(removeContact.fulfilled, (state, action) => {
  //     state.status = 'resolved';
  //       state.error = null;
  //   })
  //    .addCase(removeContact.rejected, (state,action)=>{
  //       state.status = 'rejected';
  // state.error = action.payload;
  //    })
  // }
});

const { addContactNew, deleteContact, changeFilter } = contactSlice.actions;
export default contactSlice.reducer;

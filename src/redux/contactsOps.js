import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const mockApi = axios.create({
  baseURL: 'https://68b4217a45c90167876f9d81.mockapi.io/',
});

export const getContactsOper = createAsyncThunk('contacts/get', async (_, thunkApi) => {
  try {
    const response = await mockApi.get('contacts');
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

getContactsOper();

export const addContactsOper = createAsyncThunk('contacts/add', async (contact, thunkApi) => {
  try {
    const response = await mockApi.post('contacts', contact);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const deleteContactsOper = createAsyncThunk('contacts/delete', async (id, thunkApi) => {
  try {
    const { data } = await mockApi.delete(`contacts/${id}`);

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

import { createAsyncThunk } from '@reduxjs/toolkit';

export const register = createAsyncThunk('auth/register', async () => {});

export const logIn = createAsyncThunk('auth/login', async () => {});

export const logOut = createAsyncThunk('auth/logout', async () => {});

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "node:fs";
import { RootState, AppThunk } from '../../app/store';

export interface PokemonState {
  data: any;
  loading: boolean;
}

const initialState: PokemonState = {
  data: null,
  loading: false,
};

export const fetchPkmnAsync = createAsyncThunk(
  'pkmn/fetchPkmn',
  async (name: string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const jsonResponse = await response.json();
    return jsonResponse;
  }
);

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPkmnAsync.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchPkmnAsync.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.data = action.payload;
    })
  }
})

export const selectPokemn = (state: RootState) => state.pokemon;

export default pokemonSlice.reducer;
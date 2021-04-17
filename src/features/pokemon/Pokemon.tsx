import React, { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  fetchPkmnAsync,
  selectPokemn,
} from './pokemonSlice';

export function Pokemon() {
  const pokemon = useAppSelector(selectPokemn);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchPkmnAsync('ditto'));
  }, []);
  
  if (pokemon.loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Pokemon</h2>
      {pokemon.data && (
        <p>{pokemon.data.name}</p>
      )}
    </div>
  );
}

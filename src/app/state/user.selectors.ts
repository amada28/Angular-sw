import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './user.reducer';


const getUserFeatureState = createFeatureSelector<State>('userState');

export const getUser = createSelector(
    getUserFeatureState,
    state => state && state.users
)

export const getError = createSelector(
    getUserFeatureState,
    state => state.error
)
export interface EditAction {
  type: 'edit'
  payload: { field: 'name' | 'email' | 'message'; value: string }
}

export interface ResetAction {
  type: 'reset'
}

export const initialState = {
  name: '',
  email: '',
  message: '',
}

export const reducer: (
  x: typeof initialState,
  action: EditAction | ResetAction
) => typeof initialState = (state: typeof initialState, action: EditAction | ResetAction) => {
  switch (action.type) {
    case 'edit':
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      }
    case 'reset':
      return initialState
  }
}

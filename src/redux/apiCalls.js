import { updateStart, updateSuccess, updateFailure, updateSuccessClose } from "./userSlice";

export const updateUser = async (user, dispatch) => {
  dispatch(updateStart());
  const response = await fetch("http://localhost:8800/api/users/1/update", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  if (!response.ok) {
    dispatch(updateFailure());
  } else {
    const data = await response.json();
    dispatch(updateSuccess(data));
    setTimeout(() => {
        dispatch(updateSuccessClose());
    }, 1000);
  }
};

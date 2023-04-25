import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const [signUpUserResponse, uploadPhotoResponse] = await Promise.allSettled([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName),
    ]);
    const result = [
      {
        status: signUpUserResponse.status,
        value:
          signUpUserResponse.status === 'rejected'
            ? `${signUpUserResponse.reason}`
            : signUpUserResponse.value,
      },
      {
        status: uploadPhotoResponse.status,
        value:
          uploadPhotoResponse.status === 'rejected'
            ? `${uploadPhotoResponse.reason}`
            : uploadPhotoResponse.value,
      },
    ];
    return result;
  } catch (error) {
    console.error(error);
  }

  // Add a default return statement here
  return null;
}

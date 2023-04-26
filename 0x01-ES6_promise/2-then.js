export default async function handleResponseFromAPI(promise) {
  try {
    await promise;
    console.log('Got a response from the API');
    return { status: 200, body: 'success' };
  } catch (error) {
    console.error(error);
    return new Error();
  }
}

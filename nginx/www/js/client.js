const currentOrigin = window.location.origin;
const apiOrigin = currentOrigin.replace(/http(s)?:\/\/(www\.)?/, 'http$1://api.');
console.log(apiOrigin);

const callApi = () => {
  fetch(`${apiOrigin}/api`)
  .then((response) => {
    response.body.getReader().read().then(({ value, done }) => {
      if (done) {
        return;
      }
      const decoder = new TextDecoder();
      const decodedValue = decoder.decode(value);
      document.querySelector('.api-response').innerHTML = decodedValue;
    });
  })
  .catch((error) => {
    alert('Error calling API');
  });
};

document.querySelector('#send').addEventListener('click', callApi);

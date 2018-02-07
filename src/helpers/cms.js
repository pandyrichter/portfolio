import Prismic from 'prismic-javascript';

const apiEndpoint = 'https://dsportfolio.prismic.io/api';

const content = Prismic.getApi(apiEndpoint).then(api => {
  return api.query("")
}).then(response => {
  console.log('Documents: ', response.results);
  return response.results;
}, err => {
  console.log('Something went wrong', err);
});

export default content;
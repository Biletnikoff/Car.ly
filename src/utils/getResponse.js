import Promise from 'bluebird';

 return Promise.resolve(response.json())
 	.then((res) => res)
  .catch(err => console.log(err));
}

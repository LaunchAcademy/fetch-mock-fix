import fetchMock from 'fetch-mock'

describe('example test', () => {
  describe('example test', () => {
    it('should pass', () => {
      fetchMock.get('/api/v1/tasks', {
        status: 201,
        body: {id: 4124, title: 'Scream'}
      });
      fetch('/api/v1/tasks').then(() => {console.log('wtf')}).catch(() => { console.log('fail')})
    });
  });
});

// require dependencies

const { acceptableMethod } = require('../handlers');


const data1 = {
  method: 'GET',
};

const data2 = {
  method: 'POST',
};

const data3 = {
  method: 'DELETE',
};

describe('acceptable methods function test', () => {
  it('should accept a GET request', () => {
    expect(acceptableMethod(data1)).toEqual(true);
  });
});

describe('acceptable methods function test', () => {
  it('should accept a POST request', () => {
    expect(acceptableMethod(data2)).toEqual(true);
  });
});

describe('acceptable methods function test', () => {
  it('should not accept request that is not GET or POST', () => {
    expect(acceptableMethod(data3)).toEqual(false);
  });
});

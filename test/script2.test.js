const fetch = require('node-fetch');
const swapi = require('./script2');

 //expect.assertions(number) verifies that a
  // certain number of assertions are called during a
  // test. This is often useful when testing asynchronous
  //code, in order to make sure that assertions in a
  //callback actually got called.

it('calls swapi to get people', () => { // put done in the argument
	expect.assertions(1); 
	return swapi.getPeople(fetch).then(data => { // jest is smart to wait till promise returns
		expect(data.count).toEqual(87) //this is an assertion
		// done(); // another way: put this so that done() callback is called before determining test has passed
	})
})

it('calls swapi to get people with a promise', () => {
	expect.assertions(2); //tip: for async test, always expect assertions, then RETURN
	return swapi.getPeoplePromise(fetch).then(data => {
		expect(data.count).toEqual(87);
		expect(data.results.length).toBeGreaterThan(5)
	})
})

it('getPeople returns count and results', () => {
	const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
		json: () => Promise.resolve({
			count: 87,
			results: [0,1,2,3,4,5]
		})
	}))

	expect.assertions(4);
	return swapi.getPeoplePromise(mockFetch).then(data => {
		expect(mockFetch.mock.calls.length).toBe(1); //spying what mockFetch is doing inside of getPeoplePromise
		expect(mockFetch).toBeCalledWith("https://swapi.co/api/people");
		expect(data.count).toEqual(87);
		expect(data.results.length).toBeGreaterThan(5)
	})
})

// Mock functions are also known as "spies", because
// they let you spy on the behavior of a function that is
// called indirectly by some other code, rather than just
// testing the output. You can create a mock function with
// jest.fn(). If no implementation is given, the mock
// function will return undefined when invoked.
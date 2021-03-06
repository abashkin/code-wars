describe('Function-spies', function() {
  var method,
      target;
  
  beforeEach(function() {
    method = console,
    target = 'error'
  });
  
  it('Spy should keeps track of how many times a function is called.', function() {
    var spy = Spy(method, target);
    
    console.error('calling console.error'); // It doesn't matter which options in target method
    console.error('calling console...');
    console.error('calling ...');
    
    expect(spy.count).toEqual(3);
  });
});

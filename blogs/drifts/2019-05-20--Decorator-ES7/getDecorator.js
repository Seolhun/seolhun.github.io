function timeout(milliseconds = 0) {
  return function(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function() {
      setTimeout(() => {
        originalMethod.apply(this, arguments);
      }, milliseconds);
    };
    return descriptor;
  };
}

class HomeComponent {
  @timeout()
  demoMethod() {
    // This code will run at the next tick...
  }

  @timeout(2000)
  demoMethod2() {
    // This code will run at the next tick...
  }
}

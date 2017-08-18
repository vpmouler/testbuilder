var FILL_ME_IN = 'Fill this value in';

var assert = chai.assert;
var expect = chai.expect;

describe('Diner\'s Club', function() {

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('3934567890123') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }

  });
});

describe('American Express', function() {

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {

  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  })

});

describe('Discover', function() {

  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork("6011000000000000")).to.equal("Discover");
  });

  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork("6011000000000000000")).to.equal("Discover");
  });

  for(var prefix = 644; prefix <= 649; prefix++) {

    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix + "0000000000000")).to.equal("Discover");
      });

      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + "0000000000000000")).to.equal("Discover");
      });

    })(prefix);
  }

  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork("6500000000000000")).to.equal("Discover");
  });

  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork("6500000000000000000")).to.equal("Discover");
  });

});

describe('Maestro', function() {

  var prefix = ["5018", "5020", "5038", "6304"];
  var zero = "000000000000000";

  for(var i = 0; i < prefix.length; i++) {
    for(var len = 12; len <= 19; len++) {

      (function(len, i){
        it("has a prefix of " + prefix[i] + " and a length of " + len, function() {
          var cardNumber = prefix[i] + zero.slice(0, len - 4);
          expect(detectNetwork(cardNumber)).to.equal("Maestro");
        });
      })(len, i)

    }
  }

});

describe('China UnionPay', function() {

  var zero = "0000000000000000";

  for(var prefix = 622126; prefix <= 622925; prefix++) {
    for(var len = 16; len <= 19; len++) {

      (function(prefix, len) {
        it("has a prefix of " + prefix + " and a length of " + len, function() {
            var cardNumber = prefix + zero.slice(0, len - 6);
            expect(detectNetwork(cardNumber)).to.equal("China UnionPay");
        });
      })(prefix, len)

    }
  }

  for(var prefix = 6282; prefix <= 6288; prefix++) {
    for(var len = 16; len <= 19; len++) {

      (function(prefix, len) {
        it("has a prefix of " + prefix + " and a length of " + len, function() {
            var cardNumber = prefix + zero.slice(0, len - 4);
            expect(detectNetwork(cardNumber)).to.equal("China UnionPay");
        });
      })(prefix, len)

    }
  }

  for(var prefix = 624; prefix <= 626; prefix++) {
    for(var len = 16; len <= 19; len++) {

      (function(prefix, len) {
        it("has a prefix of " + prefix + " and a length of " + len, function() {
            var cardNumber = prefix + zero.slice(0, len - 3);
            expect(detectNetwork(cardNumber)).to.equal("China UnionPay");
        });
      })(prefix, len)

    }
  }

});

describe('Switch', function() {

  var prefix = ["4903", "4905", "4911", "4936", "564182", "633110", "6333", "6759"];
  var len = [16, 18, 19];
  var zero = "000000000000000";

  for(var i = 0; i < prefix.length; i++) {
    for(var j = 0; j < len.length; j++) {

      (function(i, j){
        it("has a prefix of " + prefix[i] + " and a length of " + len[j], function() {
          var cardNumber = prefix[i] + zero.slice(0, len[j] - prefix[i].length);
          expect(detectNetwork(cardNumber)).to.equal("Switch");
        });
      })(i, j)

    }
  }

});

var expect = require('chai').expect;
var User = require('../app/controllers/user.controller');

describe('Our application', function() {
  let mockData = [
    {id: 1, name: "Sameer", role: "Admin"}, 
    {id: 2, name: "Kumar", role: "Employee"},
    {id: 3, name: "Verma", role: "Admin"}
  ];
  let result = User.sortFunction(mockData);

  it('should change order of id', function() {    
    expect(result[0].id).to.equal(2);
  });

  it('Id should not equal as in mock', function() {    
    expect(result[0].id).to.not.equal(1);
  });

  it('should change order of name', function() {    
    expect(result[0].name).to.equal("Kumar");
  });

  it('Nme should not be of same order as in mock', function() {    
    expect(result[0].name).to.not.equal("Sameer");
  });
});
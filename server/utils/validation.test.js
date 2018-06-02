const expect=require('expect');
const {isRealString}=require('./validation.js');

describe('isRealstring',()=>{
    it('should reject non-string values',()=>{
        var str=isRealString(1);
expect(str).toBeFalsy();
        
    });
    it('should reject string with only white spaces',()=>{
    var str=isRealString('   ');
expect(str).toBeFalsy();
});

it('should allow with string characters',()=>{
str=isRealString('   nxknx   ');
expect(str).toBeTruthy();
});
});



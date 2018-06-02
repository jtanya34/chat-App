var expect=require('expect');

var {generateMessage,generateLocationMessage}=require('./message');

describe('generateMessage',()=>{
it('should generate correct message object',()=>{
var from="jen";
var text="some message";
var message=generateMessage(from,text);
expect(message.createdAt).toBeDefined();
expect(message).toMatchObject({from,text});
});
});

describe('generateLocationMessage',()=>{
it ('should generate current location object',()=>{
var from="test";
var latitude=1;
var longitude=1;
var url='https://www.google.com/maps?q=1, 1';
var message=generateLocationMessage(from,latitude,longitude);
expect(message.createdAt).toBeDefined();
expect(message).toMatchObject({from,url});
});
});
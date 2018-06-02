const expect=require('expect');
const {Users}=require('./users');

describe('Users',()=>{
var users;
    beforeEach(()=>{
users=new Users();
users.users=[{
    id:'1',
    name:'mike',
    room:'node course',
},{
    id:'2',
    name:'jen',
    room:'node course',
},{
    id:'3',
    name:'julie',
    room:'physics',
}];
    });

    it('should add new user',()=>{
    var users=new Users();
    var user={
        id:'hjhj',
        name:'tanya',
        room:"physics"
    };
    var resUser=users.addUser(user.id,user.name,user.room);
expect(users.users).toEqual([user]);
});

it('should remove a user',()=>{
     var userList=users.removeUser('3');
    expect(userList.id).toBe('3');
});

it('should not remove a user',()=>{
   
    var userList=users.removeUser('13');
    expect(userList).toBeUndefined();
});

it('should find a user',()=>{
     var user=users.getUser('3');
     expect(user.id).toBe('3');
});
it('should not find a user',()=>{
     var user=users.getUser('13');
   expect(user).toBeUndefined();
});
it('should return names for node course',()=>{
    var userList=users.getUserList('node course');
    expect(userList).toEqual(['mike','jen']);
});
it('should return names for physics',()=>{
    var userList=users.getUserList('physics');
    expect(userList).toEqual(['julie']);
});
});
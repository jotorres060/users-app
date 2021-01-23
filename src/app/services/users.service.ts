import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: User[] = [
    {
      "id":1,
      "first_name":"Gretal",
      "last_name":"Linke",
      "email":"glinke0@wikispaces.com",
      "gender":"Female",
      "avatar":"https://robohash.org/deseruntnumquamquia.jpg?size=500x500&set=set1"
    },
    {
      "id":2,
      "first_name":"Tabatha",
      "last_name":"Haggerwood",
      "email":"thaggerwood1@mozilla.org",
      "gender":"Female",
      "avatar":"https://robohash.org/doloribusiddolor.bmp?size=500x500&set=set1"
    },
    {
      "id":3,
      "first_name":"Tove",
      "last_name":"Sandys",
      "email":"tsandys2@java.com",
      "gender":"Female",
      "avatar":"https://robohash.org/omnisvellabore.png?size=500x500&set=set1"
    },
    {
      "id":4,
      "first_name":"Genvieve",
      "last_name":"Pritchitt",
      "email":"gpritchitt3@instagram.com",
      "gender":"Female",
      "avatar":"https://robohash.org/enimdoloremquequam.jpg?size=500x500&set=set1"
    },
    {
      "id":5,
      "first_name":"Helga",
      "last_name":"Jackalin",
      "email":"hjackalin4@umn.edu",
      "gender":"Female",
      "avatar":"https://robohash.org/etdolorererum.png?size=500x500&set=set1"
    },
    {
      "id":6,
      "first_name":"Celinka",
      "last_name":"Meekins",
      "email":"cmeekins5@upenn.edu",
      "gender":"Female",
      "avatar":"https://robohash.org/architectoeumeum.png?size=500x500&set=set1"
    },
    {
      "id":7,
      "first_name":"Jerri",
      "last_name":"Kroger",
      "email":"jkroger6@mlb.com",
      "gender":"Male",
      "avatar":"https://robohash.org/maximeillovoluptate.jpg?size=500x500&set=set1"
    },
    {
      "id":8,
      "first_name":"Merrily",
      "last_name":"Sumnall",
      "email":"msumnall7@4shared.com",
      "gender":"Female",
      "avatar":"https://robohash.org/quosincidunterror.bmp?size=500x500&set=set1"
    },
    {
      "id":9,
      "first_name":"Mateo",
      "last_name":"Knevett",
      "email":"mknevett8@eepurl.com",
      "gender":"Male",
      "avatar":"https://robohash.org/culpanobiscorporis.bmp?size=500x500&set=set1"
    },
    {
      "id":10,
      "first_name":"Moyna",
      "last_name":"Mabbot",
      "email":"mmabbot9@bloglovin.com",
      "gender":"Female",
      "avatar":"https://robohash.org/utsuntipsa.bmp?size=500x500&set=set1"
    },
    {
      "id":11,
      "first_name":"Eileen",
      "last_name":"Snalom",
      "email":"esnaloma@dailymotion.com",
      "gender":"Female",
      "avatar":"https://robohash.org/animimolestiasnecessitatibus.bmp?size=500x500&set=set1"
    },
    {
      "id":12,
      "first_name":"Alisander",
      "last_name":"Hartzogs",
      "email":"ahartzogsb@addthis.com",
      "gender":"Male",
      "avatar":"https://robohash.org/velitullamet.png?size=500x500&set=set1"
    },
    {
      "id":13,
      "first_name":"Jenelle",
      "last_name":"Hutchcraft",
      "email":"jhutchcraftc@g.co",
      "gender":"Female",
      "avatar":"https://robohash.org/delectusexplicaboerror.jpg?size=500x500&set=set1"
    },
    {
      "id":14,
      "first_name":"Trude",
      "last_name":"Taffs",
      "email":"ttaffsd@cafepress.com",
      "gender":"Female",
      "avatar":"https://robohash.org/recusandaedeseruntnesciunt.jpg?size=500x500&set=set1"
    },
    {
      "id":15,
      "first_name":"Carney",
      "last_name":"Bidmead",
      "email":"cbidmeade@biblegateway.com",
      "gender":"Male",
      "avatar":"https://robohash.org/remquidemquod.jpg?size=500x500&set=set1"
    },
    {
      "id":16,
      "first_name":"Adelice",
      "last_name":"Hoyland",
      "email":"ahoylandf@oracle.com",
      "gender":"Female",
      "avatar":"https://robohash.org/inciduntperferendisnulla.jpg?size=500x500&set=set1"
    },
    {
      "id":17,
      "first_name":"Mortimer",
      "last_name":"Abelson",
      "email":"mabelsong@ask.com",
      "gender":"Male",
      "avatar":"https://robohash.org/explicabosintomnis.bmp?size=500x500&set=set1"
    },
    {
      "id":18,
      "first_name":"Moise",
      "last_name":"Rois",
      "email":"mroish@sogou.com",
      "gender":"Male",
      "avatar":"https://robohash.org/totamnonodio.bmp?size=500x500&set=set1"
    },
    {
      "id":19,
      "first_name":"Jenine",
      "last_name":"Doodson",
      "email":"jdoodsoni@opera.com",
      "gender":"Female",
      "avatar":"https://robohash.org/optioiustorepudiandae.bmp?size=500x500&set=set1"
    },
    {
      "id":20,
      "first_name":"Joel",
      "last_name":"Tummons",
      "email":"jtummonsj@blogspot.com",
      "gender":"Male",
      "avatar":"https://robohash.org/suntdelectusnihil.jpg?size=500x500&set=set1"
    }
  ];

  constructor() { }

  public getUsers(): User[] {
    return this.users;
  }

  public getUser(id: number): User {
    const userIndex = this.users.findIndex(user => user.id == id);
    return this.users[userIndex];
  }

  public findUsers(text: string): User[] {
    text = text.toLowerCase();
    let usersArr: User[] = [];

    for (let i = 0; i < this.users.length; i++) {
      let firstNameUser = this.users[i].first_name.toLowerCase();
      let lastNameUser = this.users[i].last_name.toLowerCase();

      if (firstNameUser.indexOf(text) >= 0 || lastNameUser.indexOf(text) >= 0) {
        usersArr.push(this.users[i]);
      }
    }

    return usersArr;
  }
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  avatar: string;
}

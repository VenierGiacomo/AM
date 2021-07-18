import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { isNgTemplate } from '@angular/compiler';

export class UserCache{
  constructor(
              public id: number,
              public name: string,
              public img: string,
              public wallet: number,
              ){}
  }
const USERS_KEY = 'my-users'
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  addUserChache(user: UserCache): Promise<any>{
    return this.storage.get(USERS_KEY).then((users:UserCache[])=>{
      if (users.length === 0){
        users.push(user)
        return this.storage.set(USERS_KEY,[users]);
      }
      else{
        return this.storage.set(USERS_KEY,[user]);
      }
    })
  }


  getUserChache(): Promise<UserCache> {
    return this.storage.get(USERS_KEY);
  }

  updateUserChache(user: UserCache): Promise<any>{
    return this.storage.get(USERS_KEY).then((users: UserCache[])=> {
      if(!users || users.length === 0){
        return null
      }
      let newUserChaches: UserCache[] = []
      for (let i of users){
        if (i.id === user.id){
          newUserChaches.push(user)
        } else {
          newUserChaches.push(i)
        }
      }
      return this.storage.set(USERS_KEY, newUserChaches);
    });
  }

  deleteUserChache(id: number): Promise<UserCache> {
    return this.storage.get(USERS_KEY).then((users: UserCache[])=> {
      if(!users || users.length === 0){
        return null
      }
    let toKeep: UserCache[] = []
    for(let i of users){
      if (i.id !== id){
        toKeep.push(i)
      }
    }
    return this.storage.set(USERS_KEY, toKeep);
});
}

}

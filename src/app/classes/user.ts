import JwtDecode from 'jwt-decode'

export class User {
    name: string;
    email: string;
    constructor({name, email}){
      this.name = name
      this.email = email
    }
    static from(token){
      try {
        let jwt = JwtDecode(token)
        var current_time = new Date().getTime() / 1000;
        if (current_time > jwt.exp) return null
        else return new User(jwt)
      } catch (_) {
        return null
      }
    }
}
import JwtDecode from 'jwt-decode'

export class User {
  username: string;
  email: string;
  // constructor({username, email}){
  //   this.username = username
  //   this.username = email
  // }
  static from(token) {
    try {
      let jwt = JwtDecode(token)
      var current_time = new Date().getTime() / 1000;
      if (current_time > jwt.exp) return null
      else {
        let user = new User()
        user.username = jwt.name
        user.email = jwt.email
        return user
      }
    } catch (_) {
      return null
    }
  }
}
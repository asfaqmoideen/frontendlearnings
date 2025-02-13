export class UsersAPIService{

    private baseURL : string = "https://dummyjson.com/users";
    
      async tryFetchingData(url :string) {
        try {
          const response = await fetch(url, { method: "GET" });
          
          if (!response.ok) {
            throw new Error("Unable to Fetch");
          }
          return response.json();
        } catch (e) {
          console.log(e);
        }
      }
    
      async getAllUsers() {
        return await this.tryFetchingData(`${this.baseURL}`);
      }
    
      async sortUsers(value :number, order :number) {
        return await this.tryFetchingData(
          `${this.baseURL}?sortBy=${value}&order=${order}`
        );
      }

      async filterUsers(filter :number, value :number) {
        return await this.tryFetchingData(
          `${this.baseURL}/filter?key=${filter}&value=${value}`
        );
      }
    
      async searchUser(user :number) {
        return this.tryFetchingData(`${this.baseURL}/search?q=${user}`);
      }
    
      async getUsers(limit :number, skip:number){
        return await this.tryFetchingData(`${this.baseURL}?limit=${limit}&skip=${skip}`)
      }
}
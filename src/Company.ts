import faker from "faker"
export class Company {
    //telling TS what its GOING to be not what IT IS. so location : not location = ***
    companyName: string;
    catchPhrase: string;
    location: {
      lat: number;
      lng: number;
    };
  
    constructor() {
      this.companyName = faker.company.companyName();
      this.catchPhrase = faker.company.catchPhraseNoun();
      this.location = {
        lat: parseFloat(faker.address.latitude()),
        lng: parseFloat(faker.address.longitude()),
      };
    }
   
  }
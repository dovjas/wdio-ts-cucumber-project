import { IWorldOptions, setWorldConstructor } from "@wdio/cucumber-framework";

export interface TestUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export class CustomWorld{
    user?:TestUser;
    constructor(){};
}

setWorldConstructor(CustomWorld);
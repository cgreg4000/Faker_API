const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

class User {
    constructor() {
        this.id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/users/new", (req, res) => {
    let fakeUser = new User();
    res.json({fakeUser})
})

app.get("/api/companies/new", (req, res) => {
    let fakeCompany = new Company();
    res.json({fakeCompany})
})

app.get("/api/user/company", (req, res) => {
    let fakeUser = new User();
    let fakeCompany = new Company();
    res.json({fakeUser, fakeCompany});
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );
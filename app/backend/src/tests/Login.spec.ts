import * as sinon from "sinon";
import * as chai from "chai";
import chaiHttp = require("chai-http");

import { app } from "../app";
/* import Example from '../database/models/ExampleModel';
 */
import { Response } from "superagent";
import Users from "../database/models/UsersModel";

chai.use(chaiHttp);

const { expect } = chai;

describe("Login", () => {
  /**
   * Exemplo do uso de stubs com tipos
   */

  let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });

  describe("Validate fields", () => {
    describe("validate email", () => {
      it("validate if email is a string", async () => {
        chaiHttpResponse = await chai.request(app).post("/login").send({
          email: 4,
          password: "teste123",
        });
        expect(chaiHttpResponse.status).to.be.eq(400);
        expect(chaiHttpResponse.body.message).to.be.eq(
          "Incorrect email or password"
        );
      });
    });
    describe("validate password", () => {
      expect(true).to.be.eq(true);
    });
  });
  describe("Should be a valiable login", () => {

    const UserMocked = {
      id: 1,
      username: "Matheus",
      role: "admin",
      email: "matheus.teste@teste.com",
      password: "$2a$05$uk5bl1gPfaXQcr4lGi6ggudF0qjt.Ij4jpa212hVHEQ.idWgZUihS",
    } as unknown as Users;


    before(async () => {
      sinon.stub(Users, "findOne").resolves(UserMocked);
    });

    after(()=>{
         (Users.findOne as sinon.SinonStub).restore();
       });
    it("Response", async() => {
      chaiHttpResponse = await chai.request(app).post("/login").send({
        email: "matheus.teste@teste.com",
        password: "teste123",
      });
      expect(chaiHttpResponse.status).to.be.eq(200);

      expect(chaiHttpResponse.body.user.id).to.be.eq(1);

      expect(chaiHttpResponse.body.user.username).to.be.eq('Matheus');

      expect(chaiHttpResponse.body.user.role).to.be.eq('admin');

      expect(chaiHttpResponse.body.user.email).to.be.eq('matheus.teste@teste.com');

      expect(chaiHttpResponse.body.token).to.exist
    
    });
  });
});

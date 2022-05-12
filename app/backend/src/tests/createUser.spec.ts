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

describe("CreateUser", () => {
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
    describe("validate username", () => {
      it("validate if username is a string", async () => {
        chaiHttpResponse = await chai.request(app).post("/users").send({
            username: 4,
            role: 'admin',
            email: 'matheus.test@teste.com',
            password: 'teste123',
        });
        expect(chaiHttpResponse.status).to.be.eq(401);
        expect(chaiHttpResponse.body.message).to.be.eq(
          "Username must be a string"
        );
      });
    });
    describe("validate password", () => {
        it('Validate if the password is a string',  async() => {

            chaiHttpResponse = await chai.request(app).post("/users").send({
                username: 'Matheus',
                role: 'admin',
                email: 'matheus.test@teste.com',
                password: 2,
            });
            expect(chaiHttpResponse.status).to.be.eq(401);
            expect(chaiHttpResponse.body.message).to.be.eq(
              "Password must be a string"
            );
        })
      });
      describe("validate role", () => {
        it('Validate if role is a string',  async () => {

            chaiHttpResponse = await chai.request(app).post("/users").send({
                username: 'Matheus',
                role: 1,
                email: 'matheus.test@teste.com',
                password: 'teste123',
            });
            expect(chaiHttpResponse.status).to.be.eq(401);
            expect(chaiHttpResponse.body.message).to.be.eq(
              "Role must be a string"
            );
        })
      });
      describe("validate email", () => {
        it('Validate if the email is a string',  async () => {

            chaiHttpResponse = await chai.request(app).post("/users").send({
                username: 'Matheus',
                role: 'admin',
                email: 1,
                password: 'teste123',
            });
            expect(chaiHttpResponse.status).to.be.eq(401);
            expect(chaiHttpResponse.body.message).to.be.eq(
              "Email must be a string"
            );
        })
        it('Validate if email is an email', async () => {
            chaiHttpResponse = await chai.request(app).post("/users").send({
                username: 'Matheus',
                role: 'admin',
                email: 'notAnEmail',
                password: 'teste123',
            });
            expect(chaiHttpResponse.status).to.be.eq(401);
            expect(chaiHttpResponse.body.message).to.be.eq(
              "Email inválido"
            );
        })
      });
    });
  });

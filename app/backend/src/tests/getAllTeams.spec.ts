import * as sinon from "sinon";
import * as chai from "chai";
import chaiHttp = require("chai-http");

import { app } from "../app";
/* import Example from '../database/models/ExampleModel';
 */
import { Response } from "superagent";
import Users from "../database/models/UsersModel";
import Teams from "../database/models/TeamsModel";

chai.use(chaiHttp);

const { expect } = chai;

describe("Teams", () => {
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

    const mockResult = [
        {
            "id": 1,
            "teamName": "Avaí/Kindermann"
        },
        {
            "id": 2,
            "teamName": "Bahia"
        },
        {
            "id": 3,
            "teamName": "Botafogo"
        },
        {
            "id": 4,
            "teamName": "Corinthians"
        },
        {
            "id": 5,
            "teamName": "Cruzeiro"
        },
        {
            "id": 6,
            "teamName": "Ferroviária"
        },
        {
            "id": 7,
            "teamName": "Flamengo"
        },
        {
            "id": 8,
            "teamName": "Grêmio"
        },
        {
            "id": 9,
            "teamName": "Internacional"
        },
        {
            "id": 10,
            "teamName": "Minas Brasília"
        },
        {
            "id": 11,
            "teamName": "Napoli-SC"
        },
        {
            "id": 12,
            "teamName": "Palmeiras"
        },
        {
            "id": 13,
            "teamName": "Real Brasília"
        },
        {
            "id": 14,
            "teamName": "Santos"
        },
        {
            "id": 15,
            "teamName": "São José-SP"
        },
        {
            "id": 16,
            "teamName": "São Paulo"
        }
    ]

  describe("GetAll Teams", () => {
       before(async () => {
     sinon
       .stub(Teams, "findAll")
       .resolves([
         ...mockResult
       ] as Teams[]);
   });
    describe("validate the return of the function", () => {
      it("validate if its an array with expected length", async () => {
        chaiHttpResponse = await chai.request(app).get("/teams")
        expect(chaiHttpResponse.status).to.be.eq(200);
        expect(chaiHttpResponse.body).to.be.eq(mockResult);
        expect(chaiHttpResponse.body.length).to.be.eq(16);

      });
    });
  });
});

const chai = require('chai')
const chaiHTTP = require('chai-http')
const server = require("./server")

const expect =chai.expect;
chai.use(chaiHTTP)

describe("Books API Tests", () => {

    it ("should POST a book", (done ) => {
        const body  = {
            "id": 1,
            "title": "Mish",
            "author": "Kosio"
          }
        chai.request(server)
        .post("/books")
        .send(body)
        .end((err, resp) => {
            if(err) return done(err);

            expect(resp.statusCode, "Status code").to.be.equal(201)
            expect(resp.body).to.be.a("object")
            expect(resp.body.id).to.be.equal(body.id)
            expect(resp.body.title, "title property").to.be.equal(body.title)
            expect(resp.body.id).to.be.equal(body.id)
            done()
        })
    })
})
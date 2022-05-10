import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
  return (
    <div className="mt-5 container">
      <div className="row mt-5">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                1. Difference between javascript and nodejs?
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong> 1. NodeJS :</strong>
                <p>
                  NodeJS is a cross-platform and opensource Javascript runtime
                  environment that allows the javascript to be run on the
                  server-side. Nodejs allows Javascript code to run outside the
                  browser. Nodejs comes with a lot of modules and mostly used in
                  web development.
                </p>
                <strong>2. JavaScript : </strong>
                <p>
                  Javascript is a Scripting language. It is mostly abbreviated
                  as JS. It can be said that Javascript is the updated version
                  of the ECMA script. Javascript is a high-level programming
                  language that uses the concept of Oops but it is based on
                  prototype inheritance.
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                2. When should you use nodejs and when should you use mongodb?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>When should we use Nodejs</strong>
                <br />
                <p>
                  It is Any project needs a programming environment and a
                  runtime library that offers you basic programming
                  tools/support and can compile and/or interpret your code.
                  Nodejs is such as tool for the Javascript programming
                  language. There are other similar tools for other languages
                  such as Python, Java, PHP, C#, C++, Go, etc... <br />
                  So, if you want to write some kind of stand-alone program or
                  server in Javascript, then you can use nodejs for it.
                </p>
                <strong>When should we use MongoDB</strong>
                <br />
                <p>
                  If your application needs the ability to persistently store
                  data in a way that you can efficiently query or update it
                  later, then you would typically use some form of database.
                  There are dozens of popular databases. MongoDB is one such
                  database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres
                  are examples of other databases. Different databases have
                  different strengths (things they are best at) and different
                  ways of using them so it's a whole different question to
                  choose the right/best database for what you're doing.
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                3. Differences between sql and nosql databases?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div className="row">
                  <div className="col-6">
                    <strong>SQL</strong>
                    <br />
                    <br />
                    <p>
                      1. RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)
                      <br />
                      <br />
                      2. These databases have fixed or static or predefined
                      schema
                      <br />
                      <br />
                      3. These databases are not suited for hierarchical data
                      storage.
                      <br />
                      <br />
                      4. These databases are best suited for complex queries
                      <br />
                      <br />
                      5. Vertically Scalable
                      <br />
                      <br />
                      6. Follows ACID property
                    </p>
                  </div>
                  <div className="col-6">
                    <strong> NoSQL</strong>
                    <br />
                    <br />
                    <p>
                      1. Non-relational or distributed database system.
                      <br />
                      <br />
                      2. They have dynamic schema schema
                      <br />
                      <br />
                      3. These databases are best suited for hierarchical data
                      storage.
                      <br />
                      <br />
                      4. These databases are not so good for complex queries
                      <br />
                      <br />
                      5. Horizontally scalable
                      <br />
                      <br />
                      6. Follows CAP(consistency, availability, partition
                      tolerance)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                4. What is the purpose of jwt and how does it work?
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>What is JSON Web Token</strong>
                <br />
                <br />
                <p>
                  JSON Web Token (JWT) is an open standard that defines a
                  compact and self-contained way for securely transmitting
                  information between parties as a JSON object. This information
                  can be verified and trusted because it is digitally signed.
                </p>
                <strong>How do JSON Web Tokens work</strong>
                <br />
                <br />
                <p>
                  In authentication, when the user successfully logs in using
                  their credentials, a JSON Web Token will be returned. Since
                  tokens are credentials, great care must be taken to prevent
                  security issues. In general, you should not keep tokens longer
                  than required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

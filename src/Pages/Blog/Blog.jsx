import React from 'react';

const BlogPage = () => {

  const blogPosts = [
    {
      id: 1,
      title: 'question 1',
      question: 'What is an access token and refresh token? How do they work and where should we store them on the client-side?',
      answer: 'An access token is a shortlived token that proves a clients identity and grants permission to access protected resources on a server. It is sent with each request to authenticate and authorize the client A refresh token is a long-lived token used to obtain a new access token once the current one expires. It allows the client to request a new access token without requiring the user to log in again. On the client-side, access and refresh tokens can be stored securely in cookies or local storage, allowing the client to send them with each request for authentication and authorization.'
    },
    {
      id: 2,
      title: 'question 2',
      question: 'This is the content of post 2.',
      answer: 'Jane Smith',
    },
    {
      id: 3,
      title: 'question 3',
      question: 'This is the content of post 3.',
      answer: ``,
    },
  ];

  return (
    <section>
        <div className="container mx-auto p-4">
         <h1 className="text-4xl font-bold py-20 text-center mb-8">Blog</h1>

      <div className='grid md:grid-cols-2 grid-cols-1 gap-20'>

        <div className="bg-white rounded-lg shadow-lg p-6 py-20 flex flex-col space-y-4">
            <h2 className='font-bold text-xl'>Questions 01 </h2>
            <p className='text-xl font-semibold pt-10'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
            <p className='text-xl'>An access token is a short lived token that proves a clients identity and grants permission to access protected resources on a server. It is sent with each request to authenticate and authorize the client A refresh token is a long-lived token used to obtain a new access token once the current one expires. It allows the client to request a new access token without requiring the user to log in again. On the client-side, access and refresh tokens can be stored securely in cookies or local storage, allowing the client to send them with each request for authentication and authorization.</p>
        </div>


        <div className="bg-white rounded-lg shadow-lg p-6 py-20 flex flex-col space-y-4">
            <h2 className='font-bold text-xl'>Questions 02</h2>
            <p className='text-xl font-semibold pt-10'>What is express js? What is Nest JS?</p>
            <p className='text-xl'>Express.js is a lightweight and flexible web application framework for Node.js. It simplifies the process of building web applications and APIs by providing a minimalistic and unopinionated structure. Express.js allows developers to define routes, handle requests, and manage middleware to build server-side applications easily. It is known for its simplicity, extensibility, and wide adoption within the Node.js community.
            <br /><br />

            NestJS is a progressive and opinionated Node.js framework built on top of Express.js. It provides an out-of-the-box application architecture and a set of robust features for building scalable and maintainable server-side applications. NestJS follows the principles of modularity, dependency injection, and uses TypeScript as its primary language. It combines elements from different frameworks and programming paradigms to offer a structured and intuitive development experience. NestJS is known for its strong typing, powerful module system, and support for building microservices and scalable server-side applications.</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 py-20 flex flex-col space-y-4">
            <h2 className='font-bold text-xl'>Questions 03 </h2>
            <p className='text-xl font-semibold pt-10'>Compare SQL and NoSQL databases ?</p>
            <p className='text-xl'>SQL (Structured Query Language) and NoSQL (Not only SQL) databases are two different types of database management systems with distinct characteristics:
            

            <br /><br />
            SQL Databases:
            <br /><br />
            - SQL databases are based on a structured and predefined schema. 
            They use tables with rows and columns to store and organize data.
            <br />
            - Data in SQL databases must adhere to the predefined schema, ensuring data consistency and integrity.
<br />
            - SQL databases support powerful querying capabilities using the SQL language.
            They are suitable for complex relationships and structured data.
            <br />
            -SQL databases provide ACID (Atomicity, Consistency, Isolation, Durability) properties, ensuring data reliability and transactional integrity.

<br /><br />

            NoSQL Databases:
            <br />
            <br />

            - NoSQL databases are designed for flexible and dynamic data structures.
            They do not enforce a rigid schema, allowing for schema-less or dynamic schema designs.
            <br />
            - NoSQL databases store data in various formats, such as key-value pairs, documents, or graphs. <br />
            -They can handle large amounts of unstructured or semi-structured data.
            NoSQL databases provide horizontal scalability, allowing for easy distribution across multiple servers or clusters.
            <br />
            They are well-suited for handling high-velocity data and supporting agile development.
            <br />
            NoSQL databases prioritize scalability and performance over strict consistency (ACID properties), offering eventual consistency instead.</p>
            </div>


            <div className="bg-white rounded-lg shadow-lg p-6 py-20 flex flex-col  space-y-4">
            <h2 className='font-bold text-xl'>Questions 04 </h2>
            <p className='text-xl font-semibold pt-10'>What is MongoDB aggregate and how does it work  ?</p>
            <p className='text-xl'>
            MongoDB's aggregate is a powerful method for performing advanced data aggregation operations within a MongoDB database. It allows you to process and transform data using a pipeline of stages.
            <br />

            The aggregate method takes an array of stages as input, and each stage represents a specific operation to be performed on the data. These stages can include filtering, grouping, sorting, projecting, joining, and performing mathematical or statistical calculations on the data.
            <br />

            Each stage in the pipeline modifies or transforms the data in some way, and the output of one stage serves as the input for the next stage. This allows you to build complex data manipulation workflows to extract valuable insights or perform complex computations on your data.

            <br /> <br />
            The stages in an aggregate pipeline can include:
            <br />
            $match: Filters the documents based on specified criteria.
            $group: Groups the documents by a specified field and performs aggregate calculations on grouped data.
            $sort: Sorts the documents based on specified fields.
            $project: Selects specific fields to include or exclude from the result.
            $lookup: Performs a left outer join with another collection to combine data from multiple collections.
            $unwind: Deconstructs an array field into multiple documents, creating a separate document for each array element.
            These are just a few examples of the available stages. MongoDB's aggregate framework offers a wide range of operators and stages to perform complex data manipulations and aggregations.
            
            <br />

            </p>
        </div>



      </div>
    </div>
    </section>
  );
};

export default BlogPage;

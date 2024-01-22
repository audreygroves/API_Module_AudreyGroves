# Hackernews Clone API

## Introduction
This is a simple GraphQL API for a Hackernews Clone built using Apollo Server and Prisma. The API allows you to perform basic operations such as querying information, fetching a feed of links, posting new links, updating existing links, and deleting links.

## How to Run the API

1. **Install Dependencies:**
   - Before running the code, ensure that you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
   - In the project directory, run the following command to install the necessary dependencies:

     ```bash
     npm install
     ```

2. **Set Up Database:**
   - This API uses Prisma as an ORM to interact with a database. Make sure you have a database configured, and update the connection details in the `schema.prisma` file.

3. **Run the Server:**
   - Once the dependencies are installed and the database is set up, run the following command to start the Apollo Server:

     ```bash
     node index.js
     ```

4. **Access the GraphQL Playground:**
   - Open your web browser and go to [http://localhost:4000](http://localhost:4000) to access the GraphQL Playground.
   - Here, you can interact with the API using the provided GraphQL queries and mutations.

5. **Query Information:**
   - To get information about the API, execute the following query in the playground:

     ```graphql
     query {
       info
     }
     ```

6. **Fetch Feed:**
   - To fetch the feed of links, use the following query:

     ```graphql
     query {
       feed {
         id
         url
         description
       }
     }
     ```

7. **Post a New Link:**
   - To post a new link, execute the following mutation:

     ```graphql
     mutation {
       post(url: "your_url", description: "your_description") {
         id
         url
         description
       }
     }
     ```

8. **Update a Link:**
   - To update an existing link, use the following mutation:

     ```graphql
     mutation {
       updateLink(id: your_link_id, url: "new_url", description: "new_description") {
         id
         url
         description
       }
     }
     ```

9. **Delete a Link:**
   - To delete a link, execute the following mutation:

     ```graphql
     mutation {
       deleteLink(id: your_link_id) {
         id
         url
         description
       }
     }
     ```

10. **Explore and Experiment:**
    - Feel free to explore the GraphQL Playground, execute queries, and interact with the API.

## Important Note
- Ensure that your database connection details are correctly configured in the `schema.prisma` file.
- This API is a simplified version of a Hackernews Clone for educational and demonstration purposes.

Feel free to modify the code or incorporate it into your projects as needed. If you encounter any issues, check the console for error messages. Enjoy working with your Hackernews Clone API!

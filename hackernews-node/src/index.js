const { ApolloServer } = require('apollo-server');

let links = [{
    id:'link-0',
    url: 'www.howtographql.com',
    description:'Fullstack tutorial for GraphQL'
}]

// 2
const resolvers = {
    Query: {
      info: () => `This is the API of a Hackernews Clone`,
      feed: () => links,
      link: (parent, args) => {
        const linkIndex = links.findIndex((link) => link.id === args.id)
        return links[linkIndex];
      }
    },
    Mutation: {
      // 2
      post: (parent, args) => {
    
      let idCount = links.length
  
         const link = {
          id: `link-${idCount++}`,
          description: args.description,
          url: args.url,
        }
        links.push(link)
        return link
      }, 
      updateLink: (parent, args) => {
        const linkIndex = links.findIndex((link) => link.id === args.id)
        if (args.url)
        {
            links[linkIndex].url = args.url;
        }
        if (args.description){
            links[linkIndex].description = args.description;
        }
        return links[linkIndex];
      }, 
      deleteLink: (parent, args) => {
        const linkIndex = links.findIndex((link) => link.id === args.id);
        const deletedLink = links.splice(linkIndex,1)[0];
        return deletedLink
      }
    },
  }

// 3

const fs = require('fs');
const path = require('path');

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
  ),
  resolvers,
})

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );
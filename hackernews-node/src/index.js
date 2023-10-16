const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');


const prisma = new PrismaClient();
const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join (__dirname, 'schema.graphql'), 
    'utf8'
  ),
  resolvers,
  context:{
    prisma,
  }
})

const resolvers = {
    Query: {
      info: () => `This is the API of a Hackernews Clone`,
      feed: async (parent, args, context) => {
        return context.prisma.link.findMany()
      },
    },
    Mutation: {
      // 2
      post: (parent, args, context, info) => {
         const newlink = context.prisma.link.create({
          data: 
          {
            url: args.url,
            description: args.description
          }, 
         })
        return newlink
      }, 

      updateLink: (parent, args, context) => {
        return context.prisma.link.update({
          where: {id: args.id}, 
          data: {
            url: args.url || undefined,
            description : args.description || undefined
          },
        });
      }, 
  
      deleteLink: (parent, args, context) => {
        const deletedLink = context.prisma.link.delete({
          where: {id: args.id}
        })
        return deletedLink
      }
    },
  }

// 3

const fs = require('fs');
const path = require('path');


server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );
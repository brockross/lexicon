# Notes

Running notes for the project.

## TODO

- ~~set up a basic working apollo server using hardcoded json data~~
  - ~~test with playground~~
- ~~set up schema and query resolver for actual api~~
- ~~get mongo connection running with mongoose~~
  - add schema to db and enforce on db write
  - ~~not using mongoose for now; feels like overkill~~
  - ~~atlas has a "free forever" option; I should just use that so I don't have to worry about what machine the server is running from~~
- ~~get gql working with live data~~
  - ~~add 1-2 documents to db~~
  - ~~set up query resolver to actually return data~~
  - ~~test it~~
- add mutation to server
- figure out where to run it so I can add stuff from wherever (would my pi be able to handle it?)
  - since the db is remote, i could just add a basic frontend for mutations (pretty much just a form), and run it locally on whatever computer I want
- figure out how to handle linked terms

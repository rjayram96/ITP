# Prerequisites

1. Mongo server 2.+ Running in default port 27017, 
able to locally bind. 
2. JDK 1.8
3. Maven 3.+

# Build instructions

## Running with the IDE

Import the project to the favorite IDE, and run the main class 'SampleMongoApplication'

## Testing
Once server is started , available REST end points can be found by calling
curl -X GET 'http://127.0.0.1:8079'
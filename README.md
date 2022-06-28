# Short URL Generator 
** **
# Packages (Node.js, Express, MongoDB, Config)

# Video of coding Challenge -
```
https://www.youtube.com/watch?v=rM5cPhhYFbg
```
## Installation

Use the package manager [npm](https://www.npmjs.com) to install packages.

```npm install packages
npm install 
```
### run application(server)
```
npm run dev
```
### config dir
```
Add own MongoDB connection string in default.json
```

#### Questions to answer?
```
1) How did you approach the problem?
2) Did you run into issues? How did you work through them?
3) Is there anything you would do differently, knowing what you know now?
4) Is there anything you would add to the code to improve or extend it?
5) What did you learn from writing this code?
```

##### Answers to Questions ^

1) Many different ways that this could have been done, though personal preference in using an MVC design pattern, where routes would generate responses from requests to MongoDB. Taking self-taught knowledge from previous projects in React and Node.js, I felt that this was the technology stack to go with. With research and understanding has allowed me to complete a working model with a video to go with. 
- I took a methodology of iteration based on a procedural way of thinking. Three routes, one to get all data from MongoDB Schema, another to post a dataset based on the Schema and finally one to find a specific long url based on the short generated url. 
-  The video attached has given me the ability to reflect and improve, though as this was my first coding challenge and I do believe that I have done well for the first attempt (Took my a few tries to get the video focus with iterative staging on GitHub). With more planning and practice I will be able to write clean code consistently while efficiently. 
 
2) Two major issues (bugs) I found while coding;
- The first was where new longURLS would generate the same generatedURL. (Solution) was to add in <Schema: short> Unique = true, while also making a anonymous function to call nanoid instead of creating a new variable that calls nanoid.
- The second was when sending a longURL into the schema the generatedURL would refer back to the very first inserted longURL. Meaning that if I added 10 new longURL's each generated (actual random) urls would still refer back to the initial first longURL. (Solution) in the /:generatedURL i didnt request the params from short but instead requested from generatedURL. Once i changed generatedURL: req.params.short to -> short: req.params.short each generatedURL would refer to their corresponding longURL

3) I would change the way the schema is initialised in the code, by creating a new dataset by calling
```
(example) var generatedURL = new URL ({
long: String
short: String
clicks: String
dateCreated: String
)}
```
but this would be in the route directory that i would create if I had another go at this. Preferably in the route that posts a new set based on the schema. But I would have to change the way the schema is done.
```
(Example) 
const urlSchema = mongoose.models
module.exports = urlSchema
```
then i can call a new schema based on this and append a generated code to it. -> This would solve having the nanoid function inside the schema itself.

I would also like to try to create a command prompt request api, without a interface. This would be good to do as it would give me more understanding of how api requests and callback functions work, then I could think how to implement this in a backend to work with a front end.

4) I would like to work on this some more by adding additional routes to be able to delete specific rows. This can be done by either added a new column to a table or for each data in table create action button that would refer to the _id in mongoDB for a specific entry.
```
(Example) create a route
app.get(/delete, (req,res) => {
const generatedUrl = GeneratedUrl.findOneAndDelete({
_id: req.params._id
},console.log("deleted")

}
- something like this. but the idea is there
```

-- Also i would like to implement some regex to ensure that the url that is going into the database is one that follows correct url standards. But this is something that i would need to learn.

5) Many things, I have learned the premise behind async await. Patience and how to handle a challenge. 
Though if i were to do this again i would definitely plan this better. However if i had the opportunity to work along side a software engineer i would be able to understand best practices that are in use within a modern technical environment. 
I have learned how to add methods within a Schema and understood the syntax of both javascript and the flow of data. Though this could always be improved and I am willing to do so in your tech stack given appropriate time.

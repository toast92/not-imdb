## Step one: creating a basic design

The first thing I did after getting the assignment was to create a basic design in Figma. It was mostly so that I could better visualize what I had to do. It was very simple and it guided me through the assignment.

## Step two: initial setup

I decided to go for the VueJS quick start as it allowed me to set up the project fast and easily select whatever optional features I wanted. This helped me to easily add Vue router, Pinia and Vitest.
I then proceeded to remove some of the boilerplate code to get a clean start.

## Step three: displaying tv shows based on genres

For this part I created a tvShows store to fetch the data from the API with the `getTvShows()` function and then filter it based on genre with the `getTvShowsByGenre` getter. I then proceeded to hardcode the genres in the home page and display the list of tv shows based on that. What I wanted was to go from simple to difficult. First make sure I can display the data, then think about creating components.

Now that I was seeing the data neatly on the screen, I started on the next step, which was sorting the tv-shows based on rating. I decided to create 2 more getters: `compareRatings()` which simply decides which of 2 ratings is the highest, and `sortTvShowsByRating()`, which takes the tv shows by genre and sorts them from highest to lowest rating. I decided to add these functions as getters in the store instead of inside the view simply because I thought it was cleaner, and if I needed to reuse them it would be easy to just import the store.

## Step 4: creating components

Now that the requirement was met, it was time to improve my code. I decided to create a `TvShowCard` component that would display a card containing an image of the show, the title and rating. I replaced all my `<li>`s with my new card component and it was looking better, but still quite repetitive. I decided I would definetly need a loop, but first I wanted to create a container for my cards that I named `TvShowCarousel`. It was a very simple component that only took the `genre` as a prop and displayed it as a title and inside I placed my card components.

At this point it was getting ridiculous, I had to start looping. I hardcoded a `genres` array and based on that did a double loop for my carousels and the cards within them. The page was so much cleaner, and there was no repetitive code!

## Step 5: transforming data to suit my needs

Now I had components, I was looping, everything was fine, except for the fact that I was still hardcoding the genres. This was a tricky one. How could I nicely get a list of genres without too much hassle? And what if I went a step further and actually grouped the tv shows based on it in a new object?
I have to admit, this was one of the hardest parts of the assignment for me, as I had never done something similar to this before. I would have to loop over all the shows and then loop over the array of genres each of them contained. So I did just that, but first I added a `tvShowsByGenre` state to contain my transformed data. The initial value was an empty object.

What I did in my transformer function was to loop over all the tv shows I was getting, then inside that loop go over all the genres they had and then check if my new `tvShowsByGenre` object already had the genre as a key. If it had it, it would move on to push the tv show into an array assigned to that object key. Otherwise, it would create the key and assign an empty array to it. After transforming my data, I now had an object that looked something like this:

`tvShowsByGenre = {
    Drama: [
        {
            name: "Breaking Bad",
            runtime: 60,
        },
        {
            name: "Better Call Saul",
            runtime: 59
        }
    ],
    Comedy: [
        {
            name: "The office",
            runtime: 22,
        },
        {
            name: "Brooklyn 99",
            runtime: 27
        }
    ]
}`

Note: I oversimplified the above structure as there was much more data per tv show. So now I had an object that contained all the tv shows organized by genre, yay!

## Step 6: Getting a tv show to display on the details page

I thought the easiest way to get a tv show's details would be to call this endpoint: `https://api.tvmaze.com/shows/id` while getting the id from the route params, so that's what I did. I implemented a `getTvShowById()` function in my store where I fetch the data from the api and assign it to my `tvShowDetails` state.

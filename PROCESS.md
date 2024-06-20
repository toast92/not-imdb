## Step 1: creating a basic design

The first thing I did after getting the assignment was to create a basic design in Figma. It was mostly so that I could better visualize what I had to do. It was very simple and it guided me through the assignment.

## Step 2: initial setup

I decided to go for the VueJS quick start as it allowed me to set up the project fast and easily select whatever optional features I wanted. This helped me to easily add Vue router, Pinia and Vitest.
I then proceeded to remove some of the boilerplate code to get a clean start.

## Step 3: displaying tv shows based on genres

For this part I created a tvShows store to fetch the data from the API with the `getTvShows()` function and then filter it based on genre with the `getTvShowsByGenre` getter. I then proceeded to hardcode the genres in the home page and display the list of tv shows based on that. What I wanted was to go from simple to difficult. First make sure I can display the data, then think about creating components.

Now that I was seeing the data neatly on the screen, I started on the next step, which was sorting the tv-shows based on rating. I decided to create 2 more getters: `compareRatings()` which simply decides which of 2 ratings is the highest, and `sortTvShowsByRating()`, which takes the tv shows by genre and sorts them from highest to lowest rating. I decided to add these functions as getters in the store instead of inside the view simply because I thought it was cleaner, and if I needed to reuse them it would be easy to just import the store.

## Step 4: creating components

Now that the requirement was met, it was time to improve my code. I decided to create a `TvShowCard` component that would display a card containing an image of the show, the title and rating. I replaced all my `<li>`s with my new card component and it was looking better, but still quite repetitive. I decided I would definetly need a loop, but first I wanted to create a container for my cards that I named `TvShowCarousel`. It was a very simple component that only took the `genre` as a prop and displayed it as a title and inside I placed my card components.

At this point it was getting ridiculous, I had to start looping. I hardcoded a `genres` array and based on that did a double loop for my carousels and the cards within them. The page was so much cleaner, and there was no repetitive code!

## Step 5: transforming data to suit my needs

Now I had components, I was looping, everything was fine, except for the fact that I was still hardcoding the genres. This was a tricky one. How could I nicely get a list of genres without too much hassle? And what if I went a step further and actually grouped the tv shows based on it in a new object?
I have to admit, this was one of the hardest parts of the assignment for me, as I had never done something similar to this before. I would have to loop over all the shows and then loop over the array of genres each of them contained. So I did just that, but first I added a `tvShowsByGenre` state to contain my transformed data. The initial value was an empty object.

What I did in my transformer function was to loop over all the tv shows I was getting, then inside that loop go over all the genres they were assigned to and then check if my new `tvShowsByGenre` object already had the genre as a key. If it had it, it would move on to push the tv show into an array assigned to that key. Otherwise, it would create the genre key and assign an empty array to it. After transforming my data, I now had an object that looked something like this:

```
tvShowsByGenre = {
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
}
```

Note: I oversimplified the above structure as there was much more data per tv show. So now I had an object that contained all the tv shows organized by genre, yay!

## Step 6: Displaying a tv show on the tv show details page

I thought the easiest way to get a tv show's details would be to call this endpoint: `https://api.tvmaze.com/shows/id` while getting the id from the route params, so that's what I did. I implemented a `getTvShowById()` function in my store where I fetch the data from the api and assign it to my `tvShowDetails` state. 

Next, in my `TvShowView` page I created a structure and added some styling to display the data I got from the store. I took the same approach as with displaying all the tv shows by genre on the home page, I went from big to small. I now had a nice structure and it looked good, but the template could use some improvements, so I started adding components. 

## Step 7: Deciding on tv show details components

My page was now displaying a large card with the details of the tv show. The top part was a header that showed some data, like the name, rating, years in which the show ran, and language. The second part was a classic image and text card. So I decided to split the large card into 2 smaller components that I could maybe reuse later on: `TvShowDetailsHeader` and `TvShowImageTextCard`. Later on if the application would grow, the naming of these components could be improved, like calling the `TvShowImageTextCard` just 'TextImageCard' and reusing it in other places. 

## Step 8: Adding the search

Here I struggled a little bit because of the UX. What I had initially envisioned was having a dropdown under the search that would display results based on what the user typed. Then, the user could click on one of the results and be redirected to a new page. I also wanted to have the search in the menu at the top, available on every page.

Due to time constraints and a bit of wild goose chasing, what I ended up doing was different. I could quickly and easily have the data needed for my search from the store, so I set that up. For UX design reasons, I did not want to show the carousels containing the tv show cards by genre. Some of the tv shows had multiple genres which means that they would show up on the page multiple times on a search, so I decided against it.

I did end up re-using the `TvShowCard` component to display the search results. I used a v-if to display the search results and a v-show for the carousels with cards. I used the v-show on the carousels because it was much faster. The v-show only toggles the CSS display property, so the big list of shows by genre is always there and does not need to be re-rendered. 

## Things I would have liked to do if I had more time

- Tests! I did add a small test, but I would have liked to write more;
- Have the search in the menu bar and have it on every page
- Do more devensive programming. For example, not all tv shows have an average rating and that can result in errors. I went around that by giving the default value a 0, but I would prefer to check if there is a rating and if not, show something else, like some explanatory text.
- I would have also liked to refactor the app using Typescript. To be honest, I didn't use it from the start because I was afraid I wouldn't be able to finish everything on time(which I still haven't managed to do)
- I am now displaying the list of genres pertaining to a show on the details page. I would have liked to make them clickable so a user could see all the tv shows from that genre.
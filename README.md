# EC601_Project2
# Product Mission Statement
"Our mission is to connect hiking enthusiasts with the great outdoors by providing a user-friendly mobile platform that offers comprehensive, up-to-date, and customizable hiking trail information, facilitating safe, enjoyable, and environmentally responsible hiking adventures."

# Product User Stories

As a hiking enthusiast, I want to find trails near my current location, so that I can explore local nature easily.</br>
As a hiking enthusiast, I want to search hiking paths in the area I want to go hiking</br>
As a User, I want to able to record my hiking imformations such as my avg speed, total distance and height</br>
As a novice hiker, I want to see trail difficulty levels, so that I can choose paths that match my fitness level.</br>
As an environmentally conscious hiker, I want to learn about the wildlife and plants I might encounter on the trails, so that I can hike without disturbing the ecosystem.</br>
As a social hiker, I want to share my favorite trails with friends, so that we can enjoy hiking together.</br>
As a prepared hiker, I want to know the weather forecast for my hiking destination, so that I can plan my hike accordingly.</br>
As a hiking enthusiast, I want to record my hiking path and share it with others.</br>


# Minimum Viable Product (MVP)

A searchable map interface using the Google Maps API to locate hiking trails.</br>
Trail descriptions with difficulty ratings and distance.</br>
Current weather conditions displayed for each trail location.</br>
Social sharing capabilities to share trails with friends via social media or within the app itself.</br>

# Google Maps API

Search for Trails: Use the Google Maps API to allow users to search for trails based on their current location or a specified area.
Trail Details: Overlay trail information on the map, including the path, length, and difficulty, using custom markers or layers.
Weather Integration: Integrate a weather API to display current weather conditions on the map at the location of the trails.
And Hiking API provide by exsit hiking website, get hiking path from the hiking applications.
# overpass API
get hiking pass as geojosn file and load it to my app. querey all hiking trails taged in overpass
/*
https://overpass-turbo.eu/#
*/
<pre>
[out:xml][timeout:25];</br>
( 
  rel[route]["osmc:symbol"][route="hiking"]({{bbox}});</br>
);</br>
out body;>;
out skel qt;
</pre>  
# running instruction 
`git clone https://github.com/yourusername/your-repo-name.git`</br>
`cd EC601_Project2`</br>
Create .env file and replace your Google api key 
`node demo.js`</br>
Open broswer and visit localhost 3000
# Graph Theory Sketchpad

## - Summary:
    - The Graph Theorist Sketchpad is a web application for creating graphs with vertices and edges. The application allows for a user to interact with a graph they have designed by adding and removing vertices or edges with keyboard functions. The application allows the user to reposition the graph while maintaining its original adjacent vertices. The application utilizes the p5.js API. The p5.js API’s functionality is to respond to user events on the backend and display objects according to the event using JavaScript.

## - Instructions:
    - The Graph Theorist Sketchpad must be opened on a local server.
    - First, open the terminal in the root directory, then type the following: python -m http.server <portNo> (I used 8000)
    - Open a web browser and type: Localhost:<portNo>.
    - keyboard functions:
        - add vertices: 'v'
        - add edges: hover mouse over one vertex and press 'e', do the same for the other vertex.
        - reset edge building: 'u'.
        - change vertex color: hover mouse over vertex and press 'c'. There are six different colors. After sixth color is reached, colors start over.
        - delete vertex of edge: hover mouse over item and press 'd'.
        - delete graph: 'r'.

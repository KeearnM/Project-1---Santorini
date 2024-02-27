
# Santorini

This is a javascript html css interpration of the classic board game Santorini





## The Game

Santorini is a grid based game. Every round the players can first move then choose on either an empty grid or on top of an already built building. The game ends when a player either built a three level building and reached the top of it or when all opposing players are rendered immobile.


## Currently Implemented

Stages of the game:

Place function:

The first stage of the game where the user is prompted to place the character on the screen

Game stage:

Players can move once per round and build a building, in the current implementation of the game the only winning condition currently is surronding the opposing players and preventing them from moving 

## Screenshots

<img width="638" alt="Fresh Board" src="https://github.com/KeearnM/Santorini/assets/75174570/24937fa3-c4ac-419e-ba80-36bc0be5378d">

Board shown when the user first arrive at the webpage

<img width="732" alt="Placed Player" src="https://github.com/KeearnM/Santorini/assets/75174570/91df8441-3f28-4f61-b098-3b7c18cf7dd7">

Placed the players

<img width="782" alt="Start" src="https://github.com/KeearnM/Santorini/assets/75174570/3707a959-6fe8-4dd7-882e-0a257ae94de4">

Gameplay start

<img width="656" alt="Gameplay" src="https://github.com/KeearnM/Santorini/assets/75174570/29104b5e-dccc-45b6-bc84-c246c6b6e401">

More gameplay

<img width="737" alt="Game over" src="https://github.com/KeearnM/Santorini/assets/75174570/92f3ad92-5501-44b5-98de-659f7abc598a">

Board when one user is fully blocked off

## Current Features

Move Features - Character can move around the board with a maximum limit of 1 tile left,right and diagonally 

Build Features - Character can build around them with a maximum limit similar to the move features. When a already built building is selected a layer is added to it

Winning Conditions - Board can detect once a character is fully surronded with no way out and declare a "Game Over"

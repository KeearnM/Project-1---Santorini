
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

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Current Features

Move Features - Character can move around the board with a maximum limit of 1 tile left,right and diagonally 

Build Features - Character can build around them with a maximum limit similar to the move features. When a already built building is selected a layer is added to it

Winning Conditions - Board can detect once a character is fully surronded with no way out and declare a "Game Over"

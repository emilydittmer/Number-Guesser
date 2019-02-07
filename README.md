# Number-Guesser


## Assignment

The assignment for this project was to apply what we've learned in JavaScript within the context of a number guessing game. The basic expectations were to create fields to set minimum and maximum ranges that generated a random number and allow two players to try to guess the random number. Once those players have guessed, scorecards at the bottom of the section report the players' names, guesses, and feedback on their guess ("That's too high," "That's too low," or "BOOM" if the guess was correct). If one of the players guesses correctly, a new card appears on the right-hand side of the section announcing the winner of that round. There are also buttons to "reset" (start a new game) or "clear" (guess again, against the same random number). 

## Accomplishments

It felt like a real win for us to just accomplish the basic expectations of the assignment: generating and grabbing new numbers within a set range; grabbing names and guesses for each player; and passing those names, guesses, and feedback into the bottom section. This meant writing event listener functions, manipulating the DOM, and passing global variables into functions and reassigning them when those variables needed to change. The comp recreation could be tighter, but the real goal was to implement basic JS functionality using concepts introduced in class, and to have both partners 100% understanding and confident in the code turned in for the project.

## Challenges

A big challenge was disabling and enabling the buttons that update the range, submit guesses, and reset/clear the game. They're functioning, but not exactly as we'd like. With additional development time, we would continue fine-tuning the button behaviors to make enable/disable states dynamic as content is entered into fields.

We had some unexplained behavior with global variables specifically for the guess input fields, and plan to step through that with an instructor to shed more light on what may be causing some very strange stuff to inexplicably happen.

We were happy to be able to generate the new card when a player guesses the correct number.

## Take-Aways

The project is far from perfect, but the priority was to end up with an application that was owned equally between partners, and applying theory from class in a real-world context feels like the biggest success.

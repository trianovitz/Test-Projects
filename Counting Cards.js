// Counting cards 

var count = 0; 

function cc(card) {

switch (card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  count++; 
  break; // cards between 2-6 raise the count by one 
		
// cards between 7-9 doesn't change the count 
		
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
  count--;
  break; // cards between 10 - 'A' lower the count by one
}
  if (count > 0) {
    return count + " Bet"; // A positive count equals a higher bet 
  } else {
    return count + " Hold"; // A negative count equals a lower bet 
}};

cc(2); cc(3); cc(7); cc('K'); cc('A'); // The full sequence returns 0 Hold 

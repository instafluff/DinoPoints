var dinopoints = {
  "jurassicbank": { "username": "jurassicbank", "displayName": "Jurassic Bank", points: 1000000 }
  // username: { id: "asdf", "displayName": "User", points: 5000 }
};

function checkPointsByUsername( username ) {
  if( dinopoints[ username ] ) {
    return dinopoints[ username ][ "points" ] || 0;
  }
  return 0;
}

function transferPointsByUsername( fromUser, toUser, points ) {
  if( !dinopoints[ fromUser ] ) {
    return -1; // USER IS EXTINCT
  }
  if( checkPointsByUsername( fromUser ) < points ) {
    return -2; // NOT ENOUGH DNA
  }
  if( points <= 0 ) {
    return -3; // NO TRANSFER OF DNA
  }

  // Remove points from fromUser
  dinopoints[ fromUser ][ "points" ] = checkPointsByUsername( fromUser ) - points;
  // Give points to toUser
  if( dinopoints[ toUser ] ) {
    dinopoints[ toUser ][ "points" ] = checkPointsByUsername( toUser ) + points;
  }
  else {
    dinopoints[ toUser ] = {
      displayName: toUser,
      points: points
    }
  }
  return checkPointsByUsername( toUser );
}

module.exports = {
  checkPointsByUsername,
  transferPointsByUsername
};

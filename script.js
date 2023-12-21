// Get a reference to the element to be followed
const follower = document.getElementById('follower');

// Function to move the object along with the mouse cursor
function moveFollower(event) {
  // Set the object's coordinates based on the mouse cursor coordinates
  follower.style.left = (event.clientX - 25) + 'px'; // 25 - half of the object's width
  follower.style.top = (event.clientY - 25) + 'px'; // 25 - half of the object's height
}

// Track mouse movement and call the moveFollower function
document.addEventListener('mousemove', moveFollower);

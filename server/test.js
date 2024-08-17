const userId = 1;

fetch(`http://127.0.0.1:5000/api/user/${userId}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('User not found');
    }
    return response.json();
  })
  .then(data => {

    console.log('User Full Name:', data.full_name);
    console.log('User Email:', data.email);
    console.log('User Password Hash:', data.password);
  })
  .catch(error => {
    console.error('Error fetching user:', error);
  });
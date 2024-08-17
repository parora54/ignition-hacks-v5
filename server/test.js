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

  // Test fetching all competitions
fetch('http://127.0.0.1:5000/api/competitions')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch competitions');
    }
    return response.json();
  })
  .then(data => {
    console.log('All Competitions:', data);
    // Optionally, log specific details from the first competition
    if (data.length > 0) {
      console.log('First Competition Title:', data[0].title);
    }
  })
  .catch(error => {
    console.error('Error fetching competitions:', error);
  });

// Test fetching a single competition by ID
const competitionId = 1; // Replace with the ID of the competition you want to test

fetch(`http://127.0.0.1:5000/api/competitions/${competitionId}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Competition not found');
    }
    return response.json();
  })
  .then(data => {
    console.log('Competition Title:', data.title);
    console.log('Competition Description:', data.description);
    console.log('Competition Type:', data.type);
    console.log('Competition Difficulty:', data.difficulty);
    console.log('Competition Time', data.time);
    console.log('Competition Education Level:', data.education);
    console.log('Theme:', data.theme);
  })
  .catch(error => {
    console.error('Error fetching competition:', error);
  });
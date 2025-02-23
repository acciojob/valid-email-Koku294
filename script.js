function validEmail(str) {
  //your JS code here.
	function validEmail(str: string): boolean {
  // Regular expression to validate the email
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

  // Test the email against the regex pattern
  return emailRegex.test(str);
}
	
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));       
     
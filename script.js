// Button functionality

document.addEventListener('DOMContentLoaded', function() {
    const brokenButton = document.getElementById('broken-button');
    const fixedButton = document.getElementById('fixed-button');
    const buttonMessage = document.getElementById('button-message');
    const fixedMessage = document.getElementById('fixed-message');
    
    // Broken button - has JavaScript issues
    brokenButton.addEventListener('click', function() {
        // Issue: This throws an error because we're trying to access a non-existent property
        try {
            console.log('Broken button clicked');
            buttonMessage.textContent = 'Error: This button has issues! Check the console.';
            buttonMessage.className = 'message error';
            
            // Simulating a broken functionality - accessing undefined property
            const result = someUndefinedVariable.property;
            buttonMessage.textContent = result;
        } catch (error) {
            console.error('Button error:', error);
            buttonMessage.textContent = 'Error: Button functionality is broken! ' + error.message;
            buttonMessage.className = 'message error';
        }
    });
    
    // Fixed button - works properly
    fixedButton.addEventListener('click', function() {
        console.log('Fixed button clicked successfully');
        fixedMessage.textContent = 'Success! This button works perfectly. ✅';
        fixedMessage.className = 'message success';
        
        // Add some nice feedback
        setTimeout(() => {
            fixedMessage.textContent = 'Button is ready for another click!';
            fixedMessage.className = 'message';
        }, 2000);
    });
    
    // Add keyboard accessibility
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && event.target.tagName === 'BUTTON') {
            event.target.click();
        }
    });
});
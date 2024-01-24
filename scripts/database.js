const supabaseUrl = 'https://wjhxceapxvjmgyjrochh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqaHhjZWFweHZqbWd5anJvY2hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU4ODgzODUsImV4cCI6MjAyMTQ2NDM4NX0.idINLa_RApJYsqdIgYtWimO-DETD-nSRnrBt7Oth154';
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Function to submit the form data to Supabase
async function submitForm() {

    //Prevent default form submision to give a chance for the data insertion to complete
    event.preventDefault();
    
    // Get form data
    const name = document.getElementById('contact_name').value;
    
    const email = document.getElementById('contact_email').value;
    
    const message = document.getElementById('contact_message').value;

    // Insert data into the 'portfolio_contacts' table
    const { data, error } = await _supabase
        .from('contacts')
        .insert(
            { name:name, email:email, message:message },
        );

    if (error) {
        console.error('Error inserting data:', error);
    } else {
        console.log('Data inserted successfully:', data);
        alert("Thank you!!!I will get back to you");
        //Reload page after successfull submision
        location.reload();
    
        
    }

}
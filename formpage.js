
    function validateForm() {

      var name = document.forms["myForm"]["name"].value;
      var phone = document.forms["myForm"]["phone"].value;
      var dob = document.forms["myForm"]["dob"].value;

      if(!/^[a-zA-Z]+$/.test(name)){
        alert("Please enter a name with letters.");
        return false;
      }

      if (name.length < 8 || name.length > 50) {
        alert("Please enter a name between 8 and 50 characters.");
        return false;
      }

      if (phone.length != 10) {
        alert("Please enter a 10-digit phone number.");
        return false;
      }

      if (dob == "") {
        alert("Please enter a valid date of birth.");
        return false;
      }
    
      var formData = document.createElement("div");
      formData.innerHTML = "<p>Name: " + name + "</p><p>Phone: " + phone + "</p><p>DOB: " + dob + "</p>";
      document.body.appendChild(formData);
      return true;
    }

    function changeImage() {
      var image = document.getElementById("changeimg");
      console.log(image.src);
      if (image.src.endsWith('thanks.jpg')) {
        image.src = 'barbie.jpg';
      } else {
          image.src = 'thanks.jpg';
      }
    }  
  
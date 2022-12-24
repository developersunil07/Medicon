
  AOS.init({
    once:true,
  });

  function validation(){
    var  yourname = document.getElementById("yourname").value;
    var  phonenumber = document.getElementById("phonenumber").value;

    if(yourname == ''){
      document.getElementById('name').innerHTML = 'Name is required'
      return false;
    }

    if(phonenumber == ''){
      document.getElementById('number').innerHTML = 'Phone number is required'
      return false;
    }

    else{
      document.write("<h1>Your message is send successful.</h1>")
    }

  }
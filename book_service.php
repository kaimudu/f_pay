<!DOCTYPE html>
<html>
<head>
  <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-122955260-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-122955260-1');
</script>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="keywords" content="car washes services firstu"/>
  <meta name="description" content="One subscription for all your vehicle needs
    Pay a small amount monthly and get your vehicle’s periodic service, repairs and accidents, regular washes and everything else taken care"/>
  <meta name="subject" content="car services">
  <meta name="copyright"content="FirstU">
  <meta name="og:title" content="FirstU"/>
  <meta name="og:type" content="car services"/>
  <meta name="og:url" content="http://firstu.in"/>
  <meta name="og:site_name" content="FirstU"/>
  <meta name="og:description" content=" washes services firstu"/>
  <meta name="description" content="One subscription for all your vehicle needs
      Pay a small amount monthly and get your vehicle’s periodic service, repairs and accidents, regular washes and everything else taken care"/>
  <meta name="fb:page_id" content="211514416176726" />
  <meta name="og:email" content="info@firstu.in"/>
  <meta name="og:phone_number" content="+91 9895917591"/>
  <meta name="og:latitude" content="12.9104482"/>
  <meta name="og:longitude" content="77.6331643"/>
  <meta name="og:street-address" content="1601 S California Ave"/>
  <meta name="og:locality" content="Eden Park, 20 Vittal Mallya Road Bangalore"/>
  <meta name="og:region" content="Bangalore"/>
  <meta name="og:postal-code" content="560001"/>
  <meta name="og:country-name" content="INDIA"/>
  <title>Book Service</title>
  <link rel="icon" href="https://s3.ap-south-1.amazonaws.com/cdn.firstu.in/fav.png"> 
  <link rel="stylesheet" href="https://s3.ap-south-1.amazonaws.com/cdn.firstu.in/css/firstu.css" type="text/css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.3.0/mustache.js"></script>
</head>
<body class="border border-primary">
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="https://s3.ap-south-1.amazonaws.com/cdn.firstu.in/firstu-logo.png" height="70px"> </a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar2SupportedContent" aria-controls="navbar2SupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
      <div class="collapse navbar-collapse text-center justify-content-end" id="navbar2SupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link text-dark" href="/#what">What you get</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#how">How it works</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link text-dark" href="/#why">Why Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="py-5 text-white bg-secondary book-service-banner">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-md-left text-center align-self-start my-5 book-service-form">
          <h1 class="choose-heading">Book Service</h1>  
        </div>
      </div>
    </div>
  </div>
  <div class="py-5 quote-form">
    <div class="book-service-mobile"> 
     <div class="container bg-light">
      <div class="row bg-light">
        <div class="col-md-12  quote-form-container" id="book">
          <form class="flex-column" name="submit-to-google-sheet2" >
            <div class="container">
              <div class="row">
                  <div class="col-md-6 first select-container">
                    <select name="car" class="select car form-control" id="car" required="" autocomplete="random">
                    <option disabled selected value> Choose Car </option>
                     <?php include 'config.php';?>                         
                     <?php
                        $url_product = ''.$base_url.'/jsonapi/commerce_product/vehicle?fields[commerce_product--vehicle]=title,uuid&page[limit]=50&page[offset]=0&sort=title'; 
                        $url_product2 = ''.$base_url.'/jsonapi/commerce_product/vehicle?fields[commerce_product--vehicle]=title,uuid&page[limit]=50&page[offset]=50&sort=title'; 
                        $url_product3 = ''.$base_url.'/jsonapi/commerce_product/vehicle?fields[commerce_product--vehicle]=title,uuid&page[limit]=50&page[offset]=100&sort=title';
                        $url_product4 = ''.$base_url.'/jsonapi/commerce_product/vehicle?fields[commerce_product--vehicle]=title,uuid&page[limit]=50&page[offset]=150&sort=title';
                        $data1 = file_get_contents($url_product); 
                        $data2 = file_get_contents($url_product2);
                        $data3 = file_get_contents($url_product3);
                        $data4 = file_get_contents($url_product4);


                        $data1 = json_decode($data1, true);
                        $data2 = json_decode($data2, true);
                        $data3 = json_decode($data3, true);
                        $data4 = json_decode($data4, true);
                    ?>
                    <?php foreach($data1['data'] as $product_data): ?>
                       <option value="<?php echo $product_data['attributes']['title'] ?>" class="options" ><?php echo $product_data['attributes']['title'] ?></option> <!-- We want to list the titles in option , so in option we passed title and values as its uid -->
                    <?php endforeach ?> 
                    <?php foreach($data2['data'] as $product_data): ?>
                       <option value="<?php echo $product_data['attributes']['title'] ?>" class="options" ><?php echo $product_data['attributes']['title'] ?></option> <!-- We want to list the titles in option , so in option we passed title and values as its uid -->
                    <?php endforeach ?> 
                    <?php foreach($data3['data'] as $product_data): ?>
                       <option value="<?php echo $product_data['attributes']['title'] ?>" class="options" ><?php echo $product_data['attributes']['title'] ?></option> <!-- We want to list the titles in option , so in option we passed title and values as its uid -->
                    <?php endforeach ?> 
                    <?php foreach($data4['data'] as $product_data): ?>
                       <option value="<?php echo $product_data['attributes']['title'] ?>" class="options" ><?php echo $product_data['attributes']['title'] ?></option> <!-- We want to list the titles in option , so in option we passed title and values as its uid -->
                    <?php endforeach ?> 

                   </select> 
                  </div>
                  <div class="col-md-3 select-container">
                    <select name="service_selected" class="select kms form-control select-service" id="service_selected" required="" autocomplete="random">
                      <option disabled selected value> Service Selected </option>
                      <option value="Periodic services" class="options">Periodic services </option>
                      <option value="Regular washes" class="options">Premium washes </option>
                      <option value="Additional Repairs" class="options"> Additional Repairs </option>
                    </select> 
                  </div>
                  <div class="col-md-3 select-container">
                    <input type="text"  id="vehicle_registration" class="select-service" placeholder="Vehicle registration number" required="" autocomplete="random" >   
                  </div>
                </div>
                <div class="row book-service-row">
                  <div class="col-md-4 first select-container">
            
                   <!--   <input type="text" placeholder="Location" id="location" required="">
                    </select> 
                    <div class="col-md-12 col-12">
                          <div class="form-group">
                            
                          </div>
                     </div> -->
                     <input type="text" name="location" id="location" class="location"  placeholder="Location" required="" autocomplete="random" disabled="">
                       <a href="#"><div style="position:absolute; left:0; right:0; top:0; bottom:0;" data-toggle="modal" data-target="#locationModal"></div> 
                       </a>
                       <div class="col-md-12 col-12">
                          <div class="form-group">
                            
                          </div>
                     </div>
                  </div>
                  <div class="col-md-4 book-service-col select-container">
                    <div class="form-group">
                      <input type="date" name="service_date" data-placeholder="Service Date" id="service_date" required autocomplete="random">
                     <!--  <img src="https://s3.ap-south-1.amazonaws.com/cdn.firstu.in/date.png" class="order-date2 datepicker" alt="date-icon" >   -->
                    </div>
                  </div>
                  <div class="col-md-4 book-service-col select-container">
                    <div class="form-group">
                      <input type="text" name="phone" placeholder="Phone" id="phone" pattern="[789][0-9]{9}" required autocomplete="random">
                    </div>
                  </div>
                </div> 
                <div class="row ">
                  <div class="col-md-12 col-12">
                    <button name="" id="book-service-btn" onclick="validation(event)" class="btn btn-primary btn-sm package-button" type="submit">BOOK NOW</button>
                  </div> 
               </div> 
          </form>  
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="locationModal" role="dialog">
    <div class="modal-dialog">
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title"> Choose Your Location</div>
          <button type="button" class="close" data-dismiss="modal">&times;</button>   
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-12 col-12">
              <div class="form-group">
                 <input type="text"  placeholder="Enter your location" id="choose_location"><!-- Textfield to type location -->
              </div>
            </div>
          </div>
          <div class="row" align="middle">
            <div class="col-md-12 col-12">
              <div class="form-group" >
                 <p>OR</p>
              </div>
            </div>
          </div>
          <div class="row" align="middle">
            <div class="col-md-12 col-12">
              <div class="form-group">
                 <button onclick="getLocation()" class="btn btn-primary btn-sm package-button detect-button"><img src="https://s3.ap-south-1.amazonaws.com/cdn.firstu.in/Detect.png" style="width: 25px; position: relative;right: 5%; padding-left: 2%;">Detect My Location</button> <!-- Button to detect location -->
              </div>
            </div>
          </div>
          
          <div id="map"></div> <!-- Initialize Map -->
        </div>
        <div class="modal-footer" align="middle">
          <button type="button" class="btn btn-primary" data-dismiss="modal" style="width: 100%;"> Select and Confirm</button>
        </div>
      </div>     
    </div>
  </div>
  <div class="py-5 book-service-margin  level level-body">
    <div class="container l2-body">
      <div class="row">
        <div class=" col-md-4 ">
              <div class=""><img src="https://s3.ap-south-1.amazonaws.com/cdn.firstu.in/periodic_service.png" width="80"  class="icon book-service-img"></div>
              <h5 class="mb-3 text-secondary">Periodic Service</h5>
              <p class="my-1 book-service-para">We take of your vehicle’s periodic maintenance every 10,000km  at an authorised service station following highest standards, with pickup and drop at your doorstep.</p>
        </div>
        <div class=" col-md-4">
            <div><img src="https://s3.ap-south-1.amazonaws.com/cdn.firstu.in/repair_accident_cover.png" width="80" class="icon book-service-img"></div> 
            <h5 class="mb-3 text-secondary">Repairs Assistance *</h5>
              <p class="my-1 book-service-para">In case of Repairs, we’ll get your vehicle fixed in a jiffy. You can worry about paying us later.</p>  
        </div>
        <div class=" col-md-4">
              <div><img src="https://s3.ap-south-1.amazonaws.com/cdn.firstu.in/monthly_wash.png" width="80" class="icon book-service-img"></div>
              <h5 class="mb-3 text-secondary">Premium Washes</h5>
              <p class="my-1 book-service-para">We make sure your vehicle gets a regular interior cleanup at your doorstep! Your vehicles are not only safe in our hands, they also look better under our care!</p>
        </div>
      </div>
    </div>
  </div>


  <div class="py-5 bg-light how-it-mobile">
    <div class="container">
      <div class="row l3-title l-title">
        <div class="col-md-12" id="how">
          <h1 class="main-title text-left text-secondary" id="how">How it works</h1>
        </div>
      </div>
      <div class="row l3-body">
        <div class="col-md-4 p-4">
          <img class="img-fluid d-block" src="https://s3.ap-south-1.amazonaws.com/cdn.firstu.in/click.png" width="50px">
          <p class="my-4">Give the neccessary details along with service that you require and book.</p>
        </div>
        <div class="col-md-4 p-4">
          <img class="img-fluid d-block" src="https://s3.ap-south-1.amazonaws.com/cdn.firstu.in/call.png" width="50px">
          <p class="my-4">After booking the service, our customer relationship executive will call you and give the neccessary instructions.</p>
        </div>
        <div class="col-md-4 p-4">
          <img class="img-fluid d-block" src="https://s3.ap-south-1.amazonaws.com/cdn.firstu.in/choose.png" width="50px">
          <p class="my-4">Post service and after your vehicle delivery, our customer relationship executive will call for your feedback.</p>
        </div>
      </div> 
    </div>
  </div>
  <div class="text-dark footer">
    <div class="container">
      <div class="row">
        <div class="p-4 col-md-3">
          <h2 class="mb-4 text-secondary">
            <a class="navbar-brand" href="/">
              <img src="https://s3.ap-south-1.amazonaws.com/cdn.firstu.in/firstu-logo.png" height="70px" class="footer-img"> </a>
          </h2>
        </div>
        <div class="p-4 col-md-2 col-12 footer-terms-section">
          <ul class="list-unstyled">
            <li>
              <a href="terms.html" class="text-secondary">Terms of service</a>
            </li>
            <li>
              <a href="privacy.html" class="text-secondary">Privacy Policy</a>
            </li>
            <li>
              <a href="disclaimer.html" class="text-secondary">Disclaimer</a>
            </li>
          </ul>
        </div>
        <div class="p-4 col-md-3 col-12">
          <ul class="list-unstyled">
            <li>
              <a href="mailto:service@firstu.com" class="text-secondary">support@firstu.in</a>
            </li>
            <li> <span class="text-secondary">+9188848 71234</span> </li>
          </ul>
        </div>
        <div class="p-4 col-md-4 col-12">
         <!--  <p class="address"> Write to us at info@firstu.in or <br> Call us on 8048 500 730/9148 577 030 </p> -->
          <p class="address"> Autozo Technologies Private Limited  <br> 102, Eden Park, 20 Vittal Mallya Road <br>Bangalore-560001 </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-12 footer-copyright">*Terms and Conditions Apply <br>
           ©2018 Autozo Technologies Private Ltd. All rights reserved. <br>
           Made with <img src="https://s3.ap-south-1.amazonaws.com/cdn.firstu.in/love.png" width="auto" height="10px" alt="love" style="height: 13px; padding-bottom: 2px;  width: 12px;"> in India
        </div>
      </div>
    </div>
  </div>  
  <script type="text/javascript" src="https://s3.ap-south-1.amazonaws.com/cdn.firstu.in/js/jquery1.5.2.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
  <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCd7FsGkZx9nSOkqJWTCobX9J0CnM3uxos&libraries=places&callback=initMap&callback=initMap">
  </script>
  <script type="text/javascript" src="js/config.js"></script>
  <script type="text/javascript" src="https://s3.ap-south-1.amazonaws.com/cdn.firstu.in/js/book-service.js"></script>
</body>
</html>


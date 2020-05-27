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
		<!-- Facebook Pixel Code -->
		  <script>
		    !function(f,b,e,v,n,t,s)
		    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
		    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
		    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
		    n.queue=[];t=b.createElement(e);t.async=!0;
		    t.src=v;s=b.getElementsByTagName(e)[0];
		    s.parentNode.insertBefore(t,s)}(window, document,'script',
		    'https://connect.facebook.net/en_US/fbevents.js');
		    fbq('init', '237330790224427');
		    fbq('track', 'PageView');
		  </script>
		<noscript><img height="1" width="1" style="display:none"
		  src="https://www.facebook.com/tr?id=237330790224427&ev=PageView&noscript=1"
		/></noscript>
		<!-- End Facebook Pixel Code -->
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
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
		<title>Request Service</title>
		<!-- Bootstrap CSS -->
    	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
		<link rel="icon" href="https://s3.ap-south-1.amazonaws.com/cdn.firstu.in/fav.png">
		<link rel="stylesheet" href="https://s3.ap-south-1.amazonaws.com/cdn.firstu.in/css/firstu.css" type="text/css">
		<link rel="stylesheet" href="dev.css" type="text/css">
		<script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.3.0/mustache.js"></script>
	</head>
	<body>
		<nav class="navbar navbar-light bg-white shadow-sm">
		  <a class="navbar-brand" href="#">
		  	<img src="https://s3.ap-south-1.amazonaws.com/cdn.firstu.in/firstu-logo.png" height="50px"> </a>
		  </a>
		</nav>
		<div class="section section1">
			<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
			  <ol class="carousel-indicators">
			    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
			  </ol>
			  <div class="carousel-inner">
			    <div class="carousel-item active">
			      <img src="assets/icons/slider1.jpg" class="d-block w-100" alt="...">
			      <div class="carousel-caption d-md-block">
				    <p>General Checkup</p>
				  </div>
			    </div>
			    <div class="carousel-item">
			      <img src="assets/icons/slider2.jpg" class="d-block w-100" alt="...">
			      <div class="carousel-caption d-md-block">
				    <p>Engine Oil Change</p>
				  </div>
			    </div>
			    <div class="carousel-item">
			      <img src="assets/icons/slider3.jpg" class="d-block w-100" alt="...">
			      <div class="carousel-caption d-md-block">
				    <p>Filters Change</p>
				  </div>
			    </div>
			    <div class="carousel-item">
			      <img src="assets/icons/slider4.jpg" class="d-block w-100" alt="...">
			      <div class="carousel-caption d-md-block">
				    <p>Pay in No Cost EMIs</p>
				  </div>
			    </div>
			  </div>
			  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
			    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
			    <span class="sr-only">Previous</span>
			  </a>
			  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
			    <span class="carousel-control-next-icon" aria-hidden="true"></span>
			    <span class="sr-only">Next</span>
			  </a>
			</div>
			<div class="form-wrapper" id="requestform">
				<div class="package-plans" id="package-plans-section">
					<h2>Request a Service</h2>
	              	<div class="form-group">
	                  <select name="car" class="select car form-control" id="car" required="">
	                    <option disabled selected value> Choose Car </option>
	                     <?php include 'config.php';?>                         
	                     <?php
	                        $url_product = ''.$base_url.'/jsonapi/commerce_product/vehicle?fields[commerce_product--vehicle]=title,uuid&sort=title'; 
	                        $url_product2 = ''.$base_url.'/jsonapi/commerce_product/vehicle?fields[commerce_product--vehicle]=title,uuid&page[limit]=50&page[offset]=50&sort=title'; 
	                        $data1 = file_get_contents($url_product); 
	                        $data2 = file_get_contents($url_product2); 
	                        // $user[] = json_decode($data1,true);
	                        // $user[] = json_decode($data2,true);
	                        // $json_merge = json_encode($user);
	                        // echo $json_merge;
	                        $data1 = json_decode($data1, true);
	                        $data2 = json_decode($data2, true);
	                    ?>
	                    <?php foreach($data1['data'] as $product_data): ?>
	                       <option value="<?php echo $product_data['attributes']['title'] ?>" class="options" ><?php echo $product_data['attributes']['title'] ?></option> <!-- We want to list the titles in option , so in option we passed title and values as its uid -->
	                    <?php endforeach ?> 
	                    <?php foreach($data2['data'] as $product_data): ?>
	                       <option value="<?php echo $product_data['attributes']['title'] ?>" class="options" ><?php echo $product_data['attributes']['title'] ?></option> <!-- We want to list the titles in option , so in option we passed title and values as its uid -->
	                    <?php endforeach ?> 

	                   </select>

	                 </div>
	                <div class="form-group">
	                  <select name="year" class="select form-control" id="year" required="">
	                    <option disabled selected value>Year</option>
	                    <option value="2000" class="options">2000</option>
	                    <option value="2001" class="options">2001</option>
	                    <option value="2002" class="options">2002</option>
	                    <option value="2003" class="options">2003</option> 
	                    <option value="2004" class="options">2004</option>
	                    <option value="2005" class="options">2005</option>
	                    <option value="2006" class="options">2006</option> 
	                    <option value="2007" class="options">2007</option>
	                    <option value="2008" class="options">2008</option>
	                    <option value="2009" class="options">2009</option>
	                    <option value="2010" class="options">2010</option>
	                    <option value="2011" class="options">2011</option>
	                    <option value="2012" class="options">2012</option>
	                    <option value="2013" class="options">2013</option> 
	                    <option value="2014" class="options">2014</option>
	                    <option value="2015" class="options">2015</option>
	                    <option value="2016" class="options">2016</option> 
	                    <option value="2017" class="options">2017</option>
	                    <option value="2018" class="options">2018</option>
	                  </select> 
	              	</div>
	                <div class="form-group">                   
	                    <input type="text" class="form-control" name="phonenumber" placeholder="Phone Number" id="phone" pattern="[789][0-9]{9}" required>                    
	                </div>
	                <div class="form-group">                   
	                	<input type="email" class="form-control" name="email" placeholder="Email" id="email" required>
	                    <input type="hidden" name="landing-page-id"  id="landing-page-id" value="Landing Request" required>
	                </div>      
	                <button name=""  onclick="validation(event)" class="btn btn-primary btn-sm package-button" type="submit">Request Service</button> 
	            </div>

            </div>

		</div>
		<div class="section section2">
			<div class="container">
				<div class="row">
					<h2><img src="assets/icons/repair_accident_cover.png" height="25px">What's Included</h2>
				</div>
				<div class="row">
				    <span class="col-12 col-sm-6">24 point general checkup of your car</span>
				    <span class="col-12 col-sm-6">Premium body washes includes exterior and interior cleaning</span>
				    <span class="col-12 col-sm-6">Engine oil change with semi synthetic 5W30 engine oil</span>
				    <span class="col-12 col-sm-6">Wheel alignment and wheel balancing</span>
				    <span class="col-12 col-sm-6">Essential filters change</span>
				    <span class="col-12 col-sm-6">Pick up and drop at your doorstep</span>
				    <span class="col-12 col-sm-6">Coolant top up</span>
				</div>
			</div>	
		</div>

		<div class="section section3 bg-light">
			<div class="container">
				<h2>FirstU Advantages</h2>
				<div class="row">
				    <span class="col-12 col-sm-6 main-wrapper odd">
				    	<div class="wrapper">
				    		<span class="img-wrapper">
				    			<img src="assets/icons/choose_white.png">
				    		</span>
				    		<span class="text-wrapper">High quality authorised Bosch service centers and professionals across the city</span>
				    	</div>
				    </span>
				    <span class="col-12 col-sm-6 main-wrapper even">
				    	<div class="wrapper">
				    		<span class="img-wrapper">
				    			<img src="assets/icons/pay_white.png">
				    		</span>
				    		<span class="text-wrapper">Pay in no cost monthly EMIs</span>
				    	</div>
				    </span>
				    <span class="col-12 col-sm-6 main-wrapper odd">
				    	<div class="wrapper">
				    		<span class="img-wrapper">
				    			<img src="assets/icons/car_white.png">
				    		</span>
				    		<span class="text-wrapper">Pick up and drop at your doorstep</span>
				    	</div>
				    </span>
				    <span class="col-12 col-sm-6 main-wrapper even">
				    	<div class="wrapper">
				    		<span class="img-wrapper">
				    			<img src="assets/icons/periodic_service_white.png">
				    		</span>
				    		<span class="text-wrapper">Genuine Spare parts for replacements</span>
				    	</div>
				    </span>
				    <span class="col-12 col-sm-6 main-wrapper odd">
				    	<div class="wrapper">
				    		<span class="img-wrapper">
				    			<img src="assets/icons/value_money_white.png">
				    		</span>
				    		<span class="text-wrapper">Transparent Pricing</span>
				    	</div>
				    </span>
				</div>
				<h2 class="faq-title">FAQ</h2>
				<div class="faq-wrapper">
					<div class="wrapper">
						<span class="question">How do I book the service?</span>
						<span class="answer">After you request for the service, one of our executives will get in touch with you immediately, clear all your queries and confirm the booking.</span>
					</div>
				</div>
			</div>	
		</div>
		
		<div class="section section4">
			<div class="container">
				<h2>Testimonial</h2>
				<div id="carouselTestimonialIndicators" class="carousel slide" data-ride="carousel">
				  <!-- <ol class="carousel-indicators">
				    <li data-target="#carouselTestimonialIndicators" data-slide-to="0" class="active"></li>
				    <li data-target="#carouselTestimonialIndicators" data-slide-to="1"></li>
				    <li data-target="#carouselTestimonialIndicators" data-slide-to="2"></li>
				  </ol> -->
				  <div class="carousel-inner">
				    <div class="carousel-item active">
					    <div class="carousel-caption d-md-block">
							<p class="testimonial">"What can be better than paying a small amount monthly and keeping my year-long vehicle worries away? I found it to be the most affordable option to take care of my car"</p>
							<p class="name">Mahendran</p>
							<p class="designation">Volkswagen Polo</p>
						</div>
				    </div>
				    <!-- <div class="carousel-item">
				      <div class="carousel-caption d-md-block">
					    <p class="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						<p class="name">Joshu Peter</p>
						<p class="designation">COO, Peter England</p>
					  </div>
				    </div>
				    <div class="carousel-item">
				      <div class="carousel-caption d-md-block">
					    <p class="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						<p class="name">Henry Ford</p>
						<p class="designation">Founder, Ford Automobiles</p>
					  </div>
				    </div> -->
				  </div>
				  <!-- <a class="carousel-control-prev" href="#carouselTestimonialIndicators" role="button" data-slide="prev">
				    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
				    <span class="sr-only">Previous</span>
				  </a>
				  <a class="carousel-control-next" href="#carouselTestimonialIndicators" role="button" data-slide="next">
				    <span class="carousel-control-next-icon" aria-hidden="true"></span>
				    <span class="sr-only">Next</span>
				  </a> -->
				</div>
			</div>
		</div>

		<footer>
			<div class="container">
				<div class="row">
					<div class="col-sm-3 brand">
						<img src="https://s3.ap-south-1.amazonaws.com/cdn.firstu.in/firstu-logo.png" height="50px"> </a>
					</div>
					<div class="col-sm-4 support">
						<span><a href="support@firstu.in" target="_top">support@firstu.in</a><br><a href="tel:++919686993660">+91 88848 71234</a></span>
					</div>
					<div class="col-sm-5 contact">
						<span>Autozo Technologies Private Limited, 102, Eden Park,<br>20, Vittal Mallya Road, Bengaluru - 560001</span>
					</div>
				</div>
			</div>	
		</footer>

		<button id="mobilerequest" type="button" class="btn btn-primary mobile-request fixed-bottom">Request Service</button>

		<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
	    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
		<script type="text/javascript" src="https://s3.ap-south-1.amazonaws.com/cdn.firstu.in/js/jquery1.5.2.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
		<script async defer
		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCd7FsGkZx9nSOkqJWTCobX9J0CnM3uxos&libraries=places&callback=initMap&callback=initMap">
		</script>
		<script type="text/javascript" src="js/config.js"></script>
		<script type="text/javascript" src="js/slider.js"></script>
		<script type="text/javascript" src="js/custom.js"></script>
		<script type="text/javascript" src="https://s3.ap-south-1.amazonaws.com/cdn.firstu.in/js/landing-request.js"></script>
		<!-- <script type="text/javascript" src="js/landing-request.js"></script> -->

	</body>
</html>
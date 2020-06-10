var unit_price;
var product_variation_id;
var product_title;
var order_id;
var order_uuid;
var revision_id;
var customer_id;
var order_item_id;
var name;
var phone;
var email;
var address;
var model;
var running_kms;
var model;
var running_kms;
var fuel_type;
var vehicle_registration;
var mode_payment;
var razorpay_customer_id;
var coupon_input;
var subscription_id;
var timeStamp = Math.floor(Date.now() / 1000);
let razorpay_key = 'rzp_test_ICLCQ9JCM0e15U'
var base_url = 'http://dev.firstuv2.tridz.in';
var car
var fuel
let lat_lng
let city
let uid
//dummy_value (data from App come here)
car = 'Tata Nexon';
fuel = 'Petrol';
lat_lng = "" + 12.9621131 + "," + 77.6494898 + "";
city = 'kodihalli'
uid = 1295
coupon_input = null;
unit_price = '1';
product_variation_id = "cc60aa1b-ad7c-4bcd-9e45-938a391dc693";
plan_id = 'plan_AV9yNWiIvICRgX';
product_title = 'Tata Nexon Petrol Premium';
name = 'mudu';
phone = 8714455703;
email = 'mudu@mail.com';
city = 'city';
address = 'billing_address';
model = 'car';
running_kms = '10000';
fuel_type = 'Petrol';
vehicle_registration = 'vehicle_registration';


let app_data;
document.addEventListener('message',
    function (e) {

        app_data = e.data
        app_data = JSON.parse(app_data)

        car = app_data.car;
        fuel = app_data.fuel;
        lat_lng = app_data.lat_lng;
        city = app_data.city
        uid = app_data.uid
        coupon_input = app_data.coupon_input;
        unit_price = app_data.unit_price;
        product_variation_id = app_data.product_variation_id;
        plan_id = app_data.plan_id;
        product_title = app_data.product_title;
        name = app_data.name;
        phone = app_data.phone;
        email = app_data.email;
        city = app_data.city;
        address = app_data.address;
        model = app_data.model;
        running_kms = app_data.running_kms;
        fuel_type = app_data.fuel_type;
        vehicle_registration = app_data.vehicle_registration;
    }
)


function validation1(e) {
    window.ReactNativeWebView.postMessage(vehicle_registration)
}



$('#mode_payment1').on('change', function () { // jquery function to show select box if user chose debit card
    $chosen_debit_card = this.value;
    if ($chosen_debit_card === 'debit-card') {
        $("#debit-card-bank-section").css('display', 'block');
        $('select#debit_card_bank').attr('required', 1);
    }
    else {
        $("#debit-card-bank-section").css('display', 'none');
    }
});



function validation(e) {
    var test = false;
    if ($('#debit-card-bank-section').css("display") == "block") {
        if ($('#debit_card_bank').val() != null) {
            test = true;

        }
        else {
            test = false;
        }
    }

    else {
        test = true;
    }

    if (test === true) {


        e.preventDefault();

        mode_payment = document.getElementById('mode_payment1').value;
        debit_card_bank = document.getElementById('debit_card_bank').value;
        if (mode_payment === 'card' || debit_card_bank === 'card') //checking if credit or supported debit
        {
            console.log('card');
            //clicking on pay now hide button and show loading
            $("#pay-btn-summary").css('display', 'none');
            $("#loader").css('display', 'block');


            //create billing profile

            fetch('' + base_url + '/jsonapi/profile/customer', {
                method: 'post',
                body: JSON.stringify({
                    "data": {
                        "type": "profile--customer",
                        "attributes": {
                            "status": true,
                            "is_default": true,
                            "field_billing_address": address,
                            "field_current_running_kms": running_kms,
                            "field_email": email,
                            "field_model_and_make": model,
                            "field_name": name,
                            "field_phone": phone,
                            "field_vehicle_registration_numbe": vehicle_registration
                        },
                        "relationships": {
                            "type": {
                                "data": {
                                    "type": "profile_type--profile_type",
                                    "id": "aaf4e4cb-ccc5-4abf-a820-142017c40246"
                                }
                            }
                        }
                    }
                }),
                headers: {
                    "Content-Type": "application/json; charset=utf-8",

                }
            })


                .then(function (response) {

                    console.log('billing profile created');
                    return response.json();
                })

                .then(function (response) {
                    console.log(response)

                    revision_id = response.data.attributes.revision_id;
                    // console.log(revision_id);
                    customer_id = response.data.attributes.uuid;
                    // console.log(customer_id);
                    return response;
                })

                .then(function (response) {

                    fetch('' + base_url + '/jsonapi/commerce_order_item/default', {
                        method: 'post',
                        body: JSON.stringify({
                            "data": {
                                "type": "commerce_order_item--default",
                                "attributes": {
                                    "quantity": "1.00",
                                    "title": product_title,
                                    "unit_price": {
                                        "number": unit_price,
                                        "currency_code": "INR"
                                    }
                                },
                                "relationships": {
                                    "purchased_entity": {
                                        "data": {
                                            "type": "commerce_product_variation--car",
                                            "id": product_variation_id
                                        }
                                    }
                                }

                            }
                        }),
                        headers: {
                            "Content-Type": "application/json; charset=utf-8",

                        }
                    })


                        .then(function (response) {

                            console.log('order item created');

                            return response.json();
                        })

                        .then(function (response) {
                            console.log(response)

                            order_item_id = response.data.attributes.uuid;
                            return response;
                        })

                        .then(function (response) {
                            fetch('' + base_url + '/jsonapi/commerce_order/default', {
                                method: 'post',
                                body: JSON.stringify({
                                    "data": {
                                        "type": "commerce_order--default",
                                        "attributes": {
                                            "state": "draft",
                                            "checkout_step": "complete",
                                            "order_number": "101",
                                            "placed": timeStamp
                                        },
                                        "relationships": {

                                            "store_id": {
                                                "data": {
                                                    "type": "commerce_store--online",
                                                    "id": "6d4798d6-eb40-47e4-9ca2-52f3c363436a"
                                                }

                                            },

                                            "order_items": {
                                                "data": [{
                                                    "type": "commerce_order_item--default",
                                                    "id": order_item_id
                                                }]
                                            },

                                            "billing_profile": [{
                                                "data": {
                                                    "type": "profile--customer",
                                                    "id": customer_id,
                                                    "meta": {
                                                        "target_revision_id": revision_id
                                                    }
                                                }
                                            }]
                                        }
                                    }
                                }),
                                headers: {
                                    "Content-Type": "application/json; charset=utf-8",

                                }
                            })

                                .then(function (response) {
                                    console.log('order created');
                                    return response.json();
                                })

                                .then(function (response) {
                                    console.log(response)

                                    order_id = response.data.attributes.order_id;
                                    order_uuid = response.data.attributes.uuid;

                                    console.log({
                                        "uid": uid,
                                        "order_id": order_id,
                                        "payment_type": mode_payment,
                                        "location": city,
                                        "lat_lng": lat_lng
                                    })

                                    fetch('' + base_url + '/order/assign', {
                                        method: 'post',
                                        body: JSON.stringify({
                                            "uid": uid,
                                            "order_id": order_id,
                                            "payment_type": mode_payment,
                                            "location": city,
                                            "lat_lng": lat_lng
                                        }),
                                        headers: {
                                            "Content-Type": "application/json; charset=utf-8",
                                            "Accept": "text/html; charset=UTF-8"

                                        }
                                    })


                                        .then(function (response) {

                                            console.log('order assigned to user');
                                            return response.text();

                                        })


                                        .then(function (response) {
                                            console.log(response)


                                            fetch('' + base_url + '/order/subscribe', {
                                                method: 'post',
                                                body: JSON.stringify({
                                                    "plan_id": plan_id,
                                                    "total_count": "12"
                                                }),
                                                headers: {
                                                    "Content-Type": "application/json; charset=utf-8"


                                                }
                                            })


                                                .then(function (response) {

                                                    console.log('order subscribed');
                                                    return response.json();
                                                })

                                                .then(function (response) {
                                                    console.log(response)

                                                    subscription_id = response.id;
                                                    return subscription_id;
                                                })


                                                .then(function (response) {

                                                    if (coupon_input === null) { //checking if coupon field is empty
                                                        console.log('coupon empty');

                                                        //create payment controller

                                                        fetch('' + base_url + '/order/payment_create', {
                                                            method: 'post',
                                                            body: JSON.stringify({
                                                                "order_id": order_id
                                                            }),
                                                            headers: {
                                                                "Content-Type": "application/json; charset=utf-8"

                                                            }
                                                        })


                                                        var options = {
                                                            "key": razorpay_key,
                                                            "subscription_id": subscription_id,
                                                            "name": "FirstU Subscriptions",
                                                            "handler": function (response) {
                                                                payment_id = response.razorpay_payment_id;
                                                                // fbq('track', 'Purchase', { value: unit_price, currency: 'INR' });
                                                                alert('Thanks for subscribing, welcome to the FirstU family. You will receive the welcome mail and message shortly. We are here to help if you need it. Call us at +91-9686993660 or write to us at support@firstu.in');
                                                                window.ReactNativeWebView.postMessage("Subscribed")

                                                            },
                                                            "notes": {
                                                                "order_id": order_id,
                                                                "payment_type": mode_payment

                                                            },
                                                        };


                                                        // console.log(response); // here subscription id is printing
                                                        var rzp1 = new Razorpay(options);
                                                        rzp1.open();

                                                        $("#pay-btn-summary").css('display', 'block');
                                                        $("#loader").css('display', 'none');

                                                    }  // end if checking coupon field is empty


                                                    else {  // else (coupon box is not empty)

                                                        console.log('coupon not empty');
                                                        fetch('' + base_url + '/jsonapi/commerce_promotion_coupon/commerce_promotion_coupon?filter[couponFilter][condition][path]=code&filter[couponFilter][condition][value]=' + coupon_input + '', {
                                                            method: 'get',
                                                            headers: {
                                                                "Content-Type": "application/json; charset=utf-8",

                                                            }
                                                        })


                                                            .then(function (response) {

                                                                console.log('Get coupon uuid');
                                                                return response.json();
                                                            })
                                                            .then(function (response) {
                                                                coupon_id = response.data[0].attributes.uuid;
                                                                return coupon_id;

                                                            })
                                                            .then(function (response) {

                                                                fetch('' + base_url + '/jsonapi/commerce_order/default/' + order_uuid + '', {
                                                                    method: 'PATCH',
                                                                    body: JSON.stringify({
                                                                        "data": {
                                                                            "type": "commerce_order--default",
                                                                            "id": order_uuid,
                                                                            "relationships": {
                                                                                "coupons": {
                                                                                    "data": [
                                                                                        {
                                                                                            "type": "commerce_promotion_coupon--commerce_promotion_coupon",
                                                                                            "id": coupon_id,
                                                                                            "attributes": {
                                                                                                "uuid": coupon_id
                                                                                            }
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            }
                                                                        }
                                                                    }),
                                                                    headers: {
                                                                        "Content-Type": "application/json; charset=utf-8",

                                                                    }
                                                                })
                                                                    .then(function (response) {
                                                                        return response.json();
                                                                    })

                                                                    .then(function (response) {
                                                                        console.log(response);
                                                                        order_total_price = response.data.attributes.total_price.number;
                                                                        order_coupon_length = response.data.relationships.coupons.data.length;
                                                                        // console.log(order_total_price);
                                                                        // console.log(order_coupon_length);

                                                                        //create payment controller 

                                                                        fetch('' + base_url + '/order/payment_create', {
                                                                            method: 'post',
                                                                            body: JSON.stringify({
                                                                                "order_id": order_id
                                                                            }),
                                                                            headers: {
                                                                                "Content-Type": "application/json; charset=utf-8"


                                                                            }
                                                                        })

                                                                        if (order_coupon_length === 0) {//case when coupon not attach to order
                                                                            alert('coupon invalid');
                                                                            document.getElementById('coupon_input').value = '';
                                                                            $("#pay-btn-summary").css('display', 'block');
                                                                            $("#loader").css('display', 'none');
                                                                        }
                                                                        else {
                                                                            alert('coupon attached Successfully !');
                                                                            var options = {
                                                                                "key": razorpay_key,
                                                                                "subscription_id": subscription_id,
                                                                                "name": "FirstU Subscriptions",
                                                                                "handler": function (response) {
                                                                                    payment_id = response.razorpay_payment_id;
                                                                                    fbq('track', 'Purchase', { value: unit_price, currency: 'INR' });
                                                                                    alert('Thanks for subscribing, welcome to the FirstU family. You will receive the welcome mail and message shortly. We are here to help if you need it. Call us at +91-9686993660 or write to us at support@firstu.in');
                                                                                    window.ReactNativeWebView.postMessage("Subscribed")

                                                                                },
                                                                                "notes": {
                                                                                    "order_id": order_id,
                                                                                    "payment_type": mode_payment

                                                                                },
                                                                            };


                                                                            // console.log(response); // here subscription id is printing
                                                                            var rzp1 = new Razorpay(options);
                                                                            rzp1.open();

                                                                            $("#pay-btn-summary").css('display', 'block');
                                                                            $("#loader").css('display', 'none');
                                                                        }
                                                                    })

                                                            })
                                                            .catch(function (error) {
                                                                //create payment controller 

                                                                fetch('' + base_url + '/order/payment_create', {
                                                                    method: 'post',
                                                                    body: JSON.stringify({
                                                                        "order_id": order_id
                                                                    }),
                                                                    headers: {
                                                                        "Content-Type": "application/json; charset=utf-8"


                                                                    }
                                                                })
                                                                alert('coupon code is invalid');
                                                                document.getElementById('coupon_input').value = '';
                                                                $("#pay-btn-summary").css('display', 'block');
                                                                $("#loader").css('display', 'none');
                                                            });

                                                    } // end else (coupon box is not  empty)


                                                }) //order subscribe end


                                        }) // order assign close




                                }) // order creation close



                        }) // order item response close




                }) //final then response function of first fetch i.e billing profile

        }//end if of checking "credit card" or supported debit card



        else if (debit_card_bank === 'One-Time-Payment') {

            $("#pay-btn-summary").css('display', 'none');
            $("#loader").css('display', 'block');


            //create billing profile

            fetch('' + base_url + '/jsonapi/profile/customer', {
                method: 'post',
                body: JSON.stringify({
                    "data": {
                        "type": "profile--customer",
                        "attributes": {
                            "status": true,
                            "is_default": true,
                            "field_billing_address": address,
                            "field_current_running_kms": running_kms,
                            "field_email": email,
                            "field_model_and_make": model,
                            "field_name": name,
                            "field_phone": phone,
                            "field_vehicle_registration_numbe": vehicle_registration
                        },
                        "relationships": {
                            "type": {
                                "data": {
                                    "type": "profile_type--profile_type",
                                    "id": "aaf4e4cb-ccc5-4abf-a820-142017c40246"
                                }
                            }
                        }
                    }
                }),
                headers: {
                    "Content-Type": "application/json; charset=utf-8",

                }
            })


                .then(function (response) {

                    console.log('billing profile created');
                    return response.json();
                })

                .then(function (response) {
                    revision_id = response.data.attributes.revision_id;
                    // console.log(revision_id);
                    customer_id = response.data.attributes.uuid;
                    // console.log(customer_id);
                    return response;
                })

                .then(function (response) {

                    fetch('' + base_url + '/jsonapi/commerce_order_item/default', {
                        method: 'post',
                        body: JSON.stringify({
                            "data": {
                                "type": "commerce_order_item--default",
                                "attributes": {
                                    "quantity": "1.00",
                                    "title": product_title,
                                    "unit_price": {
                                        "number": unit_price,
                                        "currency_code": "INR"
                                    }
                                },
                                "relationships": {
                                    "purchased_entity": {
                                        "data": {
                                            "type": "commerce_product_variation--car",
                                            "id": product_variation_id
                                        }
                                    }
                                }

                            }
                        }),
                        headers: {
                            "Content-Type": "application/json; charset=utf-8",

                        }
                    })


                        .then(function (response) {

                            console.log('order item created');
                            return response.json();
                        })

                        .then(function (response) {
                            order_item_id = response.data.attributes.uuid;
                            return response;
                        })

                        .then(function (response) {
                            fetch('' + base_url + '/jsonapi/commerce_order/default', {
                                method: 'post',
                                body: JSON.stringify({
                                    "data": {
                                        "type": "commerce_order--default",
                                        "attributes": {
                                            "state": "draft",
                                            "checkout_step": "complete",
                                            "order_number": "101",
                                            "placed": timeStamp
                                        },
                                        "relationships": {

                                            "store_id": {
                                                "data": {
                                                    "type": "commerce_store--online",
                                                    "id": "6d4798d6-eb40-47e4-9ca2-52f3c363436a"
                                                }

                                            },

                                            "order_items": {
                                                "data": [{
                                                    "type": "commerce_order_item--default",
                                                    "id": order_item_id
                                                }]
                                            },

                                            "billing_profile": {
                                                "data": {
                                                    "type": "profile--customer",
                                                    "id": customer_id,
                                                    "meta": {
                                                        "target_revision_id": revision_id
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }),
                                headers: {
                                    "Content-Type": "application/json; charset=utf-8",

                                }
                            })

                                .then(function (response) {
                                    console.log('order created');
                                    return response.json();
                                })

                                .then(function (response) {

                                    order_id = response.data.attributes.order_id;
                                    order_uuid = response.data.attributes.uuid;

                                    // console.log(order_id);

                                    fetch('' + base_url + '/order/assign', {

                                        method: 'post',
                                        body: JSON.stringify({
                                            "uid": uid,
                                            "order_id": order_id,
                                            "payment_type": debit_card_bank,
                                            "location": city,
                                            "lat_lng": lat_lng
                                        }),
                                        headers: {
                                            "Content-Type": "application/json; charset=utf-8",
                                            "Accept": "text/html; charset=UTF-8"

                                        }
                                    })


                                        .then(function (response) {

                                            console.log('order assigned to user');
                                            return response.text();

                                        })

                                        .then(function (response) {

                                            if (coupon_input === null) { //checking if coupon field is empty
                                                console.log('coupon empty');

                                                //create payment controller

                                                fetch('' + base_url + '/order/payment_create', {
                                                    method: 'post',
                                                    body: JSON.stringify({
                                                        "order_id": order_id
                                                    }),
                                                    headers: {
                                                        "Content-Type": "application/json; charset=utf-8"

                                                    }
                                                })


                                                var options = {
                                                    "key": razorpay_key,
                                                    "subscription_id": subscription_id,
                                                    "amount": unit_price + '00', // 2000 paise = INR 20
                                                    "name": "FirstU Subscriptions",
                                                    "handler": function (response) {
                                                        payment_id = response.razorpay_payment_id;
                                                        fbq('track', 'Purchase', { value: unit_price, currency: 'INR' });
                                                        alert('Thanks for subscribing, welcome to the FirstU family. You will receive the welcome mail and message shortly. We are here to help if you need it. Call us at +91-9686993660 or write to us at support@firstu.in');
                                                        window.ReactNativeWebView.postMessage("Subscribed")

                                                    },
                                                    "notes": {
                                                        "order_id": order_id,
                                                        "payment_type": debit_card_bank

                                                    },
                                                };



                                                // console.log(response); // here subscription id is printing
                                                var rzp1 = new Razorpay(options);
                                                rzp1.open();

                                                $("#pay-btn-summary").css('display', 'block');
                                                $("#loader").css('display', 'none');

                                            }  // end if checking coupon field is empty


                                            else {  // else (coupon box is not empty)

                                                console.log('coupon not empty');
                                                fetch('' + base_url + '/jsonapi/commerce_promotion_coupon/commerce_promotion_coupon?filter[couponFilter][condition][path]=code&filter[couponFilter][condition][value]=' + coupon_input + '', {
                                                    method: 'get',
                                                    headers: {
                                                        "Content-Type": "application/json; charset=utf-8",

                                                    }
                                                })


                                                    .then(function (response) {

                                                        console.log('Get coupon uuid');
                                                        return response.json();
                                                    })
                                                    .then(function (response) {
                                                        coupon_id = response.data[0].attributes.uuid;
                                                        return coupon_id;

                                                    })
                                                    .then(function (response) {

                                                        fetch('' + base_url + '/jsonapi/commerce_order/default/' + order_uuid + '', {
                                                            method: 'PATCH',
                                                            body: JSON.stringify({
                                                                "data": {
                                                                    "type": "commerce_order--default",
                                                                    "id": order_uuid,
                                                                    "relationships": {
                                                                        "coupons": {
                                                                            "data": [
                                                                                {
                                                                                    "type": "commerce_promotion_coupon--commerce_promotion_coupon",
                                                                                    "id": coupon_id,
                                                                                    "attributes": {
                                                                                        "uuid": coupon_id
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                }
                                                            }),
                                                            headers: {
                                                                "Content-Type": "application/json; charset=utf-8",

                                                            }
                                                        })
                                                            .then(function (response) {
                                                                return response.json();
                                                            })

                                                            .then(function (response) {
                                                                console.log(response);
                                                                order_total_price = response.data.attributes.total_price.number;
                                                                order_coupon_length = response.data.relationships.coupons.data.length;
                                                                // console.log(order_total_price);
                                                                // console.log(order_coupon_length);

                                                                //create payment controller 

                                                                fetch('' + base_url + '/order/payment_create', {
                                                                    method: 'post',
                                                                    body: JSON.stringify({
                                                                        "order_id": order_id
                                                                    }),
                                                                    headers: {
                                                                        "Content-Type": "application/json; charset=utf-8"


                                                                    }
                                                                })

                                                                if (order_coupon_length === 0) {//case when coupon not attach to order
                                                                    alert('coupon invalid');
                                                                    document.getElementById('coupon_input').value = '';
                                                                    $("#pay-btn-summary").css('display', 'block');
                                                                    $("#loader").css('display', 'none');
                                                                }
                                                                else {
                                                                    alert('coupon attached Successfully');
                                                                    var options = {
                                                                        "key": razorpay_key,
                                                                        "amount": order_total_price + '00', // 2000 paise = INR 20
                                                                        "name": "FirstU Subscriptions",
                                                                        "handler": function (response) {
                                                                            payment_id = response.razorpay_payment_id;
                                                                            fbq('track', 'Purchase', { value: order_total_price, currency: 'INR' });
                                                                            alert('Thanks for subscribing, welcome to the FirstU family. You will receive the welcome mail and message shortly. We are here to help if you need it. Call us at +91-9686993660 or write to us at support@firstu.in');
                                                                            window.ReactNativeWebView.postMessage("Subscribed")

                                                                        },
                                                                        "notes": {
                                                                            "order_id": order_id,
                                                                            "payment_type": debit_card_bank

                                                                        },
                                                                    };



                                                                    // console.log(response); // here subscription id is printing
                                                                    var rzp1 = new Razorpay(options);
                                                                    rzp1.open();

                                                                    $("#pay-btn-summary").css('display', 'block');
                                                                    $("#loader").css('display', 'none');
                                                                }
                                                            })

                                                    })
                                                    .catch(function (error) {
                                                        //create payment controller 

                                                        fetch('' + base_url + '/order/payment_create', {
                                                            method: 'post',
                                                            body: JSON.stringify({
                                                                "order_id": order_id
                                                            }),
                                                            headers: {
                                                                "Content-Type": "application/json; charset=utf-8"


                                                            }
                                                        })
                                                        alert('coupon code is invalid');
                                                        document.getElementById('coupon_input').value = '';
                                                        $("#pay-btn-summary").css('display', 'block');
                                                        $("#loader").css('display', 'none');
                                                    });

                                            } // end else (coupon box is not  empty)







                                        }) // order assign close




                                }) // order creation close



                        }) // order item response close




                }) //final then response function of first fetch i.e billing profile

        }//end if checking other banks debit card



        else if (mode_payment === 'emandate') {
            console.log('emandate');
            //clicking on pay now hide button and show loading
            $("#pay-btn-summary").css('display', 'none');
            $("#loader").css('display', 'block');

            //create billing profile

            fetch('' + base_url + '/jsonapi/profile/customer', {
                method: 'post',
                body: JSON.stringify({
                    "data": {
                        "type": "profile--customer",
                        "attributes": {
                            "status": true,
                            "is_default": true,
                            "field_billing_address": address,
                            "field_current_running_kms": running_kms,
                            "field_email": email,
                            "field_model_and_make": model,
                            "field_name": name,
                            "field_phone": phone,
                            "field_vehicle_registration_numbe": vehicle_registration
                        },
                        "relationships": {
                            "type": {
                                "data": {
                                    "type": "profile_type--profile_type",
                                    "id": "aaf4e4cb-ccc5-4abf-a820-142017c40246"
                                }
                            }
                        }
                    }
                }),
                headers: {
                    "Content-Type": "application/json; charset=utf-8",

                }
            })


                .then(function (response) {

                    console.log('billing profile created');
                    return response.json();
                })

                .then(function (response) {
                    revision_id = response.data.attributes.revision_id;
                    // console.log(revision_id);
                    customer_id = response.data.attributes.uuid;
                    // console.log(customer_id);
                    return response;
                })

                .then(function (response) {

                    fetch('' + base_url + '/jsonapi/commerce_order_item/default', {
                        method: 'post',
                        body: JSON.stringify({
                            "data": {
                                "type": "commerce_order_item--default",
                                "attributes": {
                                    "quantity": "1.00",
                                    "title": product_title,
                                    "unit_price": {
                                        "number": unit_price,
                                        "currency_code": "INR"
                                    }
                                },
                                "relationships": {
                                    "purchased_entity": {
                                        "data": {
                                            "type": "commerce_product_variation--car",
                                            "id": product_variation_id
                                        }
                                    }
                                }

                            }
                        }),
                        headers: {
                            "Content-Type": "application/json; charset=utf-8",

                        }
                    })


                        .then(function (response) {

                            console.log('order item created');
                            return response.json();
                        })

                        .then(function (response) {
                            order_item_id = response.data.attributes.uuid;
                            return response;
                        })

                        .then(function (response) {
                            fetch('' + base_url + '/jsonapi/commerce_order/default', {
                                method: 'post',
                                body: JSON.stringify({
                                    "data": {
                                        "type": "commerce_order--default",
                                        "attributes": {
                                            "state": "draft",
                                            "checkout_step": "complete",
                                            "order_number": "101",
                                            "placed": timeStamp
                                        },
                                        "relationships": {

                                            "store_id": {
                                                "data": {
                                                    "type": "commerce_store--online",
                                                    "id": "6d4798d6-eb40-47e4-9ca2-52f3c363436a"
                                                }

                                            },

                                            "order_items": {
                                                "data": [{
                                                    "type": "commerce_order_item--default",
                                                    "id": order_item_id
                                                }]
                                            },

                                            "billing_profile": {
                                                "data": {
                                                    "type": "profile--customer",
                                                    "id": customer_id,
                                                    "meta": {
                                                        "target_revision_id": revision_id
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }),
                                headers: {
                                    "Content-Type": "application/json; charset=utf-8",

                                }
                            })

                                .then(function (response) {
                                    console.log('order created');
                                    return response.json();
                                })

                                .then(function (response) {

                                    order_id = response.data.attributes.order_id;
                                    order_uuid = response.data.attributes.uuid;

                                    // console.log(order_id);

                                    fetch('' + base_url + '/order/assign', {
                                        method: 'post',
                                        body: JSON.stringify(

                                            {
                                                "uid": uid,
                                                "order_id": order_id,
                                                "payment_type": mode_payment,
                                                "location": city,
                                                "lat_lng": lat_lng
                                            }
                                        ),
                                        headers: {
                                            "Content-Type": "application/json; charset=utf-8",
                                            "Accept": "text/html; charset=UTF-8"

                                        }
                                    })


                                        .then(function (response) {

                                            console.log('order assigned to user');
                                            return response.text();

                                        })

                                        .then(function (response) {

                                            //steps for emandate 

                                            fetch('' + base_url + '/order/emandate', {
                                                method: 'post',
                                                body: JSON.stringify({
                                                    "name": name,
                                                    "email": email,
                                                    "contact": phone,
                                                    "fail_existing": "0",
                                                    "notes": {}
                                                }),
                                                headers: {
                                                    "Content-Type": "application/json; charset=utf-8",

                                                }
                                            })

                                                .then(function (response) {

                                                    console.log('customer created in razorpay');
                                                    return response.json();
                                                })

                                                .then(function (response) {

                                                    razorpay_customer_id = response.notes.customer_id;
                                                    order_zero_id = response.id;
                                                    // console.log(razorpay_customer_id);
                                                    // console.log(order_zero_id);

                                                    //coupon checking
                                                    if (coupon_input === null) { //checking if coupon field is empty
                                                        console.log('coupon empty');

                                                        //create payment controller

                                                        fetch('' + base_url + '/order/payment_create', {
                                                            method: 'post',
                                                            body: JSON.stringify({
                                                                "order_id": order_id
                                                            }),
                                                            headers: {
                                                                "Content-Type": "application/json; charset=utf-8"

                                                            }
                                                        })


                                                        var options = {
                                                            "key": razorpay_key,
                                                            "amount": "0",
                                                            "name": "FirstU Subscriptions",
                                                            "order_id": order_zero_id, //additional parameter
                                                            "customer_id": razorpay_customer_id, //additional parameter
                                                            "recurring": "1", //additional parameter
                                                            "prefill": {
                                                                "name": name,
                                                                "email": email,
                                                                "contact": phone,
                                                                "method": "emandate",
                                                            },
                                                            "handler": function (response) {
                                                                // alert(response.razorpay_payment_id);
                                                                // alert(response.razorpay_order_id);
                                                                // alert(response.razorpay_signature);

                                                                pass_emandate_response(response);

                                                                alert('Thanks for subscribing, welcome to the FirstU family. You will receive the welcome mail and message shortly. We are here to help if you need it. Call us at +91-9686993660 or write to us at support@firstu.in');
                                                                window.ReactNativeWebView.postMessage("Subscribed")

                                                            },
                                                            "notes": {
                                                                "order_id": order_id,
                                                                "razorpay_customer_id": razorpay_customer_id,
                                                                "phone": phone,
                                                                "email": email,
                                                                "unit_price": unit_price,
                                                            }
                                                        };

                                                        var rzp1 = new Razorpay(options);
                                                        rzp1.open();
                                                        $("#pay-btn-summary").css('display', 'block');
                                                        $("#loader").css('display', 'none')

                                                    }  // end if checking coupon field is empty


                                                    else {  // else (coupon box is not empty)

                                                        console.log('coupon not empty');
                                                        fetch('' + base_url + '/jsonapi/commerce_promotion_coupon/commerce_promotion_coupon?filter[couponFilter][condition][path]=code&filter[couponFilter][condition][value]=' + coupon_input + '', {
                                                            method: 'get',
                                                            headers: {
                                                                "Content-Type": "application/json; charset=utf-8",

                                                            }
                                                        })


                                                            .then(function (response) {

                                                                console.log('Get coupon uuid');
                                                                return response.json();
                                                            })
                                                            .then(function (response) {
                                                                coupon_id = response.data[0].attributes.uuid;
                                                                return coupon_id;

                                                            })
                                                            .then(function (response) {

                                                                fetch('' + base_url + '/jsonapi/commerce_order/default/' + order_uuid + '', {
                                                                    method: 'PATCH',
                                                                    body: JSON.stringify({
                                                                        "data": {
                                                                            "type": "commerce_order--default",
                                                                            "id": order_uuid,
                                                                            "relationships": {
                                                                                "coupons": {
                                                                                    "data": [
                                                                                        {
                                                                                            "type": "commerce_promotion_coupon--commerce_promotion_coupon",
                                                                                            "id": coupon_id,
                                                                                            "attributes": {
                                                                                                "uuid": coupon_id
                                                                                            }
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            }
                                                                        }
                                                                    }),
                                                                    headers: {
                                                                        "Content-Type": "application/json; charset=utf-8",

                                                                    }
                                                                })
                                                                    .then(function (response) {
                                                                        return response.json();
                                                                    })

                                                                    .then(function (response) {
                                                                        console.log(response);
                                                                        order_total_price = response.data.attributes.total_price.number;
                                                                        order_coupon_length = response.data.relationships.coupons.data.length;
                                                                        // console.log(order_total_price);
                                                                        // console.log(order_coupon_length);

                                                                        //create payment controller 

                                                                        fetch('' + base_url + '/order/payment_create', {
                                                                            method: 'post',
                                                                            body: JSON.stringify({
                                                                                "order_id": order_id
                                                                            }),
                                                                            headers: {
                                                                                "Content-Type": "application/json; charset=utf-8"


                                                                            }
                                                                        })

                                                                        if (order_coupon_length === 0) {//case when coupon not attach to order
                                                                            alert('coupon invalid');
                                                                            document.getElementById('coupon_input').value = '';
                                                                            $("#pay-btn-summary").css('display', 'block');
                                                                            $("#loader").css('display', 'none');
                                                                        }
                                                                        else {
                                                                            alert('coupon attached Successfully');
                                                                            var options = {
                                                                                "key": razorpay_key,
                                                                                "amount": "0",
                                                                                "name": "FirstU Subscriptions",
                                                                                "order_id": order_zero_id, //additional parameter
                                                                                "customer_id": razorpay_customer_id, //additional parameter
                                                                                "recurring": "1", //additional parameter
                                                                                "prefill": {
                                                                                    "name": name,
                                                                                    "email": email,
                                                                                    "contact": phone,
                                                                                    "method": "emandate",
                                                                                },
                                                                                "handler": function (response) {
                                                                                    // alert(response.razorpay_payment_id);
                                                                                    // alert(response.razorpay_order_id);
                                                                                    // alert(response.razorpay_signature);

                                                                                    pass_emandate_response(response);

                                                                                    alert('Thanks for subscribing, welcome to the FirstU family. You will receive the welcome mail and message shortly. We are here to help if you need it. Call us at +91-9686993660 or write to us at support@firstu.in');
                                                                                    window.ReactNativeWebView.postMessage("Subscribed")


                                                                                },
                                                                                "notes": {
                                                                                    "order_id": order_id,
                                                                                    "razorpay_customer_id": razorpay_customer_id,
                                                                                    "phone": phone,
                                                                                    "email": email,
                                                                                    "unit_price": unit_price,
                                                                                }
                                                                            };

                                                                            var rzp1 = new Razorpay(options);
                                                                            rzp1.open();
                                                                            $("#pay-btn-summary").css('display', 'block');
                                                                            $("#loader").css('display', 'none')
                                                                        }
                                                                    })

                                                            })
                                                            .catch(function (error) {
                                                                //create payment controller 

                                                                fetch('' + base_url + '/order/payment_create', {
                                                                    method: 'post',
                                                                    body: JSON.stringify({
                                                                        "order_id": order_id
                                                                    }),
                                                                    headers: {
                                                                        "Content-Type": "application/json; charset=utf-8"


                                                                    }
                                                                })
                                                                alert('coupon code is invalid');
                                                                document.getElementById('coupon_input').value = '';
                                                                $("#pay-btn-summary").css('display', 'block');
                                                                $("#loader").css('display', 'none');
                                                            });

                                                    } // end else (coupon box is not  empty)




                                                })





                                        }) // order assign close




                                }) // order creation close



                        }) // order item response close




                }) //final then response function of first fetch i.e billing profile






        } // end else if checking "emandate"
    }

} // function validation end
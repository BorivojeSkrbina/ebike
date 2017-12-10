$(document).ready(function () {

               
                $(function () {
                    $(".contact-form").validate({
                        highlight: function (element) {
                            $(element).closest('.form-group').addClass("has-danger");
                            $(element).addClass("form-control-danger");
                        },
                        unhighlight: function (element) {
                            $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
                            $(element).removeClass('form-control-danger').addClass('form-control-success');
                        },
                        rules: {
                            /*name: {
                                required: true,
                                rangelength: [2, 20]
                            },
                            email:{
                                required: true,
                                email: true
                            },
                            password:{
                               required: true,
                               minlength: 6
                            },
                            rePassword:{
                                required: true,
                                equalTo: "#password"
                            },
                            exampleRadios:{
                                required: true
                            },
                            check:{
                               required: true 
                            },
                            city:{
                               required: true  
                            }*/
                            

                        },
                        messages: {
                            series: {
                                required: "The *Name field is required!",
                                rangelength: "The *Name must be between 2 and 20 characters!"
                            },
                            parallel:{
                                required: "The *Email field is required!",
                                email: 'Please enter a valid email address!'
                            },
                            cellcapacity:{
                                required: "The *Email field is required!",
                                email: 'Please enter a valid email address!'
                            }/*,
                            password:{
                               required: "The *Password field is required!",
                               minlength: "The *Password must have at least 6 characters!"
                            },
                            rePassword:{
                                required: "The *rePassword field is required!",
                                equalTo: "The Password doesn't match !"
                            },
                            exampleRadios:{
                                required: "The *Radio field is required!"
                            },
                            check:{
                               required: 'The *Check field is required!'
                            },
                            city:{
                               required: 'The *City field is required!' 
                            }*/
                            
                        },
                        errorElement: 'p',
                        errorPlacement: function (error, element) {
                            error.appendTo($(element).closest('.form-group').find('.error'));
                        }

                    });
                });
            });
            //Form Validation
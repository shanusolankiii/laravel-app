import { email } from '@vuelidate/validators';
import 'bootstrap';
import $ from 'jquery';
var jQuery = $;
import select2 from 'select2';
import validate from '../../../node_modules/jquery-validation/dist/jquery.validate';
import ClassicEditor from '../../../node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor'


$( document ).ready(function() {
   
  // Variables declarations  
  var $wrapper = $('.main-wrapper');
  var $pageWrapper = $('.page-wrapper'); 

  // Small Sidebar
  $(document).on('click', '#toggle_btn', function() {
    if($('body').hasClass('mini-sidebar')) {
      $('body').removeClass('mini-sidebar');
      $('.subdrop + ul').slideDown();
    } else {
      $('body').addClass('mini-sidebar');
      $('.subdrop + ul').slideUp();
    }
    return false;
  });

  $(document).on('mouseover', function(e) {
    e.stopPropagation();
    if($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
      var targ = $(e.target).closest('.sidebar').length;
      if(targ) {
        $('body').addClass('expand-menu');
        $('.subdrop + ul').slideDown();
      } else {
        $('body').removeClass('expand-menu');
        $('.subdrop + ul').slideUp();
      }
      return false;
    }
  });

  // Sidebar  
  var Sidemenu = function() {
    this.$menuItem = $('#sidebar-menu a');
  };

  function init() {
    var $this = Sidemenu;
    $('#sidebar-menu a').on('click', function(e) {
      if($(this).parent().hasClass('submenu')) {
        e.preventDefault();
      }
      if(!$(this).hasClass('subdrop')) {
        $('ul', $(this).parents('ul:first')).slideUp(350);
        $('a', $(this).parents('ul:first')).removeClass('subdrop');
        $(this).next('ul').slideDown(350);
        $(this).addClass('subdrop');
      } else if($(this).hasClass('subdrop')) {
        $(this).removeClass('subdrop');
        $(this).next('ul').slideUp(350);
      }
    });
    $('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
  }

  // Sidebar Initiate
  init(); 

  // Mobile menu sidebar overlay
  
  $('body').append('<div class="sidebar-overlay"></div>');
  $(document).on('click', '#mobile_btn', function() {
    $wrapper.toggleClass('slide-nav');
    $('.sidebar-overlay').toggleClass('opened');
    $('html').addClass('menu-opened');
    return false;
  });
  
  $(".sidebar-overlay").on("click", function () {
    $('html').removeClass('menu-opened');
    $(this).removeClass('opened');
    $wrapper.removeClass('slide-nav');
    $('.sidebar-overlay').removeClass('opened');
  });  

  // Select 2  
  if($('.select').length > 0) {
    $('.select').select2({
      minimumResultsForSearch: -1,
      width: '100%'
    });
  }
    var elementCkeditor = document.querySelector( '.ckeditor' );
//   About Us Editor
    if(typeof(elementCkeditor) != 'undefined' && elementCkeditor != null){
        ClassicEditor
            .create( document.querySelector( '.ckeditor' ),{removePlugins: ['CKFinderUploadAdapter', 'CKFinder', 'EasyImage', 'Image', 'ImageCaption', 'ImageStyle', 'ImageToolbar', 'ImageUpload', 'MediaEmbed','Link','Table']} )
            .then( editor => {
                window.editor = editor;        
                toolbar: [
                    'heading',
                    'bold',
                    'italic',            
                    'bulletedList',
                    'numberedList',            
                    'blockQuote',
                    'undo',
                    'redo'
                ]
            } )
            .catch( error => {
                console.error( 'There was a problem initializing the editor.', error );
            } ); 
    }      
  // Profile Page
  $(".bio-content .readmore").on("click", function () {
    $('.bio-content .text').addClass('fulltext');
    $('.bio-content .readmore').hide('');
  });

  $.validator.addMethod("lettersnumberonly", function(value, element) {
    return this.optional(element) || /^[a-zA-Z(0-9) ]{2,30}$/i.test(value);
  }, "Please enter alphabets or digits"); 

  $.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-zA-Z ]{2,60}$/i.test(value);
  }, "Please enter alphabets"); 

  $.validator.addMethod("clinicname", function(value, element) {
    return this.optional(element) || /^[a-zA-Z' ]{2,60}$/i.test(value);
  }, "Please enter alphabets");
  
  $.validator.addMethod("yearonly", function(value, element) {
    return this.optional(element) || /^(19[6-9][0-9]|200[0-9]|201[0-9]|202[0-3])$/i.test(value);
  }, "Please enter a valid year"); 

//   $.validator.addMethod("validphone", function(value, element) {
//     return this.optional(element) || /^(\(\+[0-9]{2}\))?([0-9]{3}-?)?([0-9]{3})\-?([0-9]{4})(\/[0-9]{4})?$/i.test(value);
//   }, "Please enter a valid phone number"); 

// $.validator.addMethod("youtubevideo", function(value, element) {
//     return this.optional(element) || /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]+$/i.test(value);
// }, "Please enter a valid YouTube link");

$.validator.addMethod("youtubevideo", function(value, element) {
    if (this.optional(element)) {
        return true;
    }

    var links = value.split('\n');
    var pattern = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]+$/i;

    for (var i = 0; i < links.length; i++) {
        if (!pattern.test(links[i])) {
            return false;
        }
    }

    return true;
}, "Please enter valid YouTube link(s)");


  
  $('#personal-info-edit-form').validate({ 
    ignore: '',
    rules: {
        // pract_name: {
        //     required: true,
        //     lettersnumberonly:true
        // },
        pract_title: {
            required: true            
        },
        pract_type: {
            required: true,
            lettersonly:true
        },
        pract_designation: {
            required: true,
            lettersonly:true

        },
        pract_email: {
            required: true,
            email:true
        },
        // "pract_languages_spoken[]": {
        //     required: false,
            
        // },
        pract_license_year: {
            required: true,
            yearonly:true           
        },
        // pract_phone: {
        //     required: false,
        //     validphone:true
        // },
        
    },
    errorElement: 'span',
    errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group').append(error);
    },
    highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
    }
});
$('#education-associations-edit-form').validate({ 
    ignore: '',
    rules: {
        // "pract_education[]": {
        //     required: true
        // },
        // "pract_association[]": {
        //     required: true
        // },        
    },
    errorElement: 'span',
    errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group').append(error);
    },
    highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
    }
});
// $('#about-edit-form').validate({ 
//     rules: {
//         pract_bio: {
//             required: false
//         },       
        
//     },
//     errorElement: 'span',
//     errorPlacement: function (error, element) {
//         error.addClass('invalid-feedback');
//         element.closest('.form-group').append(error);
//     },
//     highlight: function (element, errorClass, validClass) {
//         $(element).addClass('is-invalid');
//     },
//     unhighlight: function (element, errorClass, validClass) {
//         $(element).removeClass('is-invalid');
//     }
// });
$('#practice-info-edit-form').validate({ 
    ignore: '',
    rules: {
        "pract_conditions_supported[]": {
            required: true
        },
        // "pract_services[]": {
        //     required: false
        // },
        // pract_accepting_new: {
        //     required: false
        // },
        // pract_direct_bill_ins: {
        //     required: false
        // },
        pract_free_call: {
            required: true,
            
        },       
        
    },
    errorElement: 'span',
    errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group').append(error);
    },
    highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
    }
});
$('#clinic-info-edit-form').validate({ 
    ignore: '',
    rules: {
        pract_visibility: {
            required: false
        },
        "pract_clinic[]": {
            required: false
        },
        
    },
    errorElement: 'span',
    errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group').append(error);
    },
    highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
    }
});
$('#image-edit-form').validate({ 
    rules: {
        pract_profile_image: {
            required: false,
            accept: "image/png,image/jpeg,image/jpg",
            // maxSize:'204800'
        },
    },
    errorElement: 'span',
    errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group').append(error);
    },
    highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
    }
});
$('#add-clinic-edit-form').validate({ 
    rules: {
        clinic_name: {
            required: true,
            // clinicname:true           
        },
        clinic_email: {
            required: true,
            email:true,
        },
        clinic_address_1: {
            required: true
        },        
        clinic_city: {
            required: true
        },
        // clinic_zip_code: {
        //     required: true
        // },        
    },
    errorElement: 'span',
    errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group').append(error);
    },
    highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
    },
    // Submit Handler for Loader
    submitHandler: function(form) {
        // Show the loader before submitting the form
        $("#add-clinic-edit-form-loader").removeClass("d-none");
        // Now, submit the form
        form.submit();
    }
});
// $('#pract_languages_spoken').select2({
//     dropdownParent: $('#personal-info-edit')
// });
// $('.pract_clinic').select2({
//     dropdownParent: $('#clinic-info-edit')
// });
// $('.pract_conditions_supported').select2({
//     dropdownParent: $('#practice-info-edit')
// });
// $('.pract_services').select2({
//     dropdownParent: $('#practice-info-edit')
// });
// $('.pract_association').select2({
//     dropdownParent: $('#education-associations-edit')
// });
// $('.pract_education').select2({
//     dropdownParent: $('#education-associations-edit')
// });

});
$('#virtual-clinic-info-edit-form').validate({ 
    rules: {
        pract_v_clinic_name: {
            required: true
        }, 
        pract_v_clinic_address: {
            required: true
        },
        pract_v_clinic_email: {
            required: true
        },       
        
    },
    errorElement: 'span',
    errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group').append(error);
    },
    highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
    }
});

$('#youtube_video_link').validate({ 
    rules: {
        video_links: {
            youtubevideo: false
        }    
    },
    errorElement: 'span',
    errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group').append(error);
    },
    highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
    }
});


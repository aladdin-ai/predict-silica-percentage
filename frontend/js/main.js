
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input3').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })
    })


    $("#radio1").on('change', function(){
        if ($(this).is(":checked")) {
            $('.input3-select').slideUp(300);
        }
    });

    $("#radio2").on('change', function(){
        if ($(this).is(":checked")) {
            $('.input3-select').slideDown(300);
        }
    });


    /*==================================================================
    [ Validate ]*/
    var Iron_Feed = $('.validate-input input[name="Iron Feed"]');
    var Silica_Feed = $('.validate-input input[name="Silica Feed"]');
    var Starch_Flow = $('.validate-input input[name="Starch Flow"]');
    var Amina_Flow = $('.validate-input input[name="Amina Flow"]');
    var Ore_Pulp_Flow = $('.validate-input input[name="Ore Pulp Flow"]');
    var Ore_Pulp_pH = $('.validate-input input[name="Ore Pulp pH"]');
    var Ore_Pulp_Density = $('.validate-input input[name="Ore Pulp Density"]');
    var Flotation_Column_01_Air_Flow = $('.validate-input input[name="Flotation Column 01 Air Flow"]');
    var Flotation_Column_02_Air_Flow = $('.validate-input input[name="Flotation Column 02 Air Flow"]');
    var Flotation_Column_03_Air_Flow = $('.validate-input input[name="Flotation Column 03 Air Flow"]');
    var Flotation_Column_04_Air_Flow = $('.validate-input input[name="Flotation Column 04 Air Flow"]');
    var Flotation_Column_05_Air_Flow = $('.validate-input input[name="Flotation Column 05 Air Flow"]');
    var Flotation_Column_06_Air_Flow = $('.validate-input input[name="Flotation Column 06 Air Flow"]');
    var Flotation_Column_07_Air_Flow = $('.validate-input input[name="Flotation Column 07 Air Flow"]');
    var Flotation_Column_01_Level = $('.validate-input input[name="Flotation Column 01 Level"]');
    var Flotation_Column_02_Level = $('.validate-input input[name="Flotation Column 02 Level"]');
    var Flotation_Column_03_Level = $('.validate-input input[name="Flotation Column 03 Level"]');
    var Flotation_Column_04_Level = $('.validate-input input[name="Flotation Column 04 Level"]');
    var Flotation_Column_05_Level = $('.validate-input input[name="Flotation Column 05 Level"]');
    var Flotation_Column_06_Level = $('.validate-input input[name="Flotation Column 06 Level"]');
    var Flotation_Column_07_Level = $('.validate-input input[name="Flotation Column 07 Level"]');


    $('.validate-form').on('submit',function(){
        var check = true;

        if($(Iron_Feed).val().trim() == ''){
            showValidate(Iron_Feed);
            check=false;
        }

        if($(Silica_Feed).val().trim() == ''){
            showValidate(Silica_Feed);
            check=false;
        }


        if($(Starch_Flow).val().trim() == ''){
            showValidate(Starch_Flow);
            check=false;
        }


        if($(Amina_Flow).val().trim() == ''){
            showValidate(Amina_Flow);
            check=false;
        }


        if($(Ore_Pulp_Flow).val().trim() == ''){
            showValidate(Ore_Pulp_Flow);
            check=false;
        }


        if($(Ore_Pulp_pH).val().trim() == ''){
            showValidate(Ore_Pulp_pH);
            check=false;
        }


        if($(Ore_Pulp_Density).val().trim() == ''){
            showValidate(Ore_Pulp_Density);
            check=false;
        }


        if($(Flotation_Column_01_Air_Flow).val().trim() == ''){
            showValidate(Flotation_Column_01_Air_Flow);
            check=false;
        }


        if($(Flotation_Column_02_Air_Flow).val().trim() == ''){
            showValidate(Flotation_Column_02_Air_Flow);
            check=false;
        }


        if($(Flotation_Column_03_Air_Flow).val().trim() == ''){
            showValidate(Flotation_Column_03_Air_Flow);
            check=false;
        }


        if($(Flotation_Column_04_Air_Flow).val().trim() == ''){
            showValidate(Flotation_Column_04_Air_Flow);
            check=false;
        }


        if($(Flotation_Column_05_Air_Flow).val().trim() == ''){
            showValidate(Flotation_Column_05_Air_Flow);
            check=false;
        }

        if($(Flotation_Column_06_Air_Flow).val().trim() == ''){
            showValidate(Flotation_Column_06_Air_Flow);
            check=false;
        }

        if($(Flotation_Column_07_Air_Flow).val().trim() == ''){
            showValidate(Flotation_Column_07_Air_Flow);
            check=false;
        }

        if($(Flotation_Column_01_Level).val().trim() == ''){
            showValidate(Flotation_Column_01_Level);
            check=false;
        }

        if($(Flotation_Column_02_Level).val().trim() == ''){
            showValidate(Flotation_Column_02_Level);
            check=false;
        }

        if($(Flotation_Column_03_Level).val().trim() == ''){
            showValidate(Flotation_Column_03_Level);
            check=false;
        }

        if($(Flotation_Column_04_Level).val().trim() == ''){
            showValidate(Flotation_Column_04_Level);
            check=false;
        }

        if($(Flotation_Column_05_Level).val().trim() == ''){
            showValidate(Flotation_Column_05_Level);
            check=false;
        }

        if($(Flotation_Column_06_Level).val().trim() == ''){
            showValidate(Flotation_Column_06_Level);
            check=false;
        }

        if($(Flotation_Column_07_Level).val().trim() == ''){
            showValidate(Flotation_Column_07_Level);
            check=false;
        }



        return check;
    });




    $('.validate-form .input3').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }


})(jQuery);

<!--

function browseFile() {
        $('#hidden-upload').click();
      }

      function updateFileName(obj) {
        var oldExt;
        //if($'#filename').attr('placeholder')
        if($('#hidden-upload').val() != '') {
        //takes care of browse - open valid ext - browse again - cancel 

          var ext = $('#hidden-upload').val().split('.').pop().toLowerCase();
          if($.inArray(ext, ['tsv']) == -1) {
            $(document).ready(function() {
              $('#generate-button').attr('disabled', true);
              $('#filename').val("");
              $('#filename').attr('placeholder', ".tsv files only!");
              $('#validation-state').attr('class', 'form-group has-warning has-feedback glowing-border-warning');
              $('#validation-glyph').attr('class', 'glyphicon glyphicon-warning-sign form-control-feedback');
            });
          }
          else {
            $('#filename').val((obj.value).replace("C:\\fakepath\\", ""));
            $('#validation-state').attr('class', 'form-group has-success has-feedback glowing-border-success');
            $('#validation-glyph').attr('class', 'glyphicon glyphicon-ok form-control-feedback');
            $('#generate-button').removeAttr('disabled');
          }
        }

      }

function upload() {
                $('#upload-form').submit();
              }


 // $(document).ready(function () {
 //              $('#about-href').click(function() {
 //                $('#main-div').html("testing");
 //              });
 //            });
-->
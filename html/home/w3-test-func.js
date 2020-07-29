
$(document).ready(function() {
            $("#btn2").click(function() {
                var y = Math.floor(Math.random() * 100);
                    $("tbody").append('<tr><th scope="row" class="align-middle"><div class="custom-control custom-checkbox d-flex align-items-center text-primary font-weight-medium"><input type="checkbox" class="custom-control-input" id=document.write(y)><label class="custom-control-label" for=document.write(y)></label></div></th><td class="align-middle text-secondary"><small class="d-block"></small><small class="d-block"></small></td><td class="align-middle text-secondary"><small class="d-block"></small></td><td class="align-middle text-secondary small"><span class="fas fa-chair mr-2"></span></td><td class="align-middle"><button type="button" class="btn btn-xs btn-icon btn-primary"><span class="fas fa-check btn-icon__inner"></span></button><button type="button" class="btn btn-xs btn-icon btn-soft-danger" disabled><span class="fas fa-times btn-icon__inner"></span></button></td><td class="align-middle text-secondary"><a class="btn btn-xs btn-icon btn-soft-secondary transition-3d-hover" href="javascript:;" data-toggle="tooltip" data-placement="top" title="Edit"><span class="fas fa-pen btn-icon__inner"></span></a></td></tr>');
      //alert(document.write(y));                     
     });
            });


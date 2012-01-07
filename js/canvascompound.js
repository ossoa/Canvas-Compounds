$(document).ready(function(){
  var compound_carousel = $('#compound-carousel').bxSlider({
    displaySlideQty: 4,
    moveSlideQty: 1,
    prevText: '&#171;',
    nextText: '&#187;'
  });
  
  draw_simple_formula(get_compound());
  
  $("nav[role='canvas-content'] a").click(function(){
    $("nav[role='canvas-content'] a").removeClass('active');
    
    if( $(this).attr('class') == 'simple-formula'){
      draw_simple_formula(get_compound());
    }
    if( $(this).attr('class') == 'formula-2d'){
      draw_2d_formula(get_compound());
    }
    if( $(this).attr('class') == 'formula-3d'){
      draw_3d_formula(get_compound());
    }
    
    return false;
  });

  $('ul.compound-list a').click(function(){
    $("nav[role='canvas-content'] a").removeClass('active');
    
    compound = $(this).attr('href').slice(1);
    draw_simple_formula(compound);
  });

  function get_compound(){
    if( window.location.hash ) compound = (window.location.hash).slice(1);
    else compound = 'o2';
  
    return compound;
  }

  function clear_canvas() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    
    context.clearRect(0,0,canvas.width,canvas.height);
    context.beginPath();
  }

  function draw_simple_formula(compound){
    clear_canvas();
    $('#canvas3d').hide();
    $('aside.for-3d').hide();
    $('#canvas').show();

    context.font = "normal 60px sans-serif";
    context.textAlign = "center";

    generate_simple_formula(compound);
  
    change_layout(compound);
    $("nav[role='canvas-content'] a.simple-formula").addClass('active');
  }

  function draw_2d_formula(compound) {
    clear_canvas();
    $('#canvas3d').hide();
    $('aside.for-3d').hide();
    $('#canvas').show();
  
    generate_2d_formula(compound);
    
    change_layout(compound);
    $("nav[role='canvas-content'] a.formula-2d").addClass('active');
  }

  function draw_3d_formula(compound_f) {
    $('#canvas3d').remove();
    $('aside.for-3d').show();
    $('#canvas').hide();
    $('.compound-item article').append('<canvas id="canvas3d" width="700" height="400">Sorry, this demo requires a web browser which supports HTML5 canvas!</canvas>');
  
    var screen_canvas = document.getElementById('canvas3d');
    var renderer = new Pre3d.Renderer(screen_canvas);
  
    var compound;
    compound = generate_3d_compound(compound_f);
  
    function draw() {
      jQuery.each(compound, function() {
        var el = this;
        renderer.transform = el.trans;
        renderer.fill_rgba = el.color;
        renderer.bufferShape(el.shape);
      });
    
      renderer.ctx.setFillColor(1, 1, 1, 1);
      renderer.drawBackground();
    
      renderer.drawBuffer();
      renderer.emptyBuffer();
    }
  
    renderer.camera.focal_length = 1;
    DemoUtils.autoCamera(renderer, 0, 0, -3.5, 0, 0, 0, draw);
  
    draw();
  
    change_layout(compound_f);
    $("nav[role='canvas-content'] a.formula-3d").addClass('active');
  }

  function generate_simple_formula(compound){
    if     (compound == 'o2')       generate_o2();
    else if(compound == 'co2')      generate_co2();
    else if(compound == 'al2o3')    generate_al2o3();
    else if(compound == 'nh3')      generate_nh3();
    else if(compound == 'hcl')      generate_hcl();
    else if(compound == 'naoh')     generate_naoh();
    else if(compound == 'caoh2')    generate_caoh2();
    else if(compound == 'h2so4')    generate_h2so4();
    else if(compound == 'caco3')    generate_caco3();
    else if(compound == 'c2h6')     generate_c2h6();
    else if(compound == 'ch3oh')    generate_ch3oh();
    else if(compound == 'hcooh')    generate_hcooh();
    else if(compound == 'hooccooh') generate_hooccooh();
    else if(compound == 'c6h6')     generate_c6h6();
    else generate_o2();
  }

  function generate_2d_formula(compound){
    if     (compound == 'o2')       generate_2d_o2();
    else if(compound == 'co2')      generate_2d_co2();
    else if(compound == 'al2o3')    generate_2d_al2o3();
    else if(compound == 'nh3')      generate_2d_nh3();
    else if(compound == 'hcl')      generate_2d_hcl();
    else if(compound == 'naoh')     generate_2d_naoh();
    else if(compound == 'caoh2')    generate_2d_caoh2();
    else if(compound == 'h2so4')    generate_2d_h2so4();
    else if(compound == 'caco3')    generate_2d_caco3();
    else if(compound == 'c2h6')     generate_2d_c2h6();
    else if(compound == 'ch3oh')    generate_2d_ch3oh();
    else if(compound == 'hcooh')    generate_2d_hcooh();
    else if(compound == 'hooccooh') generate_2d_hooccooh();
    else if(compound == 'c6h6')     generate_2d_c6h6();
    else generate_2d_o2();
  }

  function generate_3d_compound(compound){
    if(compound == 'o2')            compound = generate_3d_o2();
    else if(compound == 'co2')      compound = generate_3d_co2();
    else if(compound == 'al2o3')    compound = generate_3d_al2o3();
    else if(compound == 'nh3')      compound = generate_3d_nh3();
    else if(compound == 'hcl')      compound = generate_3d_hcl();
    else if(compound == 'naoh')     compound = generate_3d_naoh();
    else if(compound == 'caoh2')    compound = generate_3d_caoh2();
    else if(compound == 'h2so4')    compound = generate_3d_h2so4();
    else if(compound == 'caco3')    compound = generate_3d_caco3();
    else if(compound == 'c2h6')     compound = generate_3d_c2h6();
    else if(compound == 'ch3oh')    compound = generate_3d_ch3oh();
    else if(compound == 'hcooh')    compound = generate_3d_hcooh();
    else if(compound == 'hooccooh') compound = generate_3d_hooccooh();
    else if(compound == 'c6h6')     compound = generate_3d_c6h6();
    else compound = generate_3d_o2();

    return compound;
  }

  function change_layout(compound){
    if(compound == 'o2')            $('.compound-item h1').html("Oxygen <span class='formula'>O<b>2</b></span>");
    else if(compound == 'co2')      $('.compound-item h1').html("Carbon dioxide <span class='formula'>CO<b>2</b></span>");
    else if(compound == 'al2o3')    $('.compound-item h1').html("Aluminium oxide <span class='formula'>Al<b>2</b>O<b>3</b></span>")
    else if(compound == 'nh3')      $('.compound-item h1').html("Ammonia <span class='formula'>NH<b>3</b></span>");
    else if(compound == 'hcl')      $('.compound-item h1').html("Hydrochloride <span class='formula'>HCl</span>");
    else if(compound == 'naoh')     $('.compound-item h1').html("Sodium hydroxide <span class='formula'>NaOH</span>")
    else if(compound == 'caoh2')    $('.compound-item h1').html("Calcium hydroxide <span class='formula'>Ca(OH)<b>2</b></span>");
    else if(compound == 'h2so4')    $('.compound-item h1').html("Sulfuric Acid <span class='formula'>H<b>2</b>SO<b>4</b></span>");
    else if(compound == 'caco3')    $('.compound-item h1').html("Calcium carbonate <span class='formula'>CaCo<b>3</b></span>");
    else if(compound == 'c2h6')     $('.compound-item h1').html("Ethane <span class='formula'>C<b>2</b>H<b>6</b></span>");
    else if(compound == 'ch3oh')    $('.compound-item h1').html("Methanol <span class='formula'>CH<b>3</b>OH</span>");
    else if(compound == 'hcooh')    $('.compound-item h1').html("Formic acid <span class='formula'>HCOOH</span>");
    else if(compound == 'hooccooh') $('.compound-item h1').html("Oxalic acid <span class='formula'>HOOC-COOH</span>");
    else if(compound == 'c6h6')     $('.compound-item h1').html("Benzene <span class='formula'>C<b>6</b>H<b>6</b></span>");
  
    $('ul.compound-list li a.active').removeClass('active');
    $('ul.compound-list li.'+compound+' a').addClass('active');
    
    var item_index = $('ul.compound-list li').index($('ul.compound-list li.'+compound));
    if ( item_index > 2 && item_index < 12) compound_carousel.goToSlide(item_index - 2);
    else if( item_index <= 2 && item_index > 0) compound_carousel.goToSlide(0);
    else if( item_index >= 12 || item_index == 0) compound_carousel.goToSlide(10);
  }
});

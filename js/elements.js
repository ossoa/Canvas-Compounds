// Molecular Elements
//------------------------------------------------------------
function generate_chemical_bound(x1, y1, x2, y2){
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.strokeStyle = "#000";
  context.stroke();
}

function generate_element(x, y, symbol, fill_color){
  if (typeof x == "undefined") x = 320;
  if (typeof y == "undefined") y = 150;
  
  context.fillStyle = fill_color;
  context.fillText(symbol, x, y);
}

// O Tlen
function generate_o(x,y){
  generate_element(x, y, 'O', '#0994b1');
}

// C Węgiel
function generate_c(x,y){
  generate_element(x, y, 'C', '#848484');
}

// Al Glin
function generate_al(x,y){
  generate_element(x, y, 'Al', '#F91C51');
}

// N Azot - Nitrogen
function generate_n(x,y){
  generate_element(x, y, 'N', '#0D4782');
}

// H Wodór - Hydrogen
function generate_h(x,y){
  generate_element(x, y, 'H', '#F2F2F2');
}

// Cl - Chlor - Chlorine
function generate_cl(x,y){
  generate_element(x, y, 'Cl', '#9BEB14');
}

// Na - Sód - Sodium
function generate_na(x,y){
  generate_element(x, y, 'Na', '#8F1E9E');
}

// S - Siarka - Sulfur
function generate_s(x,y){
  generate_element(x, y, 'S', '#E2DC17');
}

// Ca - Wapń - Calcium
function generate_ca(x,y){
  generate_element(x, y, 'Ca', '#FA9B19');
}

// 2D Elements
//------------------------------------------------------------
function generate_2d_element(x, y, r, fill_color, stroke_color){
  if (typeof x == "undefined") x = 0;
  if (typeof y == "undefined") y = 0;
  
  context.fillStyle = fill_color;
  context.strokeStyle = stroke_color;
  
  context.beginPath();
  context.arc(x,y,r,0,Math.PI*2,true);
  context.closePath();
  context.stroke();
  context.fill();  
}

// O Tlen
function generate_2d_o(x,y,r){
  if (typeof r == "undefined") r = 70;
  generate_2d_element(x, y, r, '#0994b1', '#07788F');
}

// C Węgiel
function generate_2d_c(x,y,r){
  if (typeof r == "undefined") r = 80;
  generate_2d_element(x, y, r, '#848484', '#686868');
}

// Al Glin
function generate_2d_al(x,y){
  generate_2d_element(x, y, 70, '#F91C51', '#E01A49');
}

// N Azot - Nitrogen
function generate_2d_n(x,y){
  generate_2d_element(x, y, 90, '#0D4782', '#09325B');
}

// H Wodór - Hydrogen
function generate_2d_h(x,y,r){
  if (typeof r == "undefined") r = 60;
  generate_2d_element(x, y, r, '#F2F2F2', '#CECECE');
}

// Cl - Chlor - Chlorine
function generate_2d_cl(x,y){
  generate_2d_element(x, y, 100, '#9BEB14', '#7DBC10');
}

// Na - Sód - Sodium
function generate_2d_na(x,y){
  generate_2d_element(x, y, 55, '#8F1E9E', '#681675');
}

// S - Siarka - Sulfur
function generate_2d_s(x,y,r){
  if (typeof r == "undefined") r = 85;
  generate_2d_element(x, y, r, '#E2DC17', '#BFB915');
}

// Ca - Wapń - Calcium
function generate_2d_ca(x,y,r){
  if (typeof r == "undefined") r = 90;
  generate_2d_element(x, y, r, '#FA9B19', '#DB8515');
}

// 3D Elements
//------------------------------------------------------------
// O Tlen - Oxygen
function generate_3d_o(x,y,z){
  if (typeof x == "undefined") x = 0;
  if (typeof y == "undefined") y = 0;
  if (typeof z == "undefined") z = 0;

  var oxygen_element = Pre3d.ShapeUtils.makeSphere(1, 40, 40);
  oxygen_element.color = new Pre3d.RGBA(0.035, 0.58, 0.7, 1);
  oxygen_element.trans = new Pre3d.Transform();
  oxygen_element.trans.translate(x,y,z);
  
  return oxygen_element;
}

// C Węgiel - Carbon
function generate_3d_c(x,y,z){
  if (typeof x == "undefined") x = 0;
  if (typeof y == "undefined") y = 0;
  if (typeof z == "undefined") z = 0;
  
  var carbon_element = Pre3d.ShapeUtils.makeSphere(1.25, 40, 40);
  carbon_element.color = new Pre3d.RGBA(0.4, 0.4, 0.4, 1);
  carbon_element.trans = new Pre3d.Transform();
  carbon_element.trans.translate(x,y,z);
  
  return carbon_element;
}

// Al Glin - Aluminium
function generate_3d_al(x,y,z){
  if (typeof x == "undefined") x = 0;
  if (typeof y == "undefined") y = 0;
  if (typeof z == "undefined") z = 0;
  
  var al_element = Pre3d.ShapeUtils.makeSphere(1, 40, 40);
  al_element.color = new Pre3d.RGBA(0.98, 0.11, 0.32, 1);
  al_element.trans = new Pre3d.Transform();
  al_element.trans.translate(x,y,z);
  
  return al_element;
}

// N Azot - Nitrogen
function generate_3d_n(x,y,z){
  if (typeof x == "undefined") x = 0;
  if (typeof y == "undefined") y = 0;
  if (typeof z == "undefined") z = 0;
  
  var n_element = Pre3d.ShapeUtils.makeSphere(1.4, 40, 40);
  n_element.color = new Pre3d.RGBA(0.027, 0.132, 0.224, 1);
  n_element.trans = new Pre3d.Transform();
  n_element.trans.translate(x,y,z);
  
  return n_element;
}

// H Wodór - Hydrogen
function generate_3d_h(x,y,z){
  if (typeof x == "undefined") x = 0;
  if (typeof y == "undefined") y = 0;
  if (typeof z == "undefined") z = 0;
  
  var h_element = Pre3d.ShapeUtils.makeSphere(0.8, 40, 40);
  h_element.color = new Pre3d.RGBA(0.999, 0.999, 0.999, 1);
  h_element.trans = new Pre3d.Transform();
  h_element.trans.translate(x,y,z);
  
  return h_element;
}

// Cl - Chlor - Chlorine
function generate_3d_cl(x,y,z){
  if (typeof x == "undefined") x = 0;
  if (typeof y == "undefined") y = 0;
  if (typeof z == "undefined") z = 0;
  
  var cl_element = Pre3d.ShapeUtils.makeSphere(1.6, 40, 40);
  cl_element.color = new Pre3d.RGBA(0.61, 0.92, 0.08, 1);
  cl_element.trans = new Pre3d.Transform();
  cl_element.trans.translate(x,y,z);
  
  return cl_element;
}

// Na - Sód - Sodium
function generate_3d_na(x,y,z){
  if (typeof x == "undefined") x = 0;
  if (typeof y == "undefined") y = 0;
  if (typeof z == "undefined") z = 0;
  
  var na_element = Pre3d.ShapeUtils.makeSphere(0.9, 40, 40);
  na_element.color = new Pre3d.RGBA(0.56, 0.12, 0.62, 1);
  na_element.trans = new Pre3d.Transform();
  na_element.trans.translate(x,y,z);
  
  return na_element;
}

// S - Siarka - Sulfur
function generate_3d_s(x,y,z){
  if (typeof x == "undefined") x = 0;
  if (typeof y == "undefined") y = 0;
  if (typeof z == "undefined") z = 0;
  
  var s_element = Pre3d.ShapeUtils.makeSphere(1.5, 40, 40);
  s_element.color = new Pre3d.RGBA(0.89, 0.87, 0.09, 1);
  s_element.trans = new Pre3d.Transform();
  s_element.trans.translate(x,y,z);
  
  return s_element;
}

// Ca - Wapń - Calcium
function generate_3d_ca(x,y,z){
  if (typeof x == "undefined") x = 0;
  if (typeof y == "undefined") y = 0;
  if (typeof z == "undefined") z = 0;
  
  var ca_element = Pre3d.ShapeUtils.makeSphere(1.6, 40, 40);
  ca_element.color = new Pre3d.RGBA(0.98, 0.61, 0.1, 1);
  ca_element.trans = new Pre3d.Transform();
  ca_element.trans.translate(x,y,z);
  
  return ca_element;
}
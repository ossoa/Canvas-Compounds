// Molecular Compounds
//------------------------------------------------------------
function generate_o2(){
  generate_o(300,150);
  generate_chemical_bound(340, 120, 380, 120);
  generate_chemical_bound(340, 135, 380, 135);
  generate_o(420,150);
}

function generate_co2(){
  generate_o(220,150);
  generate_chemical_bound(260, 120, 310, 120);
  generate_chemical_bound(260, 135, 310, 135);
  generate_o(480,150);
  generate_chemical_bound(390, 120, 440, 120);
  generate_chemical_bound(390, 135, 440, 135);
  generate_c(350,150);
}

// Al2O3 - Tlenek glinu - Aluminium oxide
function generate_al2o3(){
  generate_al(235,180);
  generate_chemical_bound(160, 100, 205, 140);
  generate_chemical_bound(150, 110, 195, 150);
  generate_chemical_bound(275, 155, 320, 105);
  
  generate_al(465,180);
  generate_chemical_bound(375, 105, 420, 155);
  generate_chemical_bound(515, 150, 560, 110);
  generate_chemical_bound(505, 140, 550, 100);

  generate_o(130,100);
  generate_o(350,100);
  generate_o(580,100);
}

// NH3 - Amoniak - Ammonia
function generate_nh3(){
  generate_chemical_bound(330, 40, 370, 40);
  generate_n(350,100);
  
  generate_h(250,220);
  generate_chemical_bound(300, 120, 255, 160);
  generate_h(350,220);
  generate_chemical_bound(350, 120, 350, 160);
  generate_h(450,220);
  generate_chemical_bound(400, 120, 445, 160);
}

// HCl - Chlorowodór - Hydrochloride
function generate_hcl(){
  generate_h(280,150);
  generate_chemical_bound(315, 130, 355, 130);
  generate_cl(400,150);
}

// NaOH - Wodorotlenek sodu - Sodium hydroxide
function generate_naoh(){
  generate_na(260,150);
  generate_chemical_bound(320, 130, 360, 130);
  generate_o(400,150);
  generate_chemical_bound(440, 130, 480, 130);
  generate_h(520,150);
}

// Ca(OH)2 - Wodorotlenek wapnia - Calcium hydroxide
function generate_caoh2(){
  generate_ca(240,150);
  generate_chemical_bound(290, 90, 345, 65);
  generate_chemical_bound(290, 170, 345, 195);
  
  generate_o(400,80);
  generate_chemical_bound(440, 60, 485, 60);
  generate_h(520,80);
  generate_o(400,220);
  generate_chemical_bound(440, 200, 485, 200);
  generate_h(520,220);
}

// H2SO4 - Kwas siarkowy VI - Sulfuric Acid
function generate_h2so4(){
  generate_o(180,80);
  generate_chemical_bound(215, 65, 265, 90);
  generate_chemical_bound(210, 75, 260, 100);
  
  generate_o(180,220);
  generate_chemical_bound(210, 180, 260, 165);
  generate_chemical_bound(215, 190, 265, 175);
  
  generate_s(300,150);
  generate_chemical_bound(340, 90, 395, 65);
  generate_chemical_bound(340, 170, 395, 195);
  
  generate_o(450,80);
  generate_chemical_bound(490, 60, 535, 60);
  generate_h(570,80);
  
  generate_o(450,220);
  generate_chemical_bound(490, 200, 535, 200);
  generate_h(570,220);
}

// CaCO3 - Węglan wapnia - Calcium carbonate
function generate_caco3(){
  generate_ca(260, 160);
  generate_chemical_bound(310, 135, 360, 135);
  generate_chemical_bound(310, 145, 360, 145);
  
  generate_c(400, 160);
  generate_chemical_bound(440, 140, 485, 140);
  generate_chemical_bound(440, 110, 485, 75);
  generate_chemical_bound(440, 170, 485, 205);
  
  generate_o(520, 80);
  generate_o(520, 160);
  generate_o(520, 240);
}

// C2H6 - Etan
function generate_c2h6(){
  generate_c(300, 150);
  generate_chemical_bound(330, 130, 370, 130);
  generate_c(400, 150);
  
  generate_h(200, 150);
  generate_chemical_bound(230, 130, 270, 130);
  generate_h(500, 150);
  generate_chemical_bound(430, 130, 470, 130);
  
  generate_h(300, 60);
  generate_chemical_bound(300, 70, 300, 100);
  generate_h(400, 60);
  generate_chemical_bound(400, 70, 400, 100);
  generate_h(300, 240);
  generate_chemical_bound(300, 160, 300, 190);
  generate_h(400, 240);
  generate_chemical_bound(400, 160, 400, 190);
}

// CH3OH - Metanol
function generate_ch3oh(){
  generate_c(300, 150);
  generate_chemical_bound(330, 130, 370, 130);
  generate_h(200, 150);
  generate_chemical_bound(230, 130, 270, 130);
  generate_h(300, 60);
  generate_chemical_bound(300, 70, 300, 100);
  generate_h(300, 240);
  generate_chemical_bound(300, 160, 300, 190);
  generate_o(400, 150);
  generate_chemical_bound(430, 130, 470, 130);
  generate_h(500, 150);
}

// HCOOH - Kwas mrówkowy
function generate_hcooh(){
  generate_h(200, 220);
  generate_chemical_bound(230, 190, 270, 160);
  generate_o(200, 80);
  generate_chemical_bound(235, 65, 275, 95);
  generate_chemical_bound(230, 75, 270, 105);
  generate_c(300, 150);
  generate_chemical_bound(330, 130, 370, 130);
  generate_o(400, 150);
  generate_chemical_bound(430, 130, 470, 130);
  generate_h(500, 150);
}

// HOOC-COOH - Kwas szczawiowy
function generate_hooccooh(){
  generate_c(300, 150);
  generate_chemical_bound(330, 130, 370, 130);
  
  generate_o(200, 220);
  generate_chemical_bound(225, 180, 265, 150);
  generate_chemical_bound(230, 190, 270, 160);
  
  generate_o(200, 80);
  generate_chemical_bound(230, 75, 270, 105);
  generate_h(100, 80);
  generate_chemical_bound(130, 60, 170, 60);

  generate_c(400, 150);
  generate_o(500, 80);
  generate_chemical_bound(425, 95, 465, 65);
  generate_chemical_bound(430, 105, 470, 75);
  
  generate_o(500, 220);
  generate_chemical_bound(430, 155, 470, 185);
  generate_h(600, 220);
  generate_chemical_bound(530, 200, 570, 200);
}

// C6H6 - Benzen
function generate_c6h6(){
  generate_chemical_bound(250, 80, 250, 180);
  generate_chemical_bound(250, 180, 340, 223);
  generate_chemical_bound(340, 223, 430, 180);
  generate_chemical_bound(430, 180, 430, 80);
  generate_chemical_bound(430, 80, 340, 37);
  generate_chemical_bound(250, 80, 340, 37);
  
  generate_chemical_bound(257, 84, 257, 176);
  generate_chemical_bound(340, 215, 425, 175);
  generate_chemical_bound(425, 85, 340, 45);
}

// 2D Compounds
//------------------------------------------------------------
function generate_2d_o2(){  
  generate_2d_o(300,120);
  generate_2d_o(400,120);
}

function generate_2d_co2(){  
  generate_2d_o(250,120);
  generate_2d_o(450,120);
  generate_2d_c(350,120);
}

// Al2O3 - Tlenek glinu - Aluminium oxide
function generate_2d_al2o3(){
  generate_2d_o(170,100);
  generate_2d_o(350,100);
  generate_2d_o(530,100);
  
  generate_2d_al(260,160);
  generate_2d_al(440,160);
}

// NH3 - Amoniak - Ammonia
function generate_2d_nh3(){
  generate_2d_h(350,180);
  generate_2d_n(350,100);
  
  generate_2d_h(270,150);
  generate_2d_h(430,150);
}

// HCl - Chlorowodór - Hydrochloride
function generate_2d_hcl(){
  generate_2d_cl(350,100);
  generate_2d_h(420,180);
}

// NaOH - Wodorotlenek sodu - Sodium hydroxide
function generate_2d_naoh(){
  generate_2d_na(260,130);
  generate_2d_o(350,130);
  generate_2d_h(450,130);
}

// H2SO4 - Kwas siarkowy VI - Sulfuric Acid
function generate_2d_h2so4(){
  generate_2d_h(410,230, 30);
  generate_2d_o(270,100, 35);
  generate_2d_o(370,200, 35);
  generate_2d_s(320,150, 46);
  generate_2d_o(370,100, 35);
  generate_2d_h(410,70, 30);
  generate_2d_o(270,200, 35);
}

// Ca(OH)2 - Wodorotlenek wapnia - Calcium hydroxide
function generate_2d_caoh2(){
  generate_2d_h(410,60,30);
  generate_2d_o(370,100,35);
  generate_2d_ca(320,150,45);
  generate_2d_o(370,200,35);
  generate_2d_h(410,240,30);
}

// CaCO3 - Węglan wapnia - Calcium carbonate
function generate_2d_caco3(){
  generate_2d_o(430, 150, 35);
  generate_2d_ca(300, 150, 45);
  generate_2d_c(370, 150, 40);
  generate_2d_o(415, 100, 35);
  generate_2d_o(415, 200, 35);
}

// C2H6 - Etan
function generate_2d_c2h6(){
  generate_2d_h(475, 130, 30);
  generate_2d_h(350, 190, 30);
  generate_2d_h(350, 70, 30);
  
  generate_2d_c(350, 130, 40);
  generate_2d_c(415, 130, 40);
  
  generate_2d_h(290, 130, 30);
  
  generate_2d_h(415, 70, 30);
  generate_2d_h(415, 190, 30);
}

// CH3OH - Metanol
function generate_2d_ch3oh(){
  generate_2d_h(350, 70, 30);
  generate_2d_h(350, 190, 30);
  generate_2d_c(350, 130, 40);
  generate_2d_h(290, 130, 30);
  
  generate_2d_h(460, 130, 30);
  generate_2d_o(410, 130, 35);
}

// HCOOH - Kwas mrówkowy
function generate_2d_hcooh(){
  generate_2d_h(410, 130, 30);
  generate_2d_h(250, 170, 30);
  generate_2d_o(250, 90, 35);
  generate_2d_c(300, 130, 40);
  generate_2d_o(360, 130, 35);
}

// HOOC-COOH - Kwas szczawiowy
function generate_2d_hooccooh(){
  generate_2d_h(200, 70, 30);
  generate_2d_o(410, 100, 35);
  generate_2d_o(410, 160, 35);
  
  generate_2d_c(300, 130, 40);
  generate_2d_o(250, 170, 35);
  generate_2d_o(250, 90, 35);

  generate_2d_c(360, 130, 40);
  generate_2d_h(460, 180, 30);
}

// C6H6 - Benzen
function generate_2d_c6h6(){
  generate_2d_c(350,80,40);
  generate_2d_c(350,220,40);
  generate_2d_c(290,115,40);
  generate_2d_c(290,185,40);
  generate_2d_c(410,115,40);
  generate_2d_c(410,185,40);
  
  generate_2d_h(350,31,30);
  generate_2d_h(350,269,30);
  generate_2d_h(240,90,30);
  generate_2d_h(240,210,30);
  generate_2d_h(460,90,30);
  generate_2d_h(460,210,30);
}

// 3D Compounds
//------------------------------------------------------------
// O2 - Czasteczka tlenu - Oxygen Compound
function generate_3d_o2(){
  var o2 = [];
  
  a = generate_3d_o(-0.75,0,0);
  b = generate_3d_o(0.75,0,0);
  
  o2.push({shape: a, color: a.color, trans: a.trans});
  o2.push({shape: b,color: b.color,trans: b.trans});
  
  return o2;
}

// CO2 Dwutlenek wegla - Carbon Dioxide
function generate_3d_co2(){
  var co2 = [];
  
  o1 = generate_3d_o(-1.2,0,0);
  c = generate_3d_c(0,0,0);
  o2 = generate_3d_o(1.2,0,0);
  
  co2.push({shape: o1, color: o1.color, trans: o1.trans});
  co2.push({shape: c, color: c.color, trans: c.trans});
  co2.push({shape: o2, color: o2.color, trans: o2.trans});
  
  return co2;
}

// Al2O3 - Tlenek glinu - Aluminium oxide
function generate_3d_al2o3(){
  var al2o3 = [];
  
  o1 = generate_3d_o(-2,0.25,0);
  a1 = generate_3d_al(-1,-0.25,0);
  o2 = generate_3d_o(0,0.25,0);
  a2 = generate_3d_al(1,-0.25,0);
  o3 = generate_3d_o(2,0.25,0);
  
  al2o3.push({shape: o1, color: o1.color, trans: o1.trans});
  al2o3.push({shape: a1, color: a1.color, trans: a1.trans});
  al2o3.push({shape: o2, color: o2.color, trans: o2.trans});
  al2o3.push({shape: a2, color: a2.color, trans: a2.trans});
  al2o3.push({shape: o3, color: o3.color, trans: o3.trans});
  
  return al2o3;
}

// NH3 - Amoniak - Ammonia
function generate_3d_nh3(){
  var nh3 = [];
  
  n = generate_3d_n(0,0.5,0);
  h1 = generate_3d_h(1, -0.5, 0.57);
  h2 = generate_3d_h(0, -0.5, -1.15);
  h3 = generate_3d_h(-1, -0.5, 0.57);
  
  nh3.push({shape: n, color: n.color, trans: n.trans});
  nh3.push({shape: h1, color: h1.color, trans: h1.trans});
  nh3.push({shape: h2, color: h2.color, trans: h2.trans});
  nh3.push({shape: h3, color: h3.color, trans: h3.trans});
  
  return nh3;
}

// HCl - Chlorowodór - Hydrochloride
function generate_3d_hcl(){
  var hcl = [];
  
  cl = generate_3d_cl(-0.25, 0.5, 0);
  h = generate_3d_h(0.75, -0.5, 0);
  
  hcl.push({shape: cl, color: cl.color, trans: cl.trans});
  hcl.push({shape: h, color: h.color, trans: h.trans});
  
  return hcl;
}

// NaOH - Wodorotlenek sodu - Sodium hydroxide
function generate_3d_naoh(){
  var naoh = [];
  
  na = generate_3d_na(-1.2, 0, 0);
  o = generate_3d_o(0,0,0);
  h = generate_3d_h(1.2, 0, 0);
  
  naoh.push({shape: na, color: na.color, trans: na.trans});
  naoh.push({shape: o, color: o.color, trans: o.trans});
  naoh.push({shape: h, color: h.color, trans: h.trans});
  
  return naoh;
}

// Ca(OH)2 - Wodorotlenek wapnia - Calcium hydroxide
function generate_3d_caoh2(){
  var caoh2 = [];
  
  ca = generate_3d_ca(-1.5, 0, 0);
  o1 = generate_3d_o(0,1.4,0);
  h1 = generate_3d_h(1.2, 1.9, 0);
  o2 = generate_3d_o(0,-1.4,0);
  h2 = generate_3d_h(1.2, -1.9, 0);
  
  caoh2.push({shape: ca, color: ca.color, trans: ca.trans});
  caoh2.push({shape: o1, color: o1.color, trans: o1.trans});
  caoh2.push({shape: h1, color: h1.color, trans: h1.trans});
  caoh2.push({shape: o2, color: o2.color, trans: o2.trans});
  caoh2.push({shape: h2, color: h2.color, trans: h2.trans});
  
  return caoh2;
}

// H2SO4 - Kwas siarkowy VI - Sulfuric Acid
function generate_3d_h2so4(){
  var h2so4 = [];
  
  s = generate_3d_s(   0,  0, 0);
  o1 = generate_3d_o( 1.2,  1, 0);
  o2 = generate_3d_o(-1.2,  1, 0);
  o3 = generate_3d_o( 0, -1, 1.2);
  o4 = generate_3d_o( 0, -1, -1.2);
  h1 = generate_3d_h(1.9, 0.5, 0);
  h2 = generate_3d_h(-1, 1.9, 0);
  
  h2so4.push({shape: s, color: s.color, trans: s.trans});
  h2so4.push({shape: o1, color: o1.color, trans: o1.trans});
  h2so4.push({shape: o2, color: o2.color, trans: o2.trans});
  h2so4.push({shape: o3, color: o3.color, trans: o3.trans});
  h2so4.push({shape: o4, color: o4.color, trans: o4.trans});
  h2so4.push({shape: h1, color: h2.color, trans: h1.trans});
  h2so4.push({shape: h2, color: h2.color, trans: h2.trans});
  
  return h2so4;
}

// CaCO3 - Wêglan wapnia - Calcium carbonate
function generate_3d_caco3(){
  var caco3 = [];
  
  ca = generate_3d_ca(-1.7,0,0);
  c = generate_3d_c(0,0,0);
  o1 = generate_3d_o( 1.2,  1.4, 0);
  o2 = generate_3d_o( 1.6,  0, 0);
  o3 = generate_3d_o( 1.2, -1.4, 0);
  
  caco3.push({shape: ca, color: ca.color, trans: ca.trans});
  caco3.push({shape: c, color: c.color, trans: c.trans});
  caco3.push({shape: o1, color: o1.color, trans: o1.trans});
  caco3.push({shape: o2, color: o2.color, trans: o2.trans});
  caco3.push({shape: o3, color: o3.color, trans: o3.trans});
  
  return caco3;
}

// C2H6 - Etan
function generate_3d_c2h6(){
  var c2h6 = [];
  
  c1 = generate_3d_c( 1, 0, 0);
  c2 = generate_3d_c(-1, 0, 0);
  h1 = generate_3d_h( 1.5, 0.7, 0.5);
  h2 = generate_3d_h( 1.5,-0.7, 0.5);
  h3 = generate_3d_h( 1.5, 0, -0.75);
  h4 = generate_3d_h(-1.5, 0.7,-0.5);
  h5 = generate_3d_h(-1.5,-0.7,-0.5);
  h6 = generate_3d_h(-1.5, 0, 0.75);
  
  c2h6.push({shape: c1, color: c1.color, trans: c1.trans});
  c2h6.push({shape: c2, color: c2.color, trans: c2.trans});
  c2h6.push({shape: h1, color: h1.color, trans: h1.trans});
  c2h6.push({shape: h2, color: h2.color, trans: h2.trans});
  c2h6.push({shape: h3, color: h3.color, trans: h3.trans});
  c2h6.push({shape: h4, color: h4.color, trans: h4.trans});
  c2h6.push({shape: h5, color: h5.color, trans: h5.trans});
  c2h6.push({shape: h6, color: h6.color, trans: h6.trans});
  
  return c2h6;
}

// CH3OH - Metanol
function generate_3d_ch3oh(){
  var ch3oh = [];
  
  c = generate_3d_c(-0.75, 0, 0);
  o = generate_3d_o( 0.75, 0, 0);
  h1 = generate_3d_h(-1.5, 0.7,-0.5);
  h2 = generate_3d_h(-1.5,-0.7,-0.5);
  h3 = generate_3d_h(-1.5, 0, 0.75);
  h4 = generate_3d_h(1.5, 0, -0.75);
  
  ch3oh.push({shape: c, color: c.color, trans: c.trans});
  ch3oh.push({shape: o, color: o.color, trans: o.trans});
  ch3oh.push({shape: h1, color: h1.color, trans: h1.trans});
  ch3oh.push({shape: h2, color: h2.color, trans: h2.trans});
  ch3oh.push({shape: h3, color: h3.color, trans: h3.trans});
  ch3oh.push({shape: h4, color: h4.color, trans: h4.trans});
  
  return ch3oh;
}

// HCOOH - Kwas mrówkowy
function generate_3d_hcooh(){
  var hcooh = [];
  
  c = generate_3d_c( -0.75, 0, 0);
  o1 = generate_3d_o( 0.75, 0, 0);
  o2 = generate_3d_o(-1.5, 0.7, 0);
  h1 = generate_3d_h( 1.5, 0.7, 0);
  h2 = generate_3d_h(-1.5,-0.7, 0);
  
  hcooh.push({shape: c, color: c.color, trans: c.trans});
  hcooh.push({shape: o1, color: o1.color, trans: o1.trans});
  hcooh.push({shape: o2, color: o2.color, trans: o2.trans});
  hcooh.push({shape: h1, color: h1.color, trans: h1.trans});
  hcooh.push({shape: h2, color: h2.color, trans: h2.trans});
  
  return hcooh;
}

// HOOC-COOH - Kwas szczawiowy
function generate_3d_hooccooh(){
  var hooccooh = [];
  
  c1 = generate_3d_c( -0.75, 0, 0);
  c2 = generate_3d_c( 0.75, 0, 0);
  o1 = generate_3d_o(-1.5, -0.7, 0);
  o2 = generate_3d_o(-1.5, 0.7, 0);
  o3 = generate_3d_o( 1.5, 0.7, 0);
  o4 = generate_3d_o( 1.5, -0.7, 0);
  h1 = generate_3d_h( 2.2, 0.7, 0);
  h2 = generate_3d_h(-2.2,-0.7, 0);
  
  hooccooh.push({shape: c1, color: c1.color, trans: c1.trans});
  hooccooh.push({shape: c2, color: c2.color, trans: c2.trans});
  hooccooh.push({shape: o1, color: o1.color, trans: o1.trans});
  hooccooh.push({shape: o2, color: o2.color, trans: o2.trans});
  hooccooh.push({shape: o3, color: o3.color, trans: o3.trans});
  hooccooh.push({shape: o4, color: o4.color, trans: o4.trans});
  hooccooh.push({shape: h1, color: h1.color, trans: h1.trans});
  hooccooh.push({shape: h2, color: h2.color, trans: h2.trans});
  
  return hooccooh;
}

// C6H6 - Benzen
function generate_3d_c6h6(){
  var c6h6 = [];
  
  c1 = generate_3d_c(   0,  1.5, 0);
  c2 = generate_3d_c(   0, -1.5, 0);
  c3 = generate_3d_c( 1.5,  0.9, 0);
  c4 = generate_3d_c( 1.5, -0.6, 0);
  c5 = generate_3d_c(-1.5,  0.9, 0);
  c6 = generate_3d_c(-1.5, -0.6, 0);

  h1 = generate_3d_h(   0,  2.5, 0);
  h2 = generate_3d_h(   0, -2.5, 0);
  h3 = generate_3d_h( 2.5,  1.5, 0);
  h4 = generate_3d_h( 2.5, -1.2, 0);
  h5 = generate_3d_h(-2.5,  1.5, 0);
  h6 = generate_3d_h(-2.5, -1.2, 0);
  
  c6h6.push({shape: c1, color: c1.color, trans: c1.trans});
  c6h6.push({shape: c2, color: c2.color, trans: c2.trans});
  c6h6.push({shape: c3, color: c3.color, trans: c3.trans});
  c6h6.push({shape: c4, color: c4.color, trans: c4.trans});
  c6h6.push({shape: c5, color: c5.color, trans: c5.trans});
  c6h6.push({shape: c6, color: c6.color, trans: c6.trans});
  
  c6h6.push({shape: h1, color: h1.color, trans: h1.trans});
  c6h6.push({shape: h2, color: h2.color, trans: h2.trans});
  c6h6.push({shape: h3, color: h3.color, trans: h3.trans});
  c6h6.push({shape: h4, color: h4.color, trans: h4.trans});
  c6h6.push({shape: h5, color: h5.color, trans: h5.trans});
  c6h6.push({shape: h6, color: h6.color, trans: h6.trans});
  
  return c6h6;
}

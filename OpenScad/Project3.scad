   module gear(inner_circle, outter_circle, height, tooth_cub, number_of_teeth)
{
 difference()
    {
        cylinder(h=height, r=outter_circle);
        translate([0,0,-1])         cylinder(h=height+2,r=inner_circle);
    }
    
    for(i=[0:number_of_teeth-1])
    {
        rotate([0,0,(360/number_of_teeth)*i])
        
        hull()
        {
            translate([outter_circle-tooth_cub/3,-tooth_cub/2,0]) 
    cube([tooth_cub,tooth_cub,height],0);
            
            translate([outter_circle+tooth_cub/2,-tooth_cub/4,0]) 
    cube([tooth_cub/2,tooth_cub/2,height],0);  
        }
    }
    
}



module track(outter_width,outter_depth,inner_width,inner_depth,height)
{
    wd = outter_width - inner_width;
    dd = outter_depth - inner_depth;
difference()
{
    cube([outter_width,outter_depth,height]);
    translate([wd/2,dd/2,-1])
    cube([inner_width,inner_depth,height+2]);
}
    
translate([-height/3,outter_depth*0.75,height/2])
rotate([90,00,0])
cylinder(h=outter_depth/2,r=height/2);
    
}


module BECKY(cubs,distance_between,center,start)
{
    translate([-center,start,-cubs])
    cube([cubs,6000,cubs*2],0);
    
    translate([-center,start-distance_between,-cubs])
    cube([cubs,6000,cubs*2],0);
        
}


module movement(inner_circle,outter_circle,height,tooth_cub,number_of_teeth)
{
    X=180;
    TXX=height*0.8;
    TXY=height*1.5;
    TXZ=outter_circle*1.02;
    rotate([0,90,0])
    rotate([0, 0, -$t * 180])
gear(inner_circle=inner_circle,outter_circle=outter_circle,height=height,tooth_cub=tooth_cub,number_of_teeth=number_of_teeth);
    
    translate([0,height*8,0])
    rotate([0,90,0])
    rotate([0, 0, -$t * X])
gear(inner_circle=inner_circle,outter_circle=outter_circle,height=height,tooth_cub=tooth_cub,number_of_teeth=number_of_teeth);
    
    translate([0,height*16,])
    rotate([0,90,0])
    rotate([0, 0, -$t * X])
gear(inner_circle=inner_circle,outter_circle=outter_circle,height=height,tooth_cub=tooth_cub,number_of_teeth=number_of_teeth);
    
    
    for(i=[-15:13])
    {
    rotate([00,00,90])
translate([-(TXX+(height*2*i)),-TXY,TXZ])
translate([$t*X*20,0,0])

    track(outter_width=height*1.6,outter_depth=height*2,inner_width=tooth_cub*1.1,inner_depth=height*1.1,height=250);  
}

for(i=[-20:10])
    {
    rotate([00,00,90])
translate([-(TXX+(height*2*i)),-TXY,-TXZ-TXZ*0.2])
translate([-$t*3600,0,0])

    track(outter_width=height*1.6,outter_depth=height*2,inner_width=tooth_cub*1.1,inner_depth=height*1.1,height=250);  
}

BECKY(cubs=outter_circle*2,distance_between=height*15.6+height*42,center=outter_circle-height/2,start=height*30);

    translate([0,-2000,outter_circle+height/2])
    translate([0,$t*3600,0])
    cube(1000);


}


movement(inner_circle=800,outter_circle=1000,height=600,tooth_cub=300,number_of_teeth=6);

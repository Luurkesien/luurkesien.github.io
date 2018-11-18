var i;

module gear(inner_circle,outter_circle, height, tooth, number_of_teeth)
{
 difference()
    {
        cylinder(h=height, r=outter_circle,);
        translate([0,0,-1])
        cylinder(h=height+2,r=inner_circle);
    }
    for(i=[0:teeth-1])
    {
    translate([outter_circle,0,0])
    rotate[(360/(i*teeth),0,0];
    cube(tooth);
    }
    
}


gear(15,30,10,6);
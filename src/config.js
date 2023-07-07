function loadConfig() {
    var checked1 = JSON.parse(sessionStorage.getItem("depBox04L"));
    var checked2 = JSON.parse(sessionStorage.getItem("arrBox04L"));
    var checked3 = JSON.parse(sessionStorage.getItem("depBox04R"));
    var checked4 = JSON.parse(sessionStorage.getItem("arrBox04R"));
    var checked5 = JSON.parse(sessionStorage.getItem("depBox15"));
    var checked6 = JSON.parse(sessionStorage.getItem("arrBox15"));
    var checked7 = JSON.parse(sessionStorage.getItem("depBox33"));
    var checked8 = JSON.parse(sessionStorage.getItem("arrBox33"));
    var checked9 = JSON.parse(sessionStorage.getItem("depBox22L"));
    var checked10 = JSON.parse(sessionStorage.getItem("arrBox22L"));
    var checked11 = JSON.parse(sessionStorage.getItem("depBox22R"));
    var checked12 = JSON.parse(sessionStorage.getItem("arrBox22R"));
    var checked13 = JSON.parse(sessionStorage.getItem("closed_04R_22L"));
    var checked14 = JSON.parse(sessionStorage.getItem("closed_15_33"));
    var checked15 = JSON.parse(sessionStorage.getItem("closed_04L_22R"));

    if (checked1 == true){
           document.getElementById('checkboxDep04L').click();
    }
    if (checked2 == true){
           document.getElementById('checkboxArr04L').click();
    }
    if (checked3 == true){
           document.getElementById('checkboxDep04R').click();
    }
    if (checked4 == true){
           document.getElementById('checkboxArr04R').click();
    }
    if (checked5 == true){
           document.getElementById('checkboxDep15').click();
    }
    if (checked6 == true){
           document.getElementById('checkboxArr15').click();
    }
    if (checked7 == true){
           document.getElementById('checkboxDep33').click();
    }
    if (checked8 == true){
           document.getElementById('checkboxArr33').click();
    }
    if (checked9 == true){
           document.getElementById('checkboxDep22L').click();
    }
    if (checked10 == true){
           document.getElementById('checkboxArr22L').click();
    }
    if (checked11 == true){
           document.getElementById('checkboxDep22R').click();
    }
    if (checked12 == true){
           document.getElementById('checkboxArr22R').click();
    }  

    if (checked13 == true){
        document.getElementById('toggle_04R_22L').click();
    } 
    if (checked14 == true){
        document.getElementById('toggle_15_33').click();
    } 
    if (checked15 == true){
        document.getElementById('toggle_04L_22R').click();
    } 
}

function saveConfig(){
    var depBox04L = document.getElementById("checkboxDep04L");
    var arrBox04L = document.getElementById("checkboxArr04L");
    var depBox04R = document.getElementById("checkboxDep04R");
    var arrBox04R = document.getElementById("checkboxArr04R");
    var depBox15 = document.getElementById("checkboxDep15");
    var arrBox15 = document.getElementById("checkboxArr15");
    var depBox33 = document.getElementById("checkboxDep33");
    var arrBox33 = document.getElementById("checkboxArr33");
    var depBox22L = document.getElementById("checkboxDep22L");
    var arrBox22L = document.getElementById("checkboxArr22L");
    var depBox22R = document.getElementById("checkboxDep22R");
    var arrBox22R = document.getElementById("checkboxArr22R");

    sessionStorage.setItem("depBox04L", depBox04L.checked);
    sessionStorage.setItem("arrBox04L", arrBox04L.checked);
    sessionStorage.setItem("depBox04R", depBox04R.checked);
    sessionStorage.setItem("arrBox04R", arrBox04R.checked);
    sessionStorage.setItem("depBox15", depBox15.checked);
    sessionStorage.setItem("arrBox15", arrBox15.checked);
    sessionStorage.setItem("depBox33", depBox33.checked);
    sessionStorage.setItem("arrBox33", arrBox33.checked);
    sessionStorage.setItem("depBox22L", depBox22L.checked);
    sessionStorage.setItem("arrBox22L", arrBox22L.checked);
    sessionStorage.setItem("depBox22R", depBox22R.checked);
    sessionStorage.setItem("arrBox22R", arrBox22R.checked);
}

function dep04L() {
    var checkbox = document.getElementById("checkboxDep04L");
    var otherType = document.getElementById("checkboxArr04L");
    var otherSideDep = document.getElementById("checkboxDep22R");
    var otherSideArr = document.getElementById("checkboxArr22R");
    var otherSide = false;

    if ((otherSideDep.checked == true) || (otherSideArr.checked == true)){
        otherSide = true;
    }

    //if pressed true 
    if (checkbox.checked == true) {
        document.getElementById("arrow04L").style.fill = "black";
        document.getElementById("display04L").style.fill = "white";
        document.getElementById("04L_windSpd").style.fill = "black";
        document.getElementById("04L_windDir").style.fill = "black";
        document.getElementById("04L_windSpd").style.fontWeight = "bold";
        document.getElementById("04L_windDir").style.fontWeight = "bold";
        document.getElementById("dep04L").style.display = "block";
        document.getElementById("rwy04L").style.fill = "#717171";
        document.getElementById("04L_number").style.fill = "black";

        //if other side of runway is active
        if (otherSide == true) {
            document.getElementById("22R_number").style.fill = "black";
        }
        else {
            document.getElementById("22R_number").style.fill = "#363636";
        }
    }
    //if pressed false
    else {
        document.getElementById("dep04L").style.display = "none";
        //if arr is inactive
        if (otherType.checked == false) {
            document.getElementById("arrow04L").style.fill = "none";
            document.getElementById("display04L").style.fill = "#DADADA";
            document.getElementById("04L_windSpd").style.fill = "#B9B8BA";
            document.getElementById("04L_windDir").style.fill = "#B9B8BA";
            document.getElementById("04L_windSpd").style.fontWeight = "normal";
            document.getElementById("04L_windDir").style.fontWeight = "normal";
            document.getElementById("rwy04L").style.fill = "#B5B5B5"; 
            
            //if other side of runway is active
            if (otherSide == true) {
                document.getElementById("rwy04L").style.fill = "#717171";
                document.getElementById("04L_number").style.fill = "#363636";
                document.getElementById("22R_number").style.fill = "black";
            }
            else {
                document.getElementById("rwy04L").style.fill = "#B5B5B5";
                document.getElementById("04L_number").style.fill = "#DADADA";
                document.getElementById("22R_number").style.fill = "#DADADA";
            }
        }
    }
    //loadFMI() to reload windbox font data
}

function arr04L() {
    var checkbox = document.getElementById("checkboxArr04L");
    var otherType = document.getElementById("checkboxDep04L");
    var otherSideDep = document.getElementById("checkboxDep22R"); //other RWY DEP
    var otherSideArr = document.getElementById("checkboxArr22R"); //other RWY ARR
    var otherSide = false;

    if ((otherSideDep.checked == true) || (otherSideArr.checked == true)){
        otherSide = true;
    }

    //if pressed true 
    if (checkbox.checked == true) {
        document.getElementById("arrow04L").style.fill = "black";
        document.getElementById("display04L").style.fill = "white";
        document.getElementById("04L_windSpd").style.fill = "black";
        document.getElementById("04L_windDir").style.fill = "black";
        document.getElementById("04L_windSpd").style.fontWeight = "bold";
        document.getElementById("04L_windDir").style.fontWeight = "bold";
        document.getElementById("arr04L").style.display = "block";
        document.getElementById("rwy04L").style.fill = "#717171"; //Check SVN element ID
        document.getElementById("04L_number").style.fill = "black";

        //if other side of runway is active
        if (otherSide == true) {
            document.getElementById("22R_number").style.fill = "black"; //other RWY
        }
        else {
            document.getElementById("22R_number").style.fill = "#363636"; //other RWY
        }
    }
    //if pressed false
    else {
        document.getElementById("arr04L").style.display = "none";
        //if arr is inactive
        if (otherType.checked == false) {
            document.getElementById("arrow04L").style.fill = "none";
            document.getElementById("display04L").style.fill = "#DADADA";
            document.getElementById("04L_windSpd").style.fill = "#B9B8BA";
            document.getElementById("04L_windDir").style.fill = "#B9B8BA";
            document.getElementById("04L_windSpd").style.fontWeight = "normal";
            document.getElementById("04L_windDir").style.fontWeight = "normal";
            document.getElementById("rwy04L").style.fill = "#B5B5B5"; 
            
            //if other side of runway is active
            if (otherSide == true) {
                document.getElementById("rwy04L").style.fill = "#717171"; //Check SVN element ID
                document.getElementById("04L_number").style.fill = "#363636";
                document.getElementById("22R_number").style.fill = "black"; //other RWY
            }
            else {
                document.getElementById("rwy04L").style.fill = "#B5B5B5"; //Check SVN element ID
                document.getElementById("04L_number").style.fill = "#DADADA";
                document.getElementById("22R_number").style.fill = "#DADADA"; //other RWY
            }
        }
    }
    //loadFMI() to reload windbox font data
}

function dep22R() {
    var checkbox = document.getElementById("checkboxDep22R");
    var otherType = document.getElementById("checkboxArr22R");
    var otherSideDep = document.getElementById("checkboxDep04L"); //other RWY DEP
    var otherSideArr = document.getElementById("checkboxArr04L"); //other RWY ARR
    var otherSide = false;

    if ((otherSideDep.checked == true) || (otherSideArr.checked == true)){
        otherSide = true;
    }

    //if pressed true 
    if (checkbox.checked == true) {
        document.getElementById("arrow22R").style.fill = "black";
        document.getElementById("display22R").style.fill = "white";
        document.getElementById("22R_windSpd").style.fill = "black";
        document.getElementById("22R_windDir").style.fill = "black";
        document.getElementById("22R_windSpd").style.fontWeight = "bold";
        document.getElementById("22R_windDir").style.fontWeight = "bold";
        document.getElementById("dep22R").style.display = "block";
        document.getElementById("rwy04L").style.fill = "#717171"; //Check SVN element ID
        document.getElementById("22R_number").style.fill = "black";

        //if other side of runway is active
        if (otherSide == true) {
            document.getElementById("04L_number").style.fill = "black"; //other RWY
        }
        else {
            document.getElementById("04L_number").style.fill = "#363636"; //other RWY
        }
    }
    //if pressed false
    else {
        document.getElementById("dep22R").style.display = "none";
        //if arr is inactive
        if (otherType.checked == false) {
            document.getElementById("arrow22R").style.fill = "none";
            document.getElementById("display22R").style.fill = "#DADADA";
            document.getElementById("22R_windSpd").style.fill = "#B9B8BA";
            document.getElementById("22R_windDir").style.fill = "#B9B8BA";
            document.getElementById("22R_windSpd").style.fontWeight = "normal";
            document.getElementById("22R_windDir").style.fontWeight = "normal";
            document.getElementById("rwy04L").style.fill = "#B5B5B5"; //Check SVN element ID
            
            //if other side of runway is active
            if (otherSide == true) {
                document.getElementById("rwy04L").style.fill = "#717171"; //Check SVN element ID
                document.getElementById("22R_number").style.fill = "#363636";
                document.getElementById("04L_number").style.fill = "black"; //other RWY
            }
            else {
                document.getElementById("rwy04L").style.fill = "#B5B5B5"; //Check SVN element ID
                document.getElementById("22R_number").style.fill = "#DADADA";
                document.getElementById("04L_number").style.fill = "#DADADA"; //other RWY
            }
        }
    }
    //loadFMI() to reload windbox font data
}

function arr22R() {
    var checkbox = document.getElementById("checkboxArr22R");
    var otherType = document.getElementById("checkboxDep22R");
    var otherSideDep = document.getElementById("checkboxDep04L"); //other RWY DEP
    var otherSideArr = document.getElementById("checkboxArr04L"); //other RWY ARR
    var otherSide = false;

    if ((otherSideDep.checked == true) || (otherSideArr.checked == true)){
        otherSide = true;
    }

    //if pressed true 
    if (checkbox.checked == true) {
        document.getElementById("arrow22R").style.fill = "black";
        document.getElementById("display22R").style.fill = "white";
        document.getElementById("22R_windSpd").style.fill = "black";
        document.getElementById("22R_windDir").style.fill = "black";
        document.getElementById("22R_windSpd").style.fontWeight = "bold";
        document.getElementById("22R_windDir").style.fontWeight = "bold";
        document.getElementById("arr22R").style.display = "block";
        document.getElementById("rwy04L").style.fill = "#717171"; //Check SVN element ID
        document.getElementById("22R_number").style.fill = "black";

        //if other side of runway is active
        if (otherSide == true) {
            document.getElementById("04L_number").style.fill = "black"; //other RWY
        }
        else {
            document.getElementById("04L_number").style.fill = "#363636"; //other RWY
        }
    }
    //if pressed false
    else {
        document.getElementById("arr22R").style.display = "none";
        //if arr is inactive
        if (otherType.checked == false) {
            document.getElementById("arrow22R").style.fill = "none";
            document.getElementById("display22R").style.fill = "#DADADA";
            document.getElementById("22R_windSpd").style.fill = "#B9B8BA";
            document.getElementById("22R_windDir").style.fill = "#B9B8BA";
            document.getElementById("22R_windSpd").style.fontWeight = "normal";
            document.getElementById("22R_windDir").style.fontWeight = "normal";
            document.getElementById("rwy04L").style.fill = "#B5B5B5"; //Check SVN element ID
            
            //if other side of runway is active
            if (otherSide == true) {
                document.getElementById("rwy04L").style.fill = "#717171"; //Check SVN element ID
                document.getElementById("22R_number").style.fill = "#363636";
                document.getElementById("04L_number").style.fill = "black"; //other RWY
            }
            else {
                document.getElementById("rwy04L").style.fill = "#B5B5B5"; //Check SVN element ID
                document.getElementById("22R_number").style.fill = "#DADADA";
                document.getElementById("04L_number").style.fill = "#DADADA"; //other RWY
            }
        }
    }
    //loadFMI() to reload windbox font data
}

function dep04R() {
    var checkbox = document.getElementById("checkboxDep04R");
    var otherType = document.getElementById("checkboxArr04R");
    var otherSideDep = document.getElementById("checkboxDep22L");
    var otherSideArr = document.getElementById("checkboxArr22L");
    var otherSide = false;

    if ((otherSideDep.checked == true) || (otherSideArr.checked == true)){
        otherSide = true;
    }

    //if pressed true 
    if (checkbox.checked == true) {
        document.getElementById("arrow04R").style.fill = "black";
        document.getElementById("display04R").style.fill = "white";
        document.getElementById("04R_windSpd").style.fill = "black";
        document.getElementById("04R_windDir").style.fill = "black";
        document.getElementById("04R_windSpd").style.fontWeight = "bold";
        document.getElementById("04R_windDir").style.fontWeight = "bold";
        document.getElementById("dep04R").style.display = "block";
        document.getElementById("rwy04R").style.fill = "#717171";
        document.getElementById("04R_number").style.fill = "black";
        document.getElementById("bringToFront04R22L").style.display = "block";

        //if other side of runway is active
        if (otherSide == true) {
            document.getElementById("22L_number").style.fill = "black";
            document.getElementById("bringToFront04R22L").style.display = "block";
        }
        else {
            document.getElementById("22L_number").style.fill = "#363636";
        }
    }
    //if pressed false
    else {
        document.getElementById("dep04R").style.display = "none";
        //if arr is inactive
        if (otherType.checked == false) {
            document.getElementById("arrow04R").style.fill = "none";
            document.getElementById("display04R").style.fill = "#DADADA";
            document.getElementById("04R_windSpd").style.fill = "#B9B8BA";
            document.getElementById("04R_windDir").style.fill = "#B9B8BA";
            document.getElementById("04R_windSpd").style.fontWeight = "normal";
            document.getElementById("04R_windDir").style.fontWeight = "normal";
            document.getElementById("rwy04R").style.fill = "#B5B5B5"; 
            
            //if other side of runway is active
            if (otherSide == true) {
                document.getElementById("rwy04R").style.fill = "#717171";
                document.getElementById("04R_number").style.fill = "#363636";
                document.getElementById("22L_number").style.fill = "black";
            }
            else {
                document.getElementById("rwy04R").style.fill = "#B5B5B5";
                document.getElementById("04R_number").style.fill = "#DADADA";
                document.getElementById("22L_number").style.fill = "#DADADA";
                document.getElementById("bringToFront04R22L").style.display = "none";
            }
        }
    }
    //loadFMI() to reload windbox font data
}

function arr04R() {
    var checkbox = document.getElementById("checkboxArr04R");
    var otherType = document.getElementById("checkboxDep04R");
    var otherSideDep = document.getElementById("checkboxDep22L"); //other RWY DEP
    var otherSideArr = document.getElementById("checkboxArr22L"); //other RWY ARR
    var otherSide = false;

    if ((otherSideDep.checked == true) || (otherSideArr.checked == true)){
        otherSide = true;
    }

    //if pressed true 
    if (checkbox.checked == true) {
        document.getElementById("arrow04R").style.fill = "black";
        document.getElementById("display04R").style.fill = "white";
        document.getElementById("04R_windSpd").style.fill = "black";
        document.getElementById("04R_windDir").style.fill = "black";
        document.getElementById("04R_windSpd").style.fontWeight = "bold";
        document.getElementById("04R_windDir").style.fontWeight = "bold";
        document.getElementById("arr04R").style.display = "block";
        document.getElementById("rwy04R").style.fill = "#717171"; //Check SVN element ID
        document.getElementById("04R_number").style.fill = "black";
        document.getElementById("bringToFront04R22L").style.display = "block";

        //if other side of runway is active
        if (otherSide == true) {
            document.getElementById("22L_number").style.fill = "black"; //other RWY
            document.getElementById("bringToFront04R22L").style.display = "block";
        }
        else {
            document.getElementById("22L_number").style.fill = "#363636"; //other RWY
        }
    }
    //if pressed false
    else {
        document.getElementById("arr04R").style.display = "none";
        //if arr is inactive
        if (otherType.checked == false) {
            document.getElementById("arrow04R").style.fill = "none";
            document.getElementById("display04R").style.fill = "#DADADA";
            document.getElementById("04R_windSpd").style.fill = "#B9B8BA";
            document.getElementById("04R_windDir").style.fill = "#B9B8BA";
            document.getElementById("04R_windSpd").style.fontWeight = "normal";
            document.getElementById("04R_windDir").style.fontWeight = "normal";
            document.getElementById("rwy04R").style.fill = "#B5B5B5"; 
            
            //if other side of runway is active
            if (otherSide == true) {
                document.getElementById("rwy04R").style.fill = "#717171"; //Check SVN element ID
                document.getElementById("04R_number").style.fill = "#363636";
                document.getElementById("22L_number").style.fill = "black"; //other RWY
            }
            else {
                document.getElementById("rwy04R").style.fill = "#B5B5B5"; //Check SVN element ID
                document.getElementById("04R_number").style.fill = "#DADADA";
                document.getElementById("22L_number").style.fill = "#DADADA"; //other RWY
                document.getElementById("bringToFront04R22L").style.display = "none";
            }
        }
    }
    //loadFMI() to reload windbox font data
}

function dep22L() {
    var checkbox = document.getElementById("checkboxDep22L");
    var otherType = document.getElementById("checkboxArr22L");
    var otherSideDep = document.getElementById("checkboxDep04R"); //other RWY DEP
    var otherSideArr = document.getElementById("checkboxArr04R"); //other RWY ARR
    var otherSide = false;

    if ((otherSideDep.checked == true) || (otherSideArr.checked == true)){
        otherSide = true;
    }

    //if pressed true 
    if (checkbox.checked == true) {
        document.getElementById("arrow22L").style.fill = "black";
        document.getElementById("display22L").style.fill = "white";
        document.getElementById("22L_windSpd").style.fill = "black";
        document.getElementById("22L_windDir").style.fill = "black";
        document.getElementById("22L_windSpd").style.fontWeight = "bold";
        document.getElementById("22L_windDir").style.fontWeight = "bold";
        document.getElementById("dep22L").style.display = "block";
        document.getElementById("rwy04R").style.fill = "#717171"; //Check SVN element ID
        document.getElementById("22L_number").style.fill = "black";
        document.getElementById("bringToFront04R22L").style.display = "block";

        //if other side of runway is active
        if (otherSide == true) {
            document.getElementById("04R_number").style.fill = "black"; //other RWY
            document.getElementById("bringToFront04R22L").style.display = "block";
        }
        else {
            document.getElementById("04R_number").style.fill = "#363636"; //other RWY
        }
    }
    //if pressed false
    else {
        document.getElementById("dep22L").style.display = "none";
        //if arr is inactive
        if (otherType.checked == false) {
            document.getElementById("arrow22L").style.fill = "none";
            document.getElementById("display22L").style.fill = "#DADADA";
            document.getElementById("22L_windSpd").style.fill = "#B9B8BA";
            document.getElementById("22L_windDir").style.fill = "#B9B8BA";
            document.getElementById("22L_windSpd").style.fontWeight = "normal";
            document.getElementById("22L_windDir").style.fontWeight = "normal";
            document.getElementById("rwy04R").style.fill = "#B5B5B5"; //Check SVN element ID
            
            //if other side of runway is active
            if (otherSide == true) {
                document.getElementById("rwy04R").style.fill = "#717171"; //Check SVN element ID
                document.getElementById("22L_number").style.fill = "#363636";
                document.getElementById("04R_number").style.fill = "black"; //other RWY
            }
            else {
                document.getElementById("rwy04R").style.fill = "#B5B5B5"; //Check SVN element ID
                document.getElementById("22L_number").style.fill = "#DADADA";
                document.getElementById("04R_number").style.fill = "#DADADA"; //other RWY
                document.getElementById("bringToFront04R22L").style.display = "none";
            }
        }
    }
    //loadFMI() to reload windbox font data
}

function arr22L() {
    var checkbox = document.getElementById("checkboxArr22L");
    var otherType = document.getElementById("checkboxDep22L");
    var otherSideDep = document.getElementById("checkboxDep04R"); //other RWY DEP
    var otherSideArr = document.getElementById("checkboxArr04R"); //other RWY ARR
    var otherSide = false;

    if ((otherSideDep.checked == true) || (otherSideArr.checked == true)){
        otherSide = true;
    }

    //if pressed true 
    if (checkbox.checked == true) {
        document.getElementById("arrow22L").style.fill = "black";
        document.getElementById("display22L").style.fill = "white";
        document.getElementById("22L_windSpd").style.fill = "black";
        document.getElementById("22L_windDir").style.fill = "black";
        document.getElementById("22L_windSpd").style.fontWeight = "bold";
        document.getElementById("22L_windDir").style.fontWeight = "bold";
        document.getElementById("arr22L").style.display = "block";
        document.getElementById("rwy04R").style.fill = "#717171"; //Check SVN element ID
        document.getElementById("22L_number").style.fill = "black";
        document.getElementById("bringToFront04R22L").style.display = "block";

        //if other side of runway is active
        if (otherSide == true) {
            document.getElementById("04R_number").style.fill = "black"; //other RWY
            document.getElementById("bringToFront04R22L").style.display = "block";
        }
        else {
            document.getElementById("04R_number").style.fill = "#363636"; //other RWY
        }
    }
    //if pressed false
    else {
        document.getElementById("arr22L").style.display = "none";
        //if arr is inactive
        if (otherType.checked == false) {
            document.getElementById("arrow22L").style.fill = "none";
            document.getElementById("display22L").style.fill = "#DADADA";
            document.getElementById("22L_windSpd").style.fill = "#B9B8BA";
            document.getElementById("22L_windDir").style.fill = "#B9B8BA";
            document.getElementById("22L_windSpd").style.fontWeight = "normal";
            document.getElementById("22L_windDir").style.fontWeight = "normal";
            document.getElementById("rwy04R").style.fill = "#B5B5B5"; //Check SVN element ID
            
            //if other side of runway is active
            if (otherSide == true) {
                document.getElementById("rwy04R").style.fill = "#717171"; //Check SVN element ID
                document.getElementById("22L_number").style.fill = "#363636";
                document.getElementById("04R_number").style.fill = "black"; //other RWY
            }
            else {
                document.getElementById("rwy04R").style.fill = "#B5B5B5"; //Check SVN element ID
                document.getElementById("22L_number").style.fill = "#DADADA";
                document.getElementById("04R_number").style.fill = "#DADADA"; //other RWY
                document.getElementById("bringToFront04R22L").style.display = "none";
            }
        }
    }
    //loadFMI() to reload windbox font data
}

function dep15() {
    var checkbox = document.getElementById("checkboxDep15");
    var otherType = document.getElementById("checkboxArr15");
    var otherSideDep = document.getElementById("checkboxDep33"); //other RWY DEP
    var otherSideArr = document.getElementById("checkboxArr33"); //other RWY ARR
    var otherSide = false;

    if ((otherSideDep.checked == true) || (otherSideArr.checked == true)){
        otherSide = true;
    }

    //if pressed true 
    if (checkbox.checked == true) {
        document.getElementById("arrow15").style.fill = "black";
        document.getElementById("display15").style.fill = "white";
        document.getElementById("15_windSpd").style.fill = "black";
        document.getElementById("15_windDir").style.fill = "black";
        document.getElementById("15_windSpd").style.fontWeight = "bold";
        document.getElementById("15_windDir").style.fontWeight = "bold";
        document.getElementById("dep15").style.display = "block";
        document.getElementById("rwy15").style.fill = "#717171"; //Check SVN element ID
        document.getElementById("15_number").style.fill = "black";
        document.getElementById("bringToFront04R22L").style.display = "none";

        //if other side of runway is active
        if (otherSide == true) {
            document.getElementById("33_number").style.fill = "black"; //other RWY
            document.getElementById("bringToFront04R22L").style.display = "none";
        }
        else {
            document.getElementById("33_number").style.fill = "#363636"; //other RWY
        }
    }
    //if pressed false
    else {
        document.getElementById("dep15").style.display = "none";
        //if arr is inactive
        if (otherType.checked == false) {
            document.getElementById("arrow15").style.fill = "none";
            document.getElementById("display15").style.fill = "#DADADA";
            document.getElementById("15_windSpd").style.fill = "#B9B8BA";
            document.getElementById("15_windDir").style.fill = "#B9B8BA";
            document.getElementById("15_windSpd").style.fontWeight = "normal";
            document.getElementById("15_windDir").style.fontWeight = "normal";
            document.getElementById("rwy15").style.fill = "#B5B5B5"; //Check SVN element ID
            
            //if other side of runway is active
            if (otherSide == true) {
                document.getElementById("rwy15").style.fill = "#717171"; //Check SVN element ID
                document.getElementById("15_number").style.fill = "#363636";
                document.getElementById("33_number").style.fill = "black"; //other RWY
            }
            else {
                document.getElementById("rwy15").style.fill = "#B5B5B5"; //Check SVN element ID
                document.getElementById("15_number").style.fill = "#DADADA";
                document.getElementById("33_number").style.fill = "#DADADA"; //other RWY
                document.getElementById("bringToFront04R22L").style.display = "block";
            }
        }
    }
    //loadFMI() to reload windbox font data
}

function arr15() {
    var checkbox = document.getElementById("checkboxArr15");
    var otherType = document.getElementById("checkboxDep15");
    var otherSideDep = document.getElementById("checkboxDep33"); //other RWY DEP
    var otherSideArr = document.getElementById("checkboxArr33"); //other RWY ARR
    var otherSide = false;

    if ((otherSideDep.checked == true) || (otherSideArr.checked == true)){
        otherSide = true;
    }

    //if pressed true 
    if (checkbox.checked == true) {
        document.getElementById("arrow15").style.fill = "black";
        document.getElementById("display15").style.fill = "white";
        document.getElementById("15_windSpd").style.fill = "black";
        document.getElementById("15_windDir").style.fill = "black";
        document.getElementById("15_windSpd").style.fontWeight = "bold";
        document.getElementById("15_windDir").style.fontWeight = "bold";
        document.getElementById("arr15").style.display = "block";
        document.getElementById("rwy15").style.fill = "#717171"; //Check SVN element ID
        document.getElementById("15_number").style.fill = "black";
        document.getElementById("bringToFront04R22L").style.display = "none";

        //if other side of runway is active
        if (otherSide == true) {
            document.getElementById("33_number").style.fill = "black"; //other RWY
            document.getElementById("bringToFront04R22L").style.display = "none";
        }
        else {
            document.getElementById("33_number").style.fill = "#363636"; //other RWY
        }
    }
    //if pressed false
    else {
        document.getElementById("arr15").style.display = "none";
        //if arr is inactive
        if (otherType.checked == false) {
            document.getElementById("arrow15").style.fill = "none";
            document.getElementById("display15").style.fill = "#DADADA";
            document.getElementById("15_windSpd").style.fill = "#B9B8BA";
            document.getElementById("15_windDir").style.fill = "#B9B8BA";
            document.getElementById("15_windSpd").style.fontWeight = "normal";
            document.getElementById("15_windDir").style.fontWeight = "normal";
            document.getElementById("rwy15").style.fill = "#B5B5B5"; //Check SVN element ID
            
            //if other side of runway is active
            if (otherSide == true) {
                document.getElementById("rwy15").style.fill = "#717171"; //Check SVN element ID
                document.getElementById("15_number").style.fill = "#363636";
                document.getElementById("33_number").style.fill = "black"; //other RWY
            }
            else {
                document.getElementById("rwy15").style.fill = "#B5B5B5"; //Check SVN element ID
                document.getElementById("15_number").style.fill = "#DADADA";
                document.getElementById("33_number").style.fill = "#DADADA"; //other RWY
                document.getElementById("bringToFront04R22L").style.display = "block";
            }
        }
    }
    //loadFMI() to reload windbox font data
}

function dep33() {
    var checkbox = document.getElementById("checkboxDep33");
    var otherType = document.getElementById("checkboxArr33");
    var otherSideDep = document.getElementById("checkboxDep15"); //other RWY DEP
    var otherSideArr = document.getElementById("checkboxArr15"); //other RWY ARR
    var otherSide = false;

    if ((otherSideDep.checked == true) || (otherSideArr.checked == true)){
        otherSide = true;
    }

    //if pressed true 
    if (checkbox.checked == true) {
        document.getElementById("arrow33").style.fill = "black";
        document.getElementById("display33").style.fill = "white";
        document.getElementById("33_windSpd").style.fill = "black";
        document.getElementById("33_windDir").style.fill = "black";
        document.getElementById("33_windSpd").style.fontWeight = "bold";
        document.getElementById("33_windDir").style.fontWeight = "bold";
        document.getElementById("dep33").style.display = "block";
        document.getElementById("rwy15").style.fill = "#717171"; //Check SVN element ID
        document.getElementById("33_number").style.fill = "black";
        document.getElementById("bringToFront04R22L").style.display = "none";

        //if other side of runway is active
        if (otherSide == true) {
            document.getElementById("15_number").style.fill = "black"; //other RWY
            document.getElementById("bringToFront04R22L").style.display = "none";
        }
        else {
            document.getElementById("15_number").style.fill = "#363636"; //other RWY
        }
    }
    //if pressed false
    else {
        document.getElementById("dep33").style.display = "none";
        //if arr is inactive
        if (otherType.checked == false) {
            document.getElementById("arrow33").style.fill = "none";
            document.getElementById("display33").style.fill = "#DADADA";
            document.getElementById("33_windSpd").style.fill = "#B9B8BA";
            document.getElementById("33_windDir").style.fill = "#B9B8BA";
            document.getElementById("33_windSpd").style.fontWeight = "normal";
            document.getElementById("33_windDir").style.fontWeight = "normal";
            document.getElementById("rwy15").style.fill = "#B5B5B5"; //Check SVN element ID
            
            //if other side of runway is active
            if (otherSide == true) {
                document.getElementById("rwy15").style.fill = "#717171"; //Check SVN element ID
                document.getElementById("33_number").style.fill = "#363636";
                document.getElementById("15_number").style.fill = "black"; //other RWY
            }
            else {
                document.getElementById("rwy15").style.fill = "#B5B5B5"; //Check SVN element ID
                document.getElementById("33_number").style.fill = "#DADADA";
                document.getElementById("15_number").style.fill = "#DADADA"; //other RWY
                document.getElementById("bringToFront04R22L").style.display = "block";
            }
        }
    }
    //loadFMI() to reload windbox font data
}

function arr33() {
    var checkbox = document.getElementById("checkboxArr33");
    var otherType = document.getElementById("checkboxDep33");
    var otherSideDep = document.getElementById("checkboxDep15"); //other RWY DEP
    var otherSideArr = document.getElementById("checkboxArr15"); //other RWY ARR
    var otherSide = false;

    if ((otherSideDep.checked == true) || (otherSideArr.checked == true)){
        otherSide = true;
    }

    //if pressed true 
    if (checkbox.checked == true) {
        document.getElementById("arrow33").style.fill = "black";
        document.getElementById("display33").style.fill = "white";
        document.getElementById("33_windSpd").style.fill = "black";
        document.getElementById("33_windDir").style.fill = "black";
        document.getElementById("33_windSpd").style.fontWeight = "bold";
        document.getElementById("33_windDir").style.fontWeight = "bold";
        document.getElementById("arr33").style.display = "block";
        document.getElementById("rwy15").style.fill = "#717171"; //Check SVN element ID
        document.getElementById("33_number").style.fill = "black";
        document.getElementById("bringToFront04R22L").style.display = "none";

        //if other side of runway is active
        if (otherSide == true) {
            document.getElementById("15_number").style.fill = "black"; //other RWY
            document.getElementById("bringToFront04R22L").style.display = "none";
        }
        else {
            document.getElementById("15_number").style.fill = "#363636"; //other RWY
        }
    }
    //if pressed false
    else {
        document.getElementById("arr33").style.display = "none";
        //if arr is inactive
        if (otherType.checked == false) {
            document.getElementById("arrow33").style.fill = "none";
            document.getElementById("display33").style.fill = "#DADADA";
            document.getElementById("33_windSpd").style.fill = "#B9B8BA";
            document.getElementById("33_windDir").style.fill = "#B9B8BA";
            document.getElementById("33_windSpd").style.fontWeight = "normal";
            document.getElementById("33_windDir").style.fontWeight = "normal";
            document.getElementById("rwy15").style.fill = "#B5B5B5"; //Check SVN element ID
            
            //if other side of runway is active
            if (otherSide == true) {
                document.getElementById("rwy15").style.fill = "#717171"; //Check SVN element ID
                document.getElementById("33_number").style.fill = "#363636";
                document.getElementById("15_number").style.fill = "black"; //other RWY
            }
            else {
                document.getElementById("rwy15").style.fill = "#B5B5B5"; //Check SVN element ID
                document.getElementById("33_number").style.fill = "#DADADA";
                document.getElementById("15_number").style.fill = "#DADADA"; //other RWY
                document.getElementById("bringToFront04R22L").style.display = "block";
            }
        }
    }
    //loadFMI() to reload windbox font data
}
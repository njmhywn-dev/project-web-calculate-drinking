function amountOFwater(age, gender) {
    if(age === "0" && gender === 'male' || age === 0 && gender === 'female'){
        return display('content1','ปริมาณน้ำอ้างอิงที่ควรได้รับ (มิลลิลิตร) : 1,000-1,500 มิลลิลิตร')
    }
    else if(age === "1" && gender === 'male' || age === 1 && gender === 'female'){
        return display('content1','ปริมาณน้ำอ้างอิงที่ควรได้รับ (มิลลิลิตร) : 1,300-1,950 มิลลิลิตร')
    }
    else if(age === "2" && gender === 'male' || age === 2 && gender === 'female'){
        return display('content1','ปริมาณน้ำอ้างอิงที่ควรได้รับ (มิลลิลิตร) : 1,400-2,100 มิลลิลิตร')
    }
    else if(age === "3"){
        if(gender === 'male'){
            return display('content1','ปริมาณน้ำอ้างอิงที่ควรได้รับ (มิลลิลิตร) : (ชาย) 1,700-2,550 มิลลิลิตร')
        }
        else if(gender === 'female'){
            return display('content1','ปริมาณน้ำอ้างอิงที่ควรได้รับ (มิลลิลิตร) : (หญิง) 1,600-2,400 มิลลิลิตร')
        }
    }
    else if(age === "4"){
        if(gender === 'male'){
            return display('content1','ปริมาณน้ำอ้างอิงที่ควรได้รับ (มิลลิลิตร) : (ชาย) 1,700-2,550 มิลลิลิตร')
        }
        else if(gender === 'female'){
            return display('content1','ปริมาณน้ำอ้างอิงที่ควรได้รับ (มิลลิลิตร) : (หญิง) 1,600-2,400 มิลลิลิตร')
        }
    }
    else if(age === "5"){
        if(gender === 'male'){
            return display('content1','ปริมาณน้ำอ้างอิงที่ควรได้รับ (มิลลิลิตร) : (ชาย) 2,250-3,375 มิลลิลิตร')
        }
        else if(gender === 'female'){
            return display('content1','ปริมาณน้ำอ้างอิงที่ควรได้รับ (มิลลิลิตร) : (หญิง) 1,850-2,775 มิลลิลิตร')
        }
    }
    else if(age === "6"){
        if(gender === 'male'){
            return display('content1','ปริมาณน้ำอ้างอิงที่ควรได้รับ (มิลลิลิตร) : (ชาย) 2,250-3,375 มิลลิลิตร')
        }
        else if(gender === 'female'){
            return display('content1','ปริมาณน้ำอ้างอิงที่ควรได้รับ (มิลลิลิตร) : (หญิง) 1,750-2,625 มิลลิลิตร')
        }
    }
    else if(age === "7"){
        if(gender === 'male'){
            return display('content1','ปริมาณน้ำอ้างอิงที่ควรได้รับ (มิลลิลิตร) : (ชาย) 2,100-3,150 มิลลิลิตร')
        }
        else if(gender === 'female'){
            return display('content1','ปริมาณน้ำอ้างอิงที่ควรได้รับ (มิลลิลิตร) : (หญิง) 1,750-2,625 มิลลิลิตร')
        }
    }
    else if(age === "8"){
        if(gender === 'male'){
            return display('content1','ปริมาณน้ำอ้างอิงที่ควรได้รับ (มิลลิลิตร) : (ชาย) 1,750-2,625 มิลลิลิตร')
        }
        else if(gender === 'female'){
            return display('content1','ปริมาณน้ำอ้างอิงที่ควรได้รับ (มิลลิลิตร) : (หญิง) 1,550-2,325 มิลลิลิตร')
        }
    }
}

function calculateByweight(weight){
    parseFloat(weight)
    result = weight * 2.2 * 30/2
    Value1 = result.toFixed(2)
    num = Value1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return display('content2','ปริมาณน้ำที่ควรได้รับ (มิลลิลิตร) : '+ num +' มิลลิลิตร')
}

function display(elementID ,value) {
    document.getElementById(elementID).innerHTML = value
}

function inputValue1() {
    var value1 = document.getElementById('age').value
    var value2 = document.getElementsByName('gender')

    for(i = 0; i < value2.length; i++) {
        if(value2[i].checked){
            
            return amountOFwater(value1, value2[i].value)
        }
    }
}

function inputValue2(){
    var value3 = document.getElementById("weight").value
    return calculateByweight(value3)
}
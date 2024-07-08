function copyText() {
    var input = document.getElementById('text');
    input.select();
    input.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(input.value).then(function() {
        alert("Copied the text: " + input.value);
    }).catch(function(error) {
        console.error("Error copying text: ", error);
    });
}

function updateVolume(value) {
    document.getElementById('rangeValue').textContent = value;
}


function generate(){
    let upper = document.getElementById('checkbox1').checked;
    let lower = document.getElementById('checkbox2').checked;
    let number = document.getElementById('checkbox3').checked;
    let symbol = document.getElementById('checkbox4').checked;

    let count=0;
    if(upper) count++;
    if(lower) count++;
    if(number) count++;
    if(symbol) count++;

    if(count!=0){
        let str="";
        let n = parseInt(document.getElementById('range').value);
        for(let i=0;i<n;i++){
            let a = Math.floor(4*Math.random());
            switch(a){
                case 0:
                    if(number){
                        let b = Math.floor(10*Math.random());
                        str+=b;
                    }
                    else{
                        i--;
                    }
                    break;
        
                case 1:
                    if(lower){
                        let b = Math.floor(26*Math.random());
                        str+=String.fromCharCode(b+97);
                    }
                    else{
                        i--;
                    }
                    break;
                
                case 2:
                    if(upper){
                        let b = Math.floor(26*Math.random());
                        str+=String.fromCharCode(b+65);
                    }
                    else{
                        i--;
                    }
                    break;
                
                case 3:
                    if(symbol){
                        let b = Math.floor(8*Math.random());
                        switch(b){
                            case 0:
                                str+="!";
                                break;
                            case 1:
                                str+="@";
                                break;
                            case 2:
                                str+="#";
                                break;
                            case 3:
                                str+="$";
                                break;
                            case 4:
                                str+="%";
                                break;
                            case 5:
                                str+="^";
                                break;
                            case 6:
                                str+="&";
                                break;
                            case 7:
                                str+="*";
                                break;
                        }
                    }
                    else{
                        i--;
                    }
                    break;
            }
        }
        document.getElementById('text').value = str;
    }
    check(count);

}

function check(count){
    let circles = document.getElementsByClassName('circle');
    for(let i=0;i<circles.length;i++){
        if(count == 0 || count == 1){
            circles[i].style.backgroundColor = 'red';
        }
        else if(count == 2 || count == 3){
            circles[i].style.backgroundColor = 'yellow';
        }
        else{
            circles[i].style.backgroundColor = '#70e000';
        }
    }
}

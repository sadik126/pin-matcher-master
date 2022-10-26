function generatepin() {
    const pin = Math.round(Math.random() * 10000)

    const pinstring = pin + '';

    if (pinstring.length == 4) {

        const showpin = document.getElementById('showpin');
        showpin.value = pin;
    }
    else {
        return generatepin();
    }









}

document.getElementById('numbers').addEventListener('click', function (e) {
    const click = e.target.innerText;
    const typedpin = document.getElementById('typed-pin');
    const previousvalue = typedpin.value;

    if (isNaN(click)) {
        if (click == 'C') {
            typedpin.value = '';
        }
        if (click == '<') {
            const del = previousvalue.substring(0, previousvalue.length - 1)
            typedpin.value = del;

        }
    }
    else {


        typedpin.value = previousvalue + click;

    }


})

function pinsubmit() {
    const typedpin = document.getElementById('typed-pin');
    const previousvalue = typedpin.value;

    const showpin = document.getElementById('showpin');
    const orginalpin = showpin.value;

    if (previousvalue == orginalpin) {
        document.getElementById('success').style.display = 'block';
        document.getElementById('error').style.display = 'none';
        typedpin.value = '';
        showpin.value = '';
    }
    else {
        document.getElementById('error').style.display = 'block';
        document.getElementById('success').style.display = 'none';
    }
}

